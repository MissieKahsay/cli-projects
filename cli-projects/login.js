const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const users = [
  { username: "missie", password: "secret123" },
  { username: "jessica", password: "queen123" },
  { username: "admin", password: "adminpass" },
  { username: "rick", password: "8656" },
];

let attempts = 0;
const maxAttempts = 3;

function login() {
  rl.question("Enter your username: ", (nameInput) => {
    const name = nameInput.trim().toLowerCase();
    const user = users.find((u) => u.username === name);

    if (!user) {
      console.log("Unknown username, please try again.");
      attempts++;
      if (attempts < maxAttempts) {
        login();
      } else {
        console.log("❌ Maximum retries reached. Goodbye!");
        rl.close();
      }
      return;
    }

    rl.question("Password: ", (passwordInput) => {
      const password = passwordInput.trim();

      if (user.password !== password) {
        console.log("❌ Wrong password!");
        attempts++;
        if (attempts < maxAttempts) {
          login();
        } else {
          console.log("❌ Maximum retries reached. Goodbye!");
          rl.close();
        }
      } else {
        console.log(`✅ Welcome back, ${user.username}!`);
        rl.close();
      }
    });
  });
}

login();
