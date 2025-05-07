// cуворий режим
"use strict";

// =================================================================

//  Розробити клас Baner
// ----Поля ----- Масив об’єктів ( графічних зображень та посилань на сайти)

// ----методи ----- Метод випадкового вибору об’єкта (графічного зображення та посилання)
// ---------------- Метод виведення випадкового банера

if (confirm("Почати тестування?")) {
  class Baner {
    constructor(banners) {
      this.banners = banners;
    }

    // -- Метод випадкового вибору об’єкта (графічного зображення та посилання)
    getRandomBannerIndex() {
      const index = Math.floor(Math.random() * this.banners.length);
      return this.banners[index];
    }
    // -- Метод виведення випадкового банера
    showRandomBanner() {
      const bannerRand = this.getRandomBannerIndex();
      document.writeln(`<a href= "${bannerRand.link}"><img src="${bannerRand.image}" alt="Banner"></a>`)
    }
  }

  const banners = [
    {
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/007/509/720/small/colorful-summer-background-for-banner-or-poster-design-abstract-wavy-background-it-s-summer-time-vector.jpg",
      link: "https://stud-point.com/blog/pryklady-oryhinalnoi-reklamy/",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/037/127/023/small/happy-valentines-day-set-card-3d-glossy-gold-glass-hearts-on-luxury-paper-background-holiday-poster-with-golden-geometric-frames-jewels-concept-for-valentines-banner-flyer-party-invitation-gift-vector.jpg",
      link: "https://stud-point.com/blog/pryklady-oryhinalnoi-reklamy/",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/010/128/158/small/abstract-golden-floral-frame-border-dark-blue-banner-design-free-vector.jpg",
      link: "https://stud-point.com/blog/pryklady-oryhinalnoi-reklamy/",
    },
    {
      image:
        "https://image.shutterstock.com/image-vector/vintage-typographic-design-elements-set-260nw-2290292561.jpg",
      link: "https://stud-point.com/blog/pryklady-oryhinalnoi-reklamy/",
    },
    {
      image:
        "https://image.shutterstock.com/image-vector/3d-bubble-testimonial-banner-quote-260nw-2406010407.jpg",
      link: "https://stud-point.com/blog/pryklady-oryhinalnoi-reklamy/",
    },
  ];

  const result = new Baner(banners)
  result.showRandomBanner()
}

// ============================================
