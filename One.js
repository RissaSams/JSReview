let eric = {
    firstName:  'James',
    lastName:   'Couch',
    age:        46,
    fullName: function() {
        return this.firstName + ' ' + this.lastName
    },
    kids: [
{
            firstName:  'Jacob',
            lastName:   'Couch',
            age:        25,
            gender:     'M',
            car: {
                make:   'Ford',
                model:  'Focus',
                engine: {   
                    size: 2.3,
                    cylinders: 4
                }
            }
        },
{
            firstName:  'Christina',
            lastName:   'Couch',
            age:        23,
            gender:     'F',
            car: {
                make:   'Ford',
                model:  'Mustang',
                engine: {   
                    size: 5.0,
                    cylinders: 8
                }
            }
        },
{
            firstName:  'Corwin',
            lastName:   'Couch',
            age:        13,
            gender:     'M',
            car: {}
        }
    ]
}

// log to the console the engine size of each car
eric.kids.forEach(function(kid) {
    if (kid.car.engine !== undefined) {
        console.log(kid.firstName + " has a " + kid.car.engine.size + 
        " in their car.");
    }
})

// log to the console the first and last name of each kid
eric.kids.forEach(kid => console.log(kid.firstName + " " + kid.lastName));

// add a car to corwin, you decide what he drives
let corwinCar = {
    make:   'Chevrolet',
    model:  'Corvette',
    engine: {   
        size: 6.2,
        cylinders: 8
    }
}
eric.kids[2].car = corwinCar;
console.log(eric.kids[2].car);