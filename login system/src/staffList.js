import { faker } from '@faker-js/faker';

const staffList =[
    {
        "key": 0,
        "avatar" : faker.image.avatar(),
        "name" : faker.person.firstName(),
        "description" : faker.person.jobDescriptor(),
        "rate" : faker.number.int({ min: 3, max: 5 }),
    },

    {
        "key": 1,
        "avatar" : faker.image.avatar(),
        "name" : faker.person.firstName(),
        "description" : faker.person.jobDescriptor(),
        "rate" : faker.number.int({ min: 3, max: 5 }),
    },

    {
        "key": 2,
        "avatar" : faker.image.avatar(),
        "name" : faker.person.firstName(),
        "description" : faker.person.jobDescriptor(),
        "rate" : faker.number.int({ min: 3, max: 5 }),
    },

]

export default staffList