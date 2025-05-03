function merge<A extends Object, B extends Object>(objA: A, objB: B): A & B {
  return Object.assign(objA, objB);
}
