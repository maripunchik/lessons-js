// cуворий режим
"use strict";

// =================================================================

// Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.

class SelectionOfCompetitionParticipants {
  constructor(athletesList) {
    this.athletesList = athletesList;
  }

  renderItem(athlete) {
    const athleteLi = document.createElement("li");
    athleteLi.className = "athlete-item";

    const athleteName = document.createElement("h3");
    athleteName.innerText = athlete;

    const arrow = document.createElement("button");
    arrow.className = "arrow-green";
    arrow.innerText = "";

    athleteLi.append(athleteName, arrow);

    return athleteLi;
  }
//---
  renderContainer(title, listClassName) {
    const wrapper = document.createElement("div");
    wrapper.className = "list-container";

    const heading = document.createElement("h2");
    heading.innerText = title;

    const list = document.createElement("ul");
    list.className = listClassName;

    wrapper.append(heading, list);

    return wrapper;
  }

  //   renderGeneralContainer() {
  //     const athleteContainer = document.createElement("div");
  //     athleteContainer.className = "general-list";

  //     const subTitle = document.createElement("h2");
  //     subTitle.innerText = "Загальний список";

  //     athleteContainer.append(subTitle);
  //     for (const athlete of this.athletesList) {
  //       athleteContainer.append(this.renderItem(athlete));
  //     }
  //     return athleteContainer;
  //   }

  //   renderContainerListForCompetition() {
  //     const athleteContainer = document.createElement("div");
  //     athleteContainer.className = "competition-list";

  //     const subTitle = document.createElement("h2");
  //     subTitle.innerText = "Обрані для змагання";

  //     athleteContainer.append(subTitle);

  //     return athleteContainer;
  //   }

//---
  changeAthlete(event) {
    const arrowBtn = event.target.closest(".arrow-green, .arrow-red")
    if (!arrowBtn) return;
	 
	 const athleteItem = arrowBtn.closest(".athlete-item");
    if (!athleteItem) return;

    const isGreen = arrowBtn.classList.contains("arrow-green");

	 const rootContainer = event.currentTarget

    const targetContainer = rootContainer.querySelector(
      isGreen ? "ul.competition-list" : "ul.general-list"
    );

    if (!targetContainer) return;
	 
    arrowBtn.classList.toggle("arrow-green");
    arrowBtn.classList.toggle("arrow-red");

    targetContainer.append(athleteItem);

    //  if (arrowBtn.classList.contains("arrow-green")) {
    //    const targetContainer1 = arrowBtn.closest(".athlete-item");
    //    const containerCompetition = document.querySelector(".competition-list");
    //    arrowBtn.className = "arrow-red";

    //    if (containerCompetition) {
    //      containerCompetition.append(targetContainer1);
    //    }
    //  } else if (arrowBtn.classList.contains("arrow-red")) {
    //    const targetContainer2 = arrowBtn.closest(".athlete-item");
    //    const containerGeneral = document.querySelector(".general-list");
    //    arrowBtn.className = "arrow-green";

    //    if (containerGeneral) {
    //      containerGeneral.append(targetContainer2);
    //    }
    //  }
  }
//-----
  render(selector) {
    if (selector) {
      // selector.append(this.renderGeneralContainer());
      // selector.append(this.renderContainerListForCompetition());
      const generalContainer = this.renderContainer(
        "Загальний список",
        "general-list"
      );
      const competitionContainer = this.renderContainer(
        "Обрані для змагання",
        "competition-list"
      );
      selector.append(generalContainer, competitionContainer);

      const generalList = generalContainer.querySelector("ul.general-list");

      this.athletesList.forEach((athlete) => {
        const item = this.renderItem(athlete);
        generalList.append(item);
      });

      selector.addEventListener("click", this.changeAthlete.bind(this));
    }
  }
}
//----
const athletesList = [
  "Андрій Шевченко",
  "Оксана Петренко",
  "Іван Коваленко",
  "Марія Ткаченко",
  "Сергій Бондар",
];

const listCompetition = new SelectionOfCompetitionParticipants(athletesList);

const container = document.querySelector(".athletes");

listCompetition.render(container);

