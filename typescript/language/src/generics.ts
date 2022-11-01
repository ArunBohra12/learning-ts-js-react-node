const strings: Array<string | number> = [];

// const inputEl = document.querySelector<HTMLInputElement>('input')!;
// const btnEl = document.querySelector<HTMLButtonElement>('.btn')!;

const identityStr = (item: string): string => {
  return item;
};

// const identity = (item: any): any => {
//   return item;
// };

interface Cat {
  cat: string;
  breed: string;
}

const identity = <T>(item: T): T => {
  return item;
};

const meowsy: Cat = {
  cat: 'Meowsy',
  breed: 'x',
};
const meowsalot: Cat = {
  cat: 'Meowsalot',
  breed: 'x',
};
const eliot: Cat = {
  cat: 'Eliot',
  breed: 'x',
};

identity<string>('arun');
identity<number>(10);
identity<Cat>(meowsy);

const returnRandomElement = function <Type>(array: Array<Type>): Type {
  const randomNumber = Math.floor(Math.random() * array.length);

  return array[randomNumber];
};

returnRandomElement([meowsy, meowsalot, eliot]);

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return {
    ...obj1,
    ...obj2,
  };
}

const comboObj = merge({ name: 'arun' }, { pets: ['blue', 'elton'] });

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

console.log(comboObj);
const lengthyObj: Lengthy = { length: 10 };
console.log(printDoubleLength(lengthyObj));

function makeEmptyList<T = number>(): Array<T> {
  return [];
}

const newNames = makeEmptyList<string>();
const newNums = makeEmptyList();
newNums.push(77);

// -------------------------------
// GENERIC CLASSES

interface I_Song {
  title: string;
  artist: string;
}

interface I_Video {
  title: string;
  creator: string;
  resolution: string;
}

// class Playlist<T> {}

const Playlist = class<T> {
  public queue: Array<T> = [];

  add(el: T): void {
    this.queue.push(el);
  }
};

const songsPlaylist = new Playlist<I_Song>();
const videosPlaylist = new Playlist<I_Video>();

const whiskyLullaby: I_Video = {
  creator: 'Alan',
  title: 'Whisky Lullaby',
  resolution: '1080',
};

const blueRidgeMountainSong: I_Song = {
  artist: 'Alan Jackson',
  title: 'Whisky Lullaby',
};

videosPlaylist.add(whiskyLullaby);
songsPlaylist.add(blueRidgeMountainSong);

console.log(songsPlaylist.queue);
console.log(songsPlaylist.queue);
console.log(videosPlaylist.queue);
