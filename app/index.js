/* Everything in JS is an object */

// Log
function log(text)
{
    const logs = document.querySelector("#logs");
    logs.innerHTML += "<p>> " + text + "</p>"
}

// Data types
function dataTypes()
{
    var name = "Amr Hassan";
    var age = 30;
    var hasDriverLicense = false;
}

// Objects
function objects()
{
    var person = {
        name: "Amr Hassan",
        age: 30,
        hasDriverLicense: false,
        dateOfBirth: "20/01/1992",
        address: {
            firstLine: "123",
            postCode: "45678",
            country: "Egypt"
        },
    };
    
    person['age'] = 31;
    
    // Printing data
    log(JSON.stringify(person));
    log(Object.values(person));
}

// Arrays
function arrays()
{
    var skills = ["C++", "JS", "PHP", "MySQL"];

    log(skills.length);

    for(var item of skills)
    {
        log(item);
    }

    skills.forEach((item, index) => {log(index + "." + item);});
}

// Loops
function loops()
{
    var persons = [
        {name: "Amr Hassan", age: 30},
        {name: "Hatem El-sayed", age: 30}
    ];

    // for
    for(var i = 0; i < persons.length; i++)
    {
        log(persons[i].name + "(" + persons[i].age + ")");
    }

    log("---------------------------------");

    // for of
    for(var item of persons)
    {
        log(item.name + "(" + item.age + ")");
    }

    log("---------------------------------");

    // forEach
    persons.forEach((item, index) => {log(item.name + "(" + item.age + ")");;});

    log("---------------------------------");

    // while(true)

    // do {} while(true)

    // continue

    // break
}

// If
function ConditionalIf()
{

}
