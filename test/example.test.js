
const assert = require('assert'); // assertion module is used in testing to compare the actual output with the expected output
const ganache = require('ganache'); // ganache is used to create a local ethereum network 
const {Web3} = require('web3'); //// web3 is used to interact with the ethereum network

// web3 and ganche communicate through a provider understand it as a telephone

const web3 = new Web3(ganache.provider()); // constructor function to create an instance of web3 different from Web3 


class Car {
    park() {
        return 'parked';
    }
    drive() {
        return 'vroom';
    }
}

let car; //decaled globally so that it can be accessed by all the tests even after instancing in beforeEach

before(() => {
    // any logic return here will be executed before it 
    car = new Car();
})


// describe is used to group similar tests together
describe('Car', () => {

     //test setup and assertion logic comes here
     
        // can park passed will the outpute if it test is passed 
    it('can park', () => {
        //const car = new Car(); 
             //common for both tests hence we will put this in beforeEach

        assert.equal(car.park(), 'parked'); ////comparing the actual ouput to expected output
        //if they are equal test will pass otherwise test will fail   
    });

    it('can drive', () => {
      
        assert.equal(car.drive(), 'vroom');
    });
});
