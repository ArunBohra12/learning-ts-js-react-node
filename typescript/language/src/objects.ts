const dog = {
  name: 'Elton',
  breed: 'Australian Shepherd',
  age: 2.5,
};

const printName = function (person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
};

// printName({ first: 'Arun', last: 'Bohra' });

const singer = { first: 'Mick', last: 'Jagger', age: 20 };
// printName(singer);

type Point = {
  x: number;
  y: number;
};

let coordinate: Point = { x: 34, y: 96 };

const makeRandomCoordinate = function (): Point {
  return { x: Math.floor(Math.random() * 20 + 2), y: Math.floor(Math.random() * 20 + 2) };
};

const doubleCoordinate = function (point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
};

// ---------------------------------------------------------
// ---------------------------------------------------------

type Song = {
  title: string;
  artist: string;
  numberOfStreams: number;
  credits?: {
    producer: string;
    writer: string;
  };
};

const calculatePayout = function (song: Song): number {
  return song.numberOfStreams * 0.0033;
};

const printSong = function (song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
};

const song: Song = {
  title: 'Down to the Honkytonk',
  artist: 'Jake Owen',
  numberOfStreams: 7888883,
};

const earnings = calculatePayout(song);
console.log(earnings);
printSong(song);

// ---------------------------------------------------------
// ---------------------------------------------------------
type User = {
  // Can't re assign the property with readonly
  readonly id: number;
  name: string;
};

const arun: User = {
  id: 6998983382,
  name: 'Arun Bohra',
};

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const smily: ColorfulCircle = {
  radius: 20,
  color: 'yellow',
};

// ---------------------------------------------------------
// ---------------------------------------------------------

// UNION TYPES

const calculateTax = function (price: number | string, tax: number): number {
  if (typeof price === 'number') return price * tax;

  if (typeof price === 'string') return Number(price.replace('$', '')) * tax;

  return (tax * price) / 100; // maybe it doesn't calculates tax
};

const songOrPoint: (Song | Point)[] = [];
const eitherSongOrPoint: Song[] | Point[] = [coordinate];
eitherSongOrPoint.push(coordinate);

songOrPoint.push(song);
songOrPoint.push(coordinate);

// eitherSongOrPoint.push(song);

const guessAge = (age: number | string): void => {
  console.log(`Your age is ${age}`);
};

type Coords = {
  lat: number;
  lng: number;
};

type Pt = {
  x: number;
  y: number;
};

let itemLocation: Coords | Pt = {
  lat: 23,
  lng: 22,
};

itemLocation = {
  x: 22,
  y: 13,
};

const nums: (number | string)[] = ['arun'];
const locations: (Pt | Coords)[] = [];

locations.push({ x: 2, y: 3 });
locations.push({ lat: 2, lng: 3 });

// ---------------------------------------
// LITERAL TYPE

let zero: 0 = 0;

let giveAnswer: 'yes' | 'no' | 'maybe' = 'yes';
giveAnswer = 'no';

type DayOfWeek = 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';

// const day: DayOfWeek = 'MON';
const day: DayOfWeek = 'MON';
