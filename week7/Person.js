class Person {
  constructor(firstName, lastName, dateOfBirth) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.dateOfBirth = dateOfBirth);
  }

  getFullName() {
    return `${this.lastName}, ${this.firstName}`;
  }

  getAge() {
    const milliToday = Date.now();
    const milliBirthDate = this.dateOfBirth.getTime();
    const diffMilli = milliToday - milliBirthDate;
    const dateOfDiffMilli = new Date(diffMilli);
    return dateOfDiffMilli.getFullYear() - 1970;
  }

  isEqual(anotherPerson) {
    return (
      this.firstName?.toLowerCase() ===
        anotherPerson.firstName?.toLowerCase() &&
      this.lastName?.toLowerCase() === anotherPerson.lastName?.toLowerCase()
    );
  }

  toString() {
    return `${this.getFullName()}, ${this.getAge()}`;
  }
}
const me = new Person('Noppakrit', 'Nitichaisatit', new Date(2003, 9, 10));
console.log(me.getAge());
console.log(me.toString());