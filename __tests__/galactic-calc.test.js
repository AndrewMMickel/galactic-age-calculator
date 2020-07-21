import { AgePlanet } from './../src/galactic-calc.js';
import { AgePerson } from './../src/galactic-calc.js';

const merc = .24;
const venus = .62;
const mars = 1.88;
const jupiter= 11.86;

describe('AgePlanet', function() {
  it('should return age on Mercury', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.planetAge(merc)).toEqual('150');
  });
});