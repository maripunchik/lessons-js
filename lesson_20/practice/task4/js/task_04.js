// cуворий режим
"use strict";

// =================================================================

// Розробити форму для введення логіна і пароля. Якщо введено вірний логін і пароль (логін: "склад", пароль:"паляниця"), то привітати користувача.

// ---з загальним методом генерування input
class LoginForm {
  constructor() {}
  //---
  renderInpEl(labelText, inpType) {
    const inpContainer = document.createElement("div");

    const label = document.createElement("label");
    label.innerText = labelText;

    const inpuEl = document.createElement("input");
    inpuEl.type = inpType;
    label.append(inpuEl);

    inpContainer.append(label);

    return { inpContainer, inpuEl };
  }
  //---
  onSend(event) {
    // потрібно створити власну подію, клікаючи на кнопку
    const customEvent = new CustomEvent("completed", {
      detail: {
        login: this.loginInp.value,
        password: this.passwordInp.value,
      },
      bubbles: true, // додати, що він у нас вспливав
    });
    event.target.dispatchEvent(customEvent);
  }
  //---
  render(containerSelector) {
    const formContainer = document.createElement("div");

    const { inpContainer: loginContainer, inpuEl: loginInp } = this.renderInpEl(
      "Login",
      "text"
    ); // вказуємо контейнеру нову назву
    formContainer.append(loginContainer);
    this.loginInp = loginInp;

    const { inpContainer: passwordContainer, inpuEl: passwordInp } =
      this.renderInpEl("Password", "password"); // вказуємо контейнеру нову назву
    formContainer.append(passwordContainer);
    this.passwordInp = passwordInp;

    const btn = document.createElement("button");
    btn.innerText = "Login";
    btn.onclick = this.onSend.bind(this); //bind-щоб не втратити контекст
	 formContainer.append(btn)

    if (containerSelector) {
      document.querySelector(containerSelector).append(formContainer);
    }

	 this.$el = formContainer // у vue має таке звернення(доступ) до DOM-елемента, в js назва може бути будь яка
    return formContainer;
  }
}
//*коли формується render(), який формує наш контейнер, для того, щоб в подальшому Клас міг оперувати з тим контейнером, який створив, можна додати властивість( this.$el = )
window.onload = function () {
  const f1 = new LoginForm(); // згідно нашої умови, після того, як створили формочку, потрібно звертатися до об'єкта Класу, а об'єкт Класу не має .addEventListener, адже .addEventListener є тільки у HTML-елементів
  f1.render("#cnt");
  f1.$el.addEventListener("completed", (e) => console.log(e.detail)); //{login: '333', password: '111'}
};

// =========================================================================

// class LoginForm {
//   constructor() {}
//   //---
//   renderLogin() {
//     const loginContainer = document.createElement("div");

//     const label = document.createElement("label");
//     label.innerText = "Login";

//     const loginInp = document.createElement("input");
//     label.append(loginInp);
//     this.loginInp = loginInp; // щоб кожного разу не шукати

//     loginContainer.append(label);

//     return loginContainer;
//   }
//   //---
//   renderPassword() {
//     const passwordContainer = document.createElement("div");

//     const label = document.createElement("label");
//     label.innerText = "Password";

//     const passwordInp = document.createElement("input");
// 	 passwordInp.type = 'password'
//     label.append(passwordInp);
//     this.passwordInp = passwordInp; // щоб кожного разу не шукати

//     passwordContainer.append(label);

//     return passwordContainer;
//   }
//   //---
//   render(containerSelector) {
// 	const formContainer = document.createElement('div')

// 	formContainer.append(this.renderLogin(),this.renderPassword())

// 	if (containerSelector){
// document.querySelector(containerSelector).append(formContainer)
// 	}

// 	return formContainer;
//   }
// }

// window.onload = function () {
//   const f1 = new LoginForm();
//   f1.render("#cnt");
// //   f1.$el.addEventListener("completed", (e) => console.log(e.detail));
// };
