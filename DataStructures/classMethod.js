/*
 -- Classes are blueprints that when created make objects known as instances
 -- Classes are created with the 'new' keyword
 -- The 'constructor' function is a special function that runs when the class is instantiated
 -- Instance methods can be added to classes similar to methods in objects
 -- Class methods can be added using the 'static' keyword
*/

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }

    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return "You are Expelled!";
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage() {
        let sum = this.scores.reduce(function (a, b) { return a + b; })
        return sum / this.scores.length;
    }
    static enrollStudents(...students) {
        return "Enrolling Students!";
    }
}

let firstStudent = new Student("Ian", "Miller");
let secondStudent = new Student("Tom", "Foolery");

Student.enrollStudents([firstStudent, secondStudent]);