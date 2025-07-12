// cуворий режим
"use strict";

// =================================================================
// Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage). Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm). Якщо користувач натискає на «Ок», то видаляти цю задачу.

if (confirm("Почати тестування?")) {
  const defaultTasks = [
    "Зробити зарядку протягом 10 хвилин",
    "Прочитати 5 сторінок книги",
    "Випити 2 склянки води",
    "Прибрати робоче місце",
    "Написати короткий запис у щоденник",
  ];
  //---
  function getRandomNum(min, max) {
    if (min > max) [min, max] = [max, min];
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  //---
  class ToDoManager {
    constructor(defaultTasks = [], timeInterval = 3000) {
      this.key = "toDoList";
      this.timeInterval = timeInterval;
      this.intervalId = null;
      this.toDoList = this.loadTasks(defaultTasks);
    }
    //---
    loadTasks(defaultTasks) {
      try {
        const saved = JSON.parse(localStorage.getItem(this.key));
        if (Array.isArray(saved) && saved.length > 0) {
          return saved;
        }
      } catch (error) {
        console.error(`Помилка при зчитуванні з localStorage`, error);
      }
      this.saveTasks(defaultTasks);
      return [...defaultTasks];
    }
    //---
    saveTasks(tasks = this.toDoList) {
      const strToDoList = JSON.stringify(tasks);
      localStorage.setItem(this.key, strToDoList);
    }
    //---
    addTask(task) {
      if (!task || typeof task !== "string" || task.trim() === "") return;
      if (this.toDoList.includes(task.trim())) {
        alert("Ця задача вже існує!");
        return;
      }
      this.toDoList.push(task.trim());
      this.saveTasks();
    }
    //---
    deleteTask(index) {
      // this.toDoList = this.toDoList.filter((_, i) => i !== index);
      this.toDoList.splice(index, 1);
      this.saveTasks();
    }
    //---
    showRandomTask() {
      if (!Array.isArray(this.toDoList) || this.toDoList.length === 0) {
        this.stopReminder();
        const newTask = prompt(`Всі задачі виконано! Бажаєте додати нову?`);
        if (newTask) {
          this.addTask(newTask);
          this.showRandomTask();
          this.startReminder();
        }
        return;
      }

      const index = getRandomNum(0, this.toDoList.length - 1);
      const task = this.toDoList[index];

      const confirmed = confirm(`Задача для виконання: ${task}`);
      if (confirmed) {
        this.deleteTask(index);
        alert("Задачу виконано і видалено");
      }
    }
    //---
    startReminder() {
      if (this.intervalId !== null) return;
      this.intervalId = setInterval(
        () => this.showRandomTask(),
        this.timeInterval
      );
    }
    //---
    stopReminder() {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
  }
  //---
  const manager = new ToDoManager(defaultTasks);
  manager.startReminder();
}
