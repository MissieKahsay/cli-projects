const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const correctPin = "1234"; // You can change this
let attempts = 0;
const maxAttempts = 3;
let balance = 1000;

function askForPin() {
  rl.question("🔐 Enter your 4-digit PIN: ", (pin) => {
    if (pin.trim() === correctPin) {
      console.log("✅ PIN accepted.\n");
      showMenu();
    } else {
      attempts++;
      if (attempts >= maxAttempts) {
        console.log("❌ Too many failed attempts. Your account is locked.");
        rl.close();
      } else {
        console.log(
          `🚫 Incorrect PIN. Attempts left: ${maxAttempts - attempts}\n`
        );
        askForPin();
      }
    }
  });
}

function showMenu() {
  console.log(`\n👋 Welcome to Missie Bank ATM!
What would you like to do?
1) Check Balance
2) Deposit
3) Withdraw
4) Exit`);

  rl.question("> ", (choice) => {
    switch (choice.trim()) {
      case "1":
        checkBalance();
        break;
      case "2":
        deposit();
        break;
      case "3":
        withdraw();
        break;
      case "4":
        exitATM();
        break;
      default:
        console.log("🚫 Invalid selection. Please choose 1, 2, 3, or 4.");
        showMenu();
    }
  });
}

function checkBalance() {
  console.log(`\n💰 Your current balance is: $${balance}`);
  showMenu();
}

function deposit() {
  rl.question("\n💵 How much would you like to deposit?\n> ", (amount) => {
    const num = Number(amount.trim());
    if (isNaN(num) || num <= 0) {
      console.log("🚫 Invalid amount. Please enter a positive number.");
      return deposit();
    }
    balance += num;
    console.log(
      `✅ $${num} deposited successfully.\n💰 New balance: $${balance}`
    );
    showMenu();
  });
}

function withdraw() {
  rl.question("\n🏧 How much would you like to withdraw?\n> ", (amount) => {
    const num = Number(amount.trim());
    if (isNaN(num) || num <= 0) {
      console.log("🚫 Invalid amount. Please enter a positive number.");
      return withdraw();
    }
    if (num > balance) {
      console.log(`🚫 Insufficient funds. You only have $${balance}.`);
    } else {
      balance -= num;
      console.log(
        `✅ $${num} withdrawn successfully.\n💰 Remaining balance: $${balance}`
      );
    }
    showMenu();
  });
}

function exitATM() {
  console.log("\n👋 Thank you for using Missie Bank ATM. Goodbye!");
  rl.close();
}

// 🔐 Start with PIN check
askForPin();
