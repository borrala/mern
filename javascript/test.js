const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
    };
    const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
    
    // AFTER ES6
const { username, email , firstName} = person;
const [firstAnimal] = animals;
const [lastAnimal] = animals;
console.log(username, email, firstName);
// => bob@marley.com
console.log(lastAnimal);
// => horse
