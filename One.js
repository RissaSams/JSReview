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

