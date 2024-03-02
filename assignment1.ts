// basic Types 

let num: number = 76;

let str: string = "Sushanth";

let bool: boolean = true;

let arr: Array<number>;
arr = [1,2,3,4,5];

let tup: [a: string,b: number];
tup=["Hello",100];

const enum Weeks{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

// Functions 

let add=function(a: number,b: number): number {
    return a+b;
}

let capitalize=function(s: string): string {
    let temp= s.charAt(0).toUpperCase() + s.substring(1);
    
    return temp;
}

// Interfaces

interface Person{
    name: string;
    age: number;
    email: string;
}

let user: Person = {
    name: "Sushanth",
    age: 20,
    email: "ksgsushanth@gmail.com",
};

// Classes

class Car{
    make!: string;
    model!: string;
    year!: number;

    displayInfo(): string{
        return this.make+" of model "+this.model+" made in the year "+this.year.toString();
    }
}

// Generics

function reverseArray<Type>(a: Array<Type>): Array<Type> {
    return a.reverse();
}

