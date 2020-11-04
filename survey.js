const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? : ", (answer) => {
  const name = answer;
  rl.question("What is an activity you like doing? : ", (answer) => {
    const activity = answer;
    rl.question("What do you listen to while doing that? : ", (answer) => {
      const music = answer;
      rl.question("Which meal is your favourite (dinner, brunch...etc)? : ", (answer) => {
        const meal = answer;
        rl.question("What is your favourite thing to eat for that meal? : ", (answer) => {
          const food = answer;
          rl.question("Which sport is your absolute favourite? : ", (answer) => {
            const sport = answer;
            rl.question("What is your superpower? : ", (answer) => {
              const superpower = answer;
              console.log(`${name} loves to ${activity} while listening to ${music}, devouring ${food} for ${meal}, prefers ${sport} and is amazing at ${superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});


