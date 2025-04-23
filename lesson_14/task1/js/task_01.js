// cуворий режим
"use strict";

// =================================================================

// Описати масив об'єктів – сайтів розроблених компанією з такими властивостями:

// ----- Властивості ------
// - назва компанії на час розробки (назву періодично змінюють)
// - власник компанії
// - спонсори (масив спонсорів)
//       * прізвище спонсора
//       * ім’я  спонсора
//       * сума вкладень спонсора
// - рік випуску
// - вартість сайту

// Знайти:
// загальну вартість усіх сайтів
// кількість сайтів, що було зроблено між 2000 та 2009 рр.
// кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
// знайти рік, коли прибуток був найбільшим
// упорядкувати список за спаданням прибутку
// Створити 2 окремих списки з копіями об'єктів, що містять сайти з вартість до 10000 і більше 10000

if (confirm("Почати тестування?")) {
  const developedWebsites = [
    {
      companyName: "Stark Industries Web",
      owner: "Антон Сидоров",
      sponsors: [
        { lastName: "Романенко", firstName: "Ірина", investment: 30000 },
        { lastName: "Кузьменко", firstName: "Артем", investment: 50000 },
      ],
      releaseYear: 2000,
      cost: 20000,
    },
    {
      companyName: "WebWakanda",
      owner: "Людмила Горова",
      sponsors: [
        { lastName: "Шевченко", firstName: "Богдан", investment: 10000 },
      ],
      releaseYear: 2004,
      cost: 6000,
    },
    {
      companyName: "SpiderSoft",
      owner: "Максим Іванчук",
      sponsors: [
        { lastName: "Олійник", firstName: "Олена", investment: 25000 },
        { lastName: "Захарченко", firstName: "Роман", investment: 35000 },
      ],
      releaseYear: 2012,
      cost: 21000,
    },
    {
      companyName: "Asgard Systems",
      owner: "Олег Дорошенко",
      sponsors: [
        { lastName: "Кравчук", firstName: "Андрій", investment: 95000 },
        { lastName: "Данилюк", firstName: "Наталія", investment: 110000 },
      ],
      releaseYear: 2003,
      cost: 16000,
    },
    {
      companyName: "StrangeCode",
      owner: "Катерина Лисенко",
      sponsors: [
        { lastName: "Бондар", firstName: "Юлія", investment: 115000 },
        { lastName: "Марченко", firstName: "Євген", investment: 45000 },
        { lastName: "Ткаченко", firstName: "Людмила", investment: 10000 },
        { lastName: "Мельник", firstName: "Марина", investment: 15000 },
      ],
      releaseYear: 2009,
      cost: 25000,
    },
  ];
  // Функція для створення таблиці
  function showInformation(companies) {
    let table = '<table class="task__table">';
    table += `<tr>
	 <th>назва компанії на час розробки</th>
	 <th>власник компанії</th>
	 <th>спонсори (вклад,грн)</th>
	 <th>рік випуску</th>
	 <th>вартість сайту, грн</th>
	 </tr>`;

    companies.forEach(({ companyName, owner, sponsors, releaseYear, cost }) => {
      let sponsorList = sponsors
        .map((s) => `${s.firstName} ${s.lastName} (${s.investment})`)
        .join("<br>");
      table += `<tr>
        <td>${companyName}</td>
        <td>${owner}</td>
        <td>${sponsorList}</td>
        <td>${releaseYear}</td>
        <td>${cost}</td>
      </tr>`;
    });

    table += "</table><br>";
    return table;
  }
  document.writeln(showInformation(developedWebsites));

  document.writeln(`<strong>Знайти: </strong><br>`);
  // ==== загальну вартість усіх сайтів
  const totalCost = developedWebsites.reduce(
    (prevTotalCost, site) => prevTotalCost + site.cost,
    0
  );
  document.writeln(
    `<strong> Загальну вартість усіх сайтів:</strong> ${totalCost} грн<br>`
  );
  // =================================================

  // ==== кількість сайтів, що було зроблено між 2000 та 2009 рр.
  const sitesMadeBetween2000And2009 = developedWebsites.reduce(
    (prevSumNum, site) =>
      site.releaseYear > 2000 && site.releaseYear < 2009
        ? prevSumNum + 1
        : prevSumNum,
    0
  );
  document.writeln(
    `<strong>Кількість сайтів, зроблених між 2000 та 2009 рр.:</strong> ${sitesMadeBetween2000And2009}<br>`
  );
  // =================================================

  // ====  кількість сайтів, де сума спонсорських вкладень була більшою за 100000
  //   const costSitesMoreThan100000 = developedWebsites.reduce(
  //     (prevCount, company) => {
  //       const totalInvestment = company.sponsors.reduce(
  //         (prevSum, sponsor) => prevSum + sponsor.investment,
  //         0
  //       );
  //       return totalInvestment > 100000 ? prevCount + 1 : prevCount;
  //     },
  //     0
  //   );
  
// -------
  const costSitesMoreThan100000 = developedWebsites.filter((company) => {
    const totalInvestment = company.sponsors.reduce(
      (prevSum, sponsor) => prevSum + sponsor.investment,
      0
    );
    return totalInvestment > 100000;
  }).length;

  document.writeln(
    `<strong>Кількість сайтів, де сума спонсорських вкладень була більшою за 100000:</strong> ${costSitesMoreThan100000}<br>`
  );

  // =================================================

  // ====  створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
  //------ 1 варіант
  const sponsorsList = [];
  developedWebsites.forEach((site) => sponsorsList.push(...site.sponsors));
  document.writeln(`<strong>Загальний список усіх спонсорів:</strong><br>`);
  sponsorsList.forEach((sponsor) => {
    document.writeln(`${sponsor.firstName} ${sponsor.lastName}<br>`);
  });

  // ---- 2 варіант
  // 	const sponsorsList = developedWebsites.flatMap((site) => site.sponsors);

  //   document.writeln(`Загальний список усіх спонсорів:<br>`);
  //   sponsorsList.forEach((sponsor) => {
  //     document.writeln(
  //       `${sponsor.firstName} ${sponsor.lastName}<br>`
  //     );
  //   });

  // =================================================

  // ====  знайти рік, коли прибуток був найбільшим
  function getWebsitesWithProfit(developedWebsites) {
    let maxProfit = -Infinity;
    let yearWithMaxProfit = 0;

    const websitesWithProfit = developedWebsites.map((site) => {
      const totalInvestment = site.sponsors.reduce(
        (sum, sponsor) => sum + sponsor.investment,
        0
      );
      const profit = totalInvestment - site.cost;

      if (profit > maxProfit) {
        maxProfit = profit;
        yearWithMaxProfit = site.releaseYear;
      }

      return { ...site, profit };
    });

    return { websitesWithProfit, yearWithMaxProfit, maxProfit };
  }

  const { websitesWithProfit, yearWithMaxProfit, maxProfit } =
    getWebsitesWithProfit(developedWebsites);

  document.writeln(
    `<strong>Рік, коли прибуток був найбільшим:</strong> ${yearWithMaxProfit} (прибуток: ${maxProfit} грн)<br>`
  );

  // console.log(
  //   `Рік, коли прибуток був найбільшим: ${yearWithMaxProfit} (прибуток: ${maxProfit} грн) грн)`
  // );

  // =================================================

  // ==== упорядкувати список за спаданням прибутку
  const sortedByProfit = [...websitesWithProfit].sort(
    (a, b) => b.profit - a.profit
  );
  document.writeln(
    `<strong>Список за спаданням прибутку:(console)</strong><br>`
  );
  console.log("Список за спаданням прибутку:");
  console.table(sortedByProfit);

  // =================================================

  // ====  Створити 2 окремих списки з копіями об'єктів, що містять сайти з вартість до 10000 і більше 10000
  const sitesWorthUpTo10000 = [];
  const sitesWorthMoreThan10000 = [];

  for (const website of developedWebsites) {
    const websiteCopy = JSON.parse(JSON.stringify(website));
    if (website.cost < 10000) {
      sitesWorthUpTo10000.push(websiteCopy);
    } else {
      sitesWorthMoreThan10000.push(websiteCopy);
    }
  }

  document.writeln(
    `<strong>Створити 2 окремих списки з копіями об'єктів, що містять сайти з вартість до 10000 і більше 10000</strong><br>`
  );
  document.writeln("<strong>Сайти з вартістю до 10000:</strong><ul>");
  for (const site of sitesWorthUpTo10000) {
    document.writeln(`<li>${site.companyName} — ${site.cost} грн</li>`);
  }
  document.writeln("</ul>");

  document.writeln("<strong>Сайти з вартістю більше 10000:</strong><ul>");
  for (const site of sitesWorthMoreThan10000) {
    document.writeln(`<li>${site.companyName} — ${site.cost} грн</li>`);
  }
  document.writeln("</ul>");
  // =================================================
}
