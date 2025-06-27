const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let attempts = 0;
const maxAttempts = 3;

function askName() {
  rl.question("Select your gender, please: ", (gender) => {
    const genderClean = gender.trim().toLowerCase();

    if (
      genderClean === "female" ||
      genderClean === "girl" ||
      genderClean === "woman"
    ) {
      rl.question("What is your name, madam? ", (girlName) => {
        const girlNameClean = girlName.trim().toLowerCase();
        if (girlNameClean === "jessica") {
          console.log("Welcome, Missie's queen. We adore you!");
          rl.close();
        } else {
          attempts++;
          if (attempts >= maxAttempts) {
            console.log("You are overdoing it, girl. Goodbye!");
            rl.close();
          } else {
            console.log("Please leave madam, Missie can't flirt with you here.");
            askName();
          }
        }
      });
    } else if (
      genderClean === "male" ||
      genderClean === "boy" ||
      genderClean === "man"
    ) {
      rl.question("What is your name, sir? ", (boyName) => {
        const boyNameClean = boyName.trim().toLowerCase();
        if (boyNameClean === "missie") {
          console.log("You are the one and the only, Missie.");
          rl.close();
        } else {
          attempts++;
          if (attempts >= maxAttempts) {
            console.log("You are overdoing it, my guy. Goodbye!");
            rl.close();
          } else {
            console.log("Hey boy, leave now! You are not allowed in this area!");
            askName();
          }
        }
      });
    } else {
      console.log("Not a valid gender, stone! Fool me next time!");
      askName();
    }
  });
}

askName();
