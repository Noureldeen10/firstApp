
const readline = require('readline-sync');

let people = [];

const addPerson = () => {
    if (people.length >= 10) {
        console.log("you can only add up to 10 people.");
        return;
    }

    const id = readline.question('enter ID:');
    const firstName = readline.question('Enter first name:');
    const lastName = readline.question('Enter last name:');
    const age = readline.question('Enter age:');
    const city = readline.question('enter city:');

    people.push({ id, firstName, lastName, age, city});
    console.log('Person added successfully');
};

const viewPeople = () => {
    if (people.length === 0) {
        console.log('No people data available.');
        return;
    }
    console.log('People Data:');
    people.forEach(person => {
        console.log(`ID: ${person.id}, Name: ${person.firstName} ${person.lastName}, Age: ${person.age}, City: ${person.city}`);
    });
};
const viewSpecificPerson = () => {
    const id = readline.question('Enter the ID for the person you want to view:');
    const person = people.find(p => p.id === id);

    if (person) {
        console.log(`ID: ${person.id}, Name: ${person.firstName} ${person.lastName}, Age: ${person.age}, City: ${person.city}`);
    } else {
        console.log('Person not found.');
    }   
};

const deletePerson = () => {
    const id = readline.question('Enter ID of the person you want to delete:');
    const index = people.findIndex( p => p.id === id);

    if ( index !== -1) {
        people.splice(index, 1);
        console.log('Person deleted successfully.');
    } else {
        console.log('Person not found.');
    }
};

const deleteAllPeople = () => {
    people = [];
    console.log('All people deleted successfully!');
};

const main = () => {
    while (true) {
        console.log('\nMenu:');
        console.log('1. Add person');
        console.log('2. View All people');
        console.log('3. View Specific Person');
        console.log('4. Delet Specific Person');
        console.log('5. Delete All people');
        console.log("6. Exit");

        const choice = readline.questionInt('Choose an option: ');

        switch (choice) {
            case 1:
                addPerson();
                break;
            case 2:
                viewPeople();
                break;
            case 3:
                viewSpecificPerson();
                break;
            case 4: 
                deletePerson();
                break;
            case 5: 
                deleteAllPeople();
                break;
            case 6:
                console.log('Exiting...');
                return;
            default:
                console.log('Invalid choice. please try again.');                                                                    
        }
    }
};

main();
