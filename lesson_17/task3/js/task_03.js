// cуворий режим
"use strict";

// =================================================================

// Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.

if (confirm("Почати всі тестування?")) {
  class Reminder {
    static #instance = null;
    static get instance() {
      return Reminder.#instance;
    }
    static reminderCount = 0;

    #eventReminderText;
    #intervalRange;
    #intervalId;

    constructor(eventReminderText, intervalRange) {
      if (Reminder.instance) return Reminder.instance;
      this.EventReminderText = eventReminderText;
      this.IntervalRange = intervalRange;
      Reminder.#instance = this;
    }
    // геттер для eventReminderText
    get EventReminderText() {
      return this.#eventReminderText;
    }
    // сеттер для eventReminderText
    set EventReminderText(newText) {
      if (newText === "") throw new Error("Потрібен текст нагадування");
      this.#eventReminderText = newText;
    }
    // геттер для intervalRange
    get IntervalRange() {
      return this.#intervalRange;
    }
    // сеттер для eventReminderText
    set IntervalRange(newIntervalRange) {
      if (newIntervalRange <= 0)
        throw new Error("Інтервал має бути додатнім числом");
      this.#intervalRange = newIntervalRange;
    }
    //----
    startReminder() {
      this.#intervalId = setInterval(() => {
        Reminder.reminderCount++;
        console.log(
          `Нагадування ${Reminder.reminderCount} - ${this.#eventReminderText}`
        );
      }, this.#intervalRange * 1000);
    }
    //----
    changeText(newText) {
      this.EventReminderText = newText;
      console.log(`Текст нагадування змінено на: ${newText}`);
    }
    //---
    stopReminder() {
      if (this.#intervalId) {
        clearInterval(this.#intervalId);
        console.log(
          `Нагадування зупинено після ${Reminder.reminderCount} разів`
        );
        this.#intervalId = null;
        Reminder.reminderCount = 0;
      }
    }
    //---
    toString() {
      return `Нагадувач: "${this.#eventReminderText}", інтервал: ${
        this.#intervalRange} секунд`;
    }
  }
  //---
  try {
    let reminder1 = new Reminder("Пора рухатись!", 2);
    reminder1.startReminder();

    setTimeout(
      () => reminder1.changeText("Негайно розпочинайте виконувати вправи!"),
      6000
    );
    setTimeout(() => reminder1.stopReminder(), 20000);
  } catch (error) {
    console.error(error.message);
  }
}
