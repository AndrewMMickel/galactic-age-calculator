import { AgePlanet } from './../src/galactic-calc.js';
import { AgePerson } from './../src/galactic-calc.js';

const merc = .24;
const venus = .62;
const mars = 1.88;
const jupiter= 11.86;

//tests for calculating age on each planet
describe('AgePlanet', function() {
    it('should return age on Mercury', function() {
        const agePerson = new AgePlanet(36)
        expect (agePerson.planetAge(merc)).toEqual('150');
    });

    it('should return age on Venus', function() {
        const agePerson = new AgePlanet(36)
        expect (agePerson.planetAge(venus)).toEqual('58');
    });

    it('should return age on Mars', function() {
        const agePerson = new AgePlanet(36)
        expect (agePerson.planetAge(mars)).toEqual('19');
    });

    it('should return age on Jupiter', function() {
        const agePerson = new AgePlanet(36)
        expect (agePerson.planetAge(jupiter)).toEqual('3');
    });

    //Tests for calculating life remaining/exceeded on each planet
    it('should return life remaining on Mercury', function() {
    const agePerson = new AgePlanet(36)
    expect (agePerson.lifeRemaining(merc)).toEqual('179');
    });

    it('should return life remaining on Mercury', function() {
    const agePerson = new AgePlanet(90)
    expect (agePerson.lifeRemaining(merc)).toEqual('46');
    });
    
});