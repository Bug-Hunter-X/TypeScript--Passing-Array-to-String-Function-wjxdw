function greeter(person: string | string[]): string {
  if (Array.isArray(person)) {
    return "Hello, " + person.join(" ");
  } else {
    return "Hello, " + person;
  }
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); // Works correctly!

let user2 = "John";
console.log(greeter(user2)); // Works correctly!