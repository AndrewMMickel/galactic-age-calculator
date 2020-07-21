export class AgePlanet {
  constructor(age) {
    this.age = age;
    this.lifespan = 79;
  }

  planetAge(planet) {
    const result = this.age / planet;
    const planetAge = result.toFixed(0);
    return planetAge;
  }
}

export class AgePerson {
    constructor(birthdate) {
        this.birthdate = birthdate;
        // determine age from birthdate
    }
}