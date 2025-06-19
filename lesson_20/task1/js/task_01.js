// cуворий режим
"use strict";

// =================================================================

//  Дано перелік товарів у кошику. При зміні кількості одиниць товару збільшувати загальну
// вартість. Створити клас Product, що призначений для маніпуляцій товаром та клас ProductManager
// що оперує з усіма товарами (через подію передавати ідентифікатор товару та операцію, що зроблена

class Product {
  constructor(product, cssObj, minCount = 1) {
    this.product = product;
    this.cssObj = cssObj;
    this.minCount = minCount;
    this.$el = null;
  }
  //---
  createElement(tag, attributes = {}, className = "", text = "") {
    const element = document.createElement(tag);

    for (const key in attributes) {
      element.setAttribute(key, attributes[key]);
    }

    if (className) {
      element.className = className;
    }

    if (text) {
      element.innerText = text;
    }

    return element;
  }
  //---
  dispatchEvent(type) {
    const customEvent = new CustomEvent(type, {
      detail: {
        id: this.product.id,
        amount: this.product.price * this.product.count,
      },
      bubbles: true,
    });

    if (this.$el) {
      this.$el.dispatchEvent(customEvent);
    }
  }
  //---
  renderImage(src, alt) {
    const imgCnt = this.createElement("div", {}, this.cssObj.img);
    const img = this.createElement("img", { src, alt });
    imgCnt.append(img);

    return imgCnt;
  }
  //---
  renderTitle(text, tag) {
    return this.createElement(tag, {}, "", text);
  }
  //---
  renderBtn(icon, classEl) {
    return this.createElement(
      "button",
      {},
      `${this.cssObj.sign} ${classEl}`,
      icon
    );
  }
  //---
  renderCount() {
    return this.createElement("div", {}, this.cssObj.count, this.product.count);
  }
  //---
  renderAmountProduct() {
    return this.createElement(
      "div",
      {},
      this.cssObj.amount,
      `${this.product.price * this.product.count} ₴`
    );
  }
  //---
  changeCount(e) {
    console.log(e.target.className);
    const btn = e.target.closest("button");

    if (
      !btn ||
      (!btn.classList.contains("add") && !btn.classList.contains("sub"))
    )
      return;

    if (btn.classList.contains("add")) {
      this.product.count++;
    } else if (btn.classList.contains("sub")) {
      this.product.count = Math.max(this.minCount, this.product.count - 1);
    }

    this.$el.querySelector(`.${this.cssObj.count}`).innerText =
      this.product.count;
    this.$el.querySelector(`.${this.cssObj.amount}`).innerText = `${
      this.product.price * this.product.count
    } ₴`;

    this.dispatchEvent("countChanged");
  }

  //---
  deleteProduct() {
    this.dispatchEvent("productDeleted");
    this.$el.remove();
  }
  //---
renderControls(){
	const controls = this.createElement('div',{},this.cssObj.controls)
	controls.append(this.renderBtn('+','add'))
	controls.append(this.renderCount());
	controls.append(this.renderBtn("-", "sub"));

	return controls
}
  //---
  render() {
    const itemProduct = this.createElement("div", {}, this.cssObj.itemProduct);
    itemProduct.setAttribute("id", this.product.id);
    this.$el = itemProduct;

	 const deleteWrapper = this.createElement('div',{}, this.cssObj.deleteWrapper)
	 const deleteBtn = this.renderBtn("X", "delete");
    deleteWrapper.append(deleteBtn);
    itemProduct.append(deleteWrapper);

	 const leftCol = this.createElement('div',{},this.cssObj.left)
	 leftCol.append(this.renderImage(this.product.img,this.product.alt))
	 leftCol.append(this.renderControls())
	 itemProduct.append(leftCol)

	 const centerCol = this.renderTitle(this.product.name,'h2')
	 itemProduct.append(centerCol)

	 const amount = this.renderAmountProduct()
	 itemProduct.append(amount)

   leftCol.querySelector('.add').addEventListener("click", (e) => {
      e.stopPropagation();
      this.changeCount(e);
    });

    leftCol.querySelector('.sub').addEventListener("click", (e) => {
      e.stopPropagation();
      this.changeCount(e);
    });

   deleteBtn.addEventListener("click", () => {
      this.deleteProduct();
    });

    return itemProduct;
  }
}

class ProductManager {
  constructor(container, cssObj) {
    this.container = container;
    this.products = [];
    this.cssObj = cssObj;
    this.totalAmount = 0;
  }
  //---
  addProduct(product) {
    this.products.push(product);
    const productElement = product.render();
    this.container.append(productElement);

    productElement.addEventListener(
      "countChanged",
      this.updateTotal.bind(this)
    );
    productElement.addEventListener(
      "productDeleted",
      this.removeProduct.bind(this)
    );

    this.updateTotal();
  }
  //---
  removeProduct(e) {
    const productId = e.detail.id;
    const productIndex = this.products.findIndex(
      (product) => product.product.id === productId
    );

    if (productIndex !== -1) {
      this.products.splice(productIndex, 1);
      this.updateTotal();
    }
  }
  //---
  updateTotal() {
    this.totalAmount = this.products.reduce((total, product) => {
      return total + product.product.price * product.product.count;
    }, 0);

    const totalEl = document.getElementById("totalValue");
    if (totalEl) {
      totalEl.innerText = `${this.totalAmount} ₴`;
    }
  }
}
//---

const container = document.getElementById("productsContainer");

const cssObj = {
  itemProduct: "product__item",
  img: "product__img",
  count: "product__count",
  sign: "product__sign",
  amount: "product__amount",
  controls: "product__controls",
  deleteWrapper: "product__delete-wrapper",
  left: "product__left"
};

const manager = new ProductManager(container, cssObj);

const productsList = [
  {
    id: "p1",
    name: "Сир «Шостка» 50% ",
    price: 120,
    count: 1,
    img: "img/images(cheese).jpg",
    alt: "cheese",
  },
  {
    id: "p2",
    name: "Молоко пастеризоване Яготинське 2,6%, 900 мл",
    price: 40,
    count: 2,
    img: "img/images(milk).jpg",
    alt: "milk",
  },
  {
    id: "p3",
    name: "Хліб тостовий зерновий нарізаний, 500 г",
    price: 25,
    count: 1,
    img: "img/images(bread).jpg",
    alt: "bread",
  },
];

productsList.forEach((prod) => {
  const product = new Product(prod, cssObj);
  manager.addProduct(product);
});
