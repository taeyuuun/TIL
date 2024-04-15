export default interface person {
    firstName: string;
    lastName: string;
  }
  
  export function sayHello(p: person): string {
    return `Hello, ${p.firstName}!`;
  }