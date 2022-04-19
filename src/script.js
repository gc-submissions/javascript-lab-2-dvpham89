"use strict";

const randomDamage = () => {
  return Math.ceil(Math.random() * 10);
};

const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  /*if (!randNum) {
    return opt1;
  } else {
    return opt2;
  }*/
  return randNum ? opt2 : opt1;
};

const attackPlayer = function (health) {
  return health - randomDamage();
};

const logHealth = (player, health) => {
  console.log(`Player: ${player}, Health: ${health}`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => health <= 0;

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}
fight("Jeff", "Andrea", 100, 100);

// extended challenges
// 1. getGrade
const getGrade = (number) => {
  if (number >= 90) {
    return "A";
  } else if (number >= 80) {
    return "B";
  } else if (number >= 70) {
    return "C";
  } else if (number >= 60) {
    return "D";
  } else {
    return "F";
  }
};
console.log(getGrade(95));
console.log(getGrade(85));
console.log(getGrade(75));
console.log(getGrade(65));
console.log(getGrade(55));

// 3 things to check when working with functions
// 1. parameters (how many and what data type(s) - sometimes none)
// 2. return (what does this function return, if anything, and what is the data type)
// 3. what is the purpose of this function (could be answered with the return question)
// * when calling, arguments MUST match parameters (in amount and data type(s) -- sometimes none)

const prioritize = (urgent, important) => {
  if (urgent && important) {
    return 1;
  } else if (!urgent && important) {
    return 2;
  } else if (urgent && !important) {
    return 3;
  } else {
    return 4;
  }
};
console.log(prioritize(true, true));
console.log(prioritize(false, true));
console.log(prioritize(true, false));
console.log(prioritize(false, false));

const calculatePay = (wage, hours) => {
  if (hours > 40) {
    // ot logic
    const otHours = hours - 40;
    const otPay = otHours * wage * 1.5;
    return wage * 40 + otPay;
  } else {
    return wage * hours;
  }
};
console.log(calculatePay(10, 20));
console.log(calculatePay(10, 40));
console.log(calculatePay(10, 50));
console.log(calculatePay(12, 60));
