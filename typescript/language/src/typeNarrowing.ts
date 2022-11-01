function triple(value: number | string): number | string {
  if (typeof value === 'number') {
    return value * 3;
  }

  return value.repeat(3);
}
