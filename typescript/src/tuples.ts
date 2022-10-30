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

const pt: I_Point = { x: 1, y: 2 };
const thomas: I_Person = {
  id: 23232323,
  name: 'Thomas',
  age: 23,
  sayHi: (name: string) => `Hi ${name}`,
};
