const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Quiz data stored in an array
const questions = [
  {
    text: "What is the capital of France?\nA) Paris\nB) Rome\nC) Berlin",
    correctAnswers: ["a", "paris"]
  },
  {
    text: "5 + 3 = ?\nA) 6\nB) 8\nC) 0",
    correctAnswers: ["b", "8"]
  },
  {
    text: "Is JavaScript a programming language? (yes/no)",
    correctAnswers: ["yes"]
  }
];

let score = 0;
let current = 0;

function askQuestion() {
  if (current < questions.length) {
    rl.question(`\nQuestion ${current + 1}:\n${questions[current].text}\nYour answer: `, (answer) => {
      const clean = answer.trim().toLowerCase();
      if (questions[current].correctAnswers.includes(clean)) {
        console.log("✅ Correct!");
        score++;
      } else {
        console.log("❌ Incorrect.");
      }
      current++;
      askQuestion(); // ask the next one
    });
  } else {
    console.log(`\n🎉 You got ${score} out of ${questions.length} questions right!`);
    rl.close();
  }
}

console.log("📚 Welcome to the Quiz Bot!");
askQuestion();
