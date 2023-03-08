class Student {
    firstName: string;
    lastName: string;
    country: string;
    overallPercentage: number;
  
    constructor(firstName: string, lastName: string, country: string, overallPercentage: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.country = country;
      this.overallPercentage = overallPercentage;
    }
    
    CalculateGrade(): string {
      if (this.overallPercentage >= 80) {
        return 'A';
      } else if (this.overallPercentage >= 60) {
        return 'B';
      } else {
        return 'C';
      }
    }
  }

const jen = new Student('Jen', 'Smith', 'USA', 95);
const marty = new Student('Marty', 'Jones', 'Canada', 45);
const gina = new Student('Gina', 'Kim', 'South Korea', 75);

console.log(`${jen.firstName}'s grade is ${jen.CalculateGrade()}`);
console.log(`${marty.firstName}'s grade is ${marty.CalculateGrade()}`);
console.log(`${gina.firstName}'s grade is ${gina.CalculateGrade()}`);

  

  