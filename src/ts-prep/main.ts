// Generic

// i will save here for remind of this really hard section :)

const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true)); // false
console.log(isObj("john")); //false
console.log(isObj([1, 2, 3])); // false
console.log(isObj({ name: "fadhil" })); // true
console.log(isObj(null)); // false

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(<keyof T>arg).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(false)); // { arg : false, is : false}
console.log(isTrue(0)); // { arg : 0, is : true}
console.log(isTrue(true)); // { arg : true, is : true}
console.log(isTrue(1)); // {arg : 1, is : true}
console.log(isTrue("fadhil")); // {arg : "fadhil", is : true}
console.log(isTrue("")); // {arg : "". is : false}
console.log(isTrue(null)); // { arg: null, is : false}
console.log(isTrue(undefined)); // { arg : undefined, is : false }
console.log(isTrue({})); // {arg : {...}, is : false}
console.log(isTrue({ name: "katak" })); // {arg : {name : "katak"}, is : true}
console.log(isTrue([])); // {arg : [], is : false}
console.log(isTrue([1, 2, 3])); // {arg : [1,2,3] , is : true}
console.log(isTrue(NaN)); // {arg : NaN, is : false}
console.log(isTrue(-0)); // {arg : -0, is : false}

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolean = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(<keyof T>arg).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

interface hasID {
  id: number;
}

const processUser = <T extends hasID>(user: T): T => {
  return user;
};

console.log(processUser({ id: 1, name: "fadhil" })); // {id : 1, name : "fadhil"}
// console.log(processUser({ name: "fadhil" }));

const getUsersProperty = <T extends hasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject<string>("json");
console.log(store.state); // json
store.state = "dat";
// store.state = 12;

const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = ["data", "da", 23, true];

console.log(myState.state); // ['data', 'da', 23, true]
