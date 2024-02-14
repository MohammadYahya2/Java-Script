const express = require("express");
const app = express();
const port = 8000;


// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));






const createUser = () => {
    const newFake = {
        id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password:faker.internet.password(),
        phoneNumber:faker.phone.number(),
    };
    return newFake;
};
    
const newFakeuse = createUser();
console.log(newFakeuse);



// req is shorthand for request
// res is shorthand for response
app.get("/api/users/new", (req, res) => {
    res.json(newFakeuse);
});

const createCompany = () => {
    const newFake = {
        id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: faker.location.address(),
        addressStreet:faker.location.street(),
        cityName:faker.location.city(),
        addressStat:faker.location.state(),
        zipAddress:faker.location.zipCode(),
        countryAddress:faker.location.country(),
    };
    return newFake;
};
    
const newFakeCompany= createCompany ();
console.log(newFakeCompany);


app.get("/api/companies/new", (req, res) => {
    res.json(newFakeCompany);
});















// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
