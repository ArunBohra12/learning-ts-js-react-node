type rgb = [number, number, number];
let rgb: rgb = [2, 3, 4];

type HttpResponse = [404, string];

const notFoundRes: HttpResponse = [404, 'NOT FOUND'];
// notFoundRes.push('arun');

// -------------------------------------------------
// ENUMS

enum OrderStatus {
  PENDING = 10,
  SHIPPED = 11,
  DELIVERED = 12,
  RETURNED = 13,
}

enum ArrowKeys {
  up = 'ARROW UP',
  down = 'ARROW DOWN',
}

const orderStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus): boolean {
  return status === OrderStatus.DELIVERED;
}

isDelivered(1);

interface I_Point {
  x: number;
  y: number;
}

interface I_Person {
  readonly id: number;
  name: string;
  age: number;
  nickname?: string;
  // sayHi: (name: string) => string;
  sayHi(name: string): string;
  lastName?: string;
}

const pt: I_Point = { x: 1, y: 2, z: 10 };

const thomas: I_Person = {
  id: 23232323,
  name: 'Thomas',
  age: 23,
  sayHi: (name: string) => `Hi ${name}`,
};

// extends interface and not overwrites
interface I_Point {
  z?: number;
}

interface doctor extends I_Person {
  job: 'doctor' | 'nurse' | 'surgeon';
}

const Jamie: doctor = {
  id: 232323,
  name: 'Jamie',
  age: 22,
  sayHi: (name: string) => `Hi, ${name}`,
  job: 'doctor',
};

interface I_Employee {
  readonly email: string;
}

interface I_Engineer extends I_Person {
  speciality: string;
  languages: Array<string>;
}

const tony: I_Engineer = {
  id: 2323,
  name: 'Tony',
  age: 25,
  sayHi: (name: string) => `Hi, ${name}`,
  speciality: 'web',
  languages: ['javascript'],
};
