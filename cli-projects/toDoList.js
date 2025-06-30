const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tasks = [];

function showMenu() {
  console.log(`\n📝 Missie's To-Do List
What would you like to do?
1) View Tasks
2) Add Task
3) Remove Task
4) Exit`);

  rl.question("> ", (choice) => {
    switch (choice.trim()) {
      case "1":
        viewTasks();
        break;
      case "2":
        addTask();
        break;
      case "3":
        removeTask();
        break;
      case "4":
        exitTodo();
        break;
      default:
        console.log("🚫 Invalid choice. Please enter 1, 2, 3, or 4.");
        showMenu();
    }
  });
}

function viewTasks() {
  if (tasks.length === 0) {
    console.log("\n📭 No tasks yet!");
  } else {
    console.log("\n📋 Your Tasks:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
  showMenu();
}

function addTask() {
  rl.question("\n🆕 What task would you like to add?\n> ", (task) => {
    const newTask = task.trim();
    if (newTask === "") {
      console.log("⚠️ Task cannot be empty.");
      return addTask();
    }
    tasks.push(newTask);
    console.log(`✅ "${newTask}" added.`);
    showMenu();
  });
}

function removeTask() {
  if (tasks.length === 0) {
    console.log("\n🚫 No tasks to remove.");
    return showMenu();
  }

  viewTasks();
  rl.question("\n❌ Enter the task number to remove:\n> ", (num) => {
    const index = Number(num.trim()) - 1;
    if (isNaN(index) || index < 0 || index >= tasks.length) {
      console.log("⚠️ Invalid task number.");
      return removeTask();
    }
    const removed = tasks.splice(index, 1);
    console.log(`🗑️ Removed: "${removed[0]}"`);
    showMenu();
  });
}

function exitTodo() {
  console.log("\n👋 Goodbye, Missie! Stay productive.");
  rl.close();
}

// Start the program
showMenu();
