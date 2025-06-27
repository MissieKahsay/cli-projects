const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function greetingBot() {
    rl.question("What is your name, stranger? ", (name) => {
        name = name.trim();
        if (name === "") {
            console.log("Please, write your name.");
            return greetingBot(); // ask again
        }

        rl.question("How old are you? ", (age) => {
            const ageNum = Number(age.trim());

            if (isNaN(ageNum) || ageNum <= 0) {
                console.log("Please enter a valid age.");
                return greetingBot(); // ask again
            }

            rl.question("What is your favorite food? ", (food) => {
                food = food.trim();

                console.log(`\nDon't call me a magician, but your name is ${name}, you're ${ageNum} years old, and your favorite food is ${food}!`);
                rl.close();
            });
        });
    });
}

greetingBot();
