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
function conditionalIf()
{
    var person = {
        name: "Amr Hassan",
        job: "Software Engineer",
        age: 30,
        yearsOfExperience: 3,
        skills: ["c++", "js", "php", "mysql"]
    };

    var requiredSkill = "JS";

    if(person.skills.includes(requiredSkill.toLowerCase()))
    {
        log("Your skills fit the job requirements.");
    }
    else
    {
        log("You lack required skills.");
    }
}

// switch
function conditionalSwitch()
{
    var person = {
        name: "Amr Hassan",
        job: "Software Engineer",
        age: 30,
        yearsOfExperience: 3,
        skills: ["c++", "js", "php", "mysql"]
    };

    switch(true)
    {
        case (person.yearsOfExperience >= 1 && person.yearsOfExperience < 3): // from 1 to 2
            log("You're junior engineer (SWE1)");
            break;
        
        case (person.yearsOfExperience >= 3 && person.yearsOfExperience <= 5): // from 3 to 4
            log("You're mid-level engineer (SWE2)");
            break;

        case (person.yearsOfExperience >= 6): // 6 or more
            log("You're senior engineer (SWE3)");
            break;

        default:
            log("Who are you?");
    }

    switch(new Date().getDay())
    {
        case 1:
            log("It's Monday!");
            break;
        
        default:
            log("I don't know!");
    }
    
}

// Operators
function operators()
{
    /*
        # arithmitic (+ - / * %)

        # assignment (=)
        
        # equality (==)
            "0" == 0 == false -> true (auto casting or conversion)

        # identical (===)
            "0" === 0 === false -> false
            
        # comparison (== < <= > >= !=)

        # logical (&& || !)

    */
}
