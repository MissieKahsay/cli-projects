class toDoLisst {
  constructor() {
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
    console.log(`${task} added!`);
  }
}
