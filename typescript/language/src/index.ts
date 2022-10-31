const square = function (num: number): number {
  return num * num;
};

const intro = (person: string, birthYear: number): void => {
  console.log(`Name: ${person}`);

  console.log(`Age: ${2022 - birthYear}`);
};

const greet = function (person: string = 'Stranger'): string {
  console.log(person);

  return `Hi there, ${person}`;
};

const random = function (num: number): string | number {
  if (Math.random() < 0.5) {
    return 'Less';
  } else {
    return 5;
  }
};

// Anonymous functions

const colors: string[] = ['red', 'green', 'yellow', 'blue'];

colors.map(color => {
  return color.toUpperCase();
});

const makeError = function (message: string): never {
  throw new Error(message);
};

const gameLoop = function (): never {
  while (true) {
    console.log('RUNNING THE GAME LOOP');
  }
};

// Exercise

const twoFer = (person: string = 'you'): string => {
  return `One for ${person}, one for me.`;
};

const leapYear = (year: number): boolean => {
  return year % 4 === 0;
};

const currentYear = 2022;
