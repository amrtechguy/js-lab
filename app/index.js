/* Everything in JS is an object */

/* imports from js modules*/
import * as Math from './Math.js';
import {add} from './Math.js';

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

// useful function
function usefulFuncs()
{
    // map: executes a given function with every element in a given array
    var nums1 = [0, 1, 2, 3, 4].map((item) => {return item * 2;});
    log(nums1);

    // filter: returns the array's element if the callback func returns true
    var nums2 = [0, 1, 2, 3, 4].filter((item) => {return item % 2 == 0;});
    log(nums2);

    // reduce:  
    // - reduces all the items into 1
    // - with every element, it gives you the previous value and the current 
    // - the previous value is the returned value from the callback func
    var total = [1, 2, 3, 4].reduce((prev, curr) => {return prev + curr;});
    log(total);
}

// callback -> a function that is passed as a parameter to another function
function myCallbackFunc()
{
    var sayMyName = function (name)
    {
        log("Hello, " + name + "!");
    };
    
    function callBackFunc(name, callback)
    {
        callback(name);
    }
    
    callBackFunc("Amr Hassan", sayMyName);
}

// variable scope
function variableScope()
{
    {
        var x = 30;
        let y = 50;
    }
    
    log(x);
    log(y);
}

// named exports & import
function exportImport()
{
    log(Math.add(1, 2));
    log(add(1, 2));
}

// constants
function myConst()
{
    // string
    const myStr = 'Amr';
    myStr[0] = '3'; // doesn't works

    // array
    const myArr = ['A', 'm', 'r'];
    myArr[0] = '3'; // works

    // object
    const person = {};
    person['name'] = 'Amr hassan';  // works
}

// template literlas
function templateLiterals()
{
    let name = 'Amr Hassan';
    let job = 'software engineer';

    log(`Hello! I'm ${name} and I work as a ${job}.`);
}

// spread operator arrays
function spreadOperatorArr(...arr)
{
    let nums = [1, 2, 3, 4];
    let letters = ['a', 'b', 'c'];

    let myArr = [...arr, ...nums, ...letters];

    myArr.forEach((item) => {log(item);});

    log(myArr);
}

// spread operator objects
function spreadOperatorObj()
{
    const address = {
        city: 'Beheira',
        country: 'Egypt',
        postCode: '12345'
    };

    const name = {
        firstName: 'Amr',
        lastName: 'Hassan'
    };

    const person = {...name, ...address};

    log(JSON.stringify(person));
}

// arrow function [C++ lambda function]
const myArrFunc = [1, 2, 3, 4].map((item, index) => item + index);

// Lexical this
function lexicalThis()
{
    let person = {
        name: 'Amr Hassan',
        skills: ['C++', 'JavaScript', 'PHP', 'MySQL'],
        toString: function()
        {
            log(`${this.name} is experienced in ${this.skills}`);
        },
        getSkills: function()
        {
            this.skills.forEach((item) => {
                log(`${this.name} has ${item}`);
            });
        }
    };

    // person.toString();
    person.getSkills();
}

// Enhanced object properties
function enhancedObjectProerties()
{
    const name = 'Amr Hassan';
    const agePronoun = 'AGE';

    const person = (name, age) => {
        return {
            name,   // name: name
            [agePronoun.toLowerCase()]: age // age: age
        };
    };

    const p = person('Amr Hassan', 30);
    log(`${p.name} is ${p.age}`);
}

// Array destructuring
function arrayDestructuring()
{
    const names = ['Amr', 'Alaa', 'Hatem', 'Hassan', 'Esam']
    const [a, , c, ...restOfNames] = names;

    // log(`${a},${c}`);
    // log(`Rest of names(${restOfNames.length}): ${restOfNames}`);

    const person = {
        name: 'Amr Hassan',
        gender: 'male',
        address: {
            country: 'Egypt',
            city: 'Behaeira',
            postCode: 'EG',
            fullAddress: {
                doorNumber: 1,
                street: 'AM st'
            }
        }
    };

    /* const {theName, address: {country: theCountry}} = person; */
    const {name: theName, address: {country: theCountry}} = person;

    // within a loop
    const persons = [
        {
            name: 'Amr Hassan',
            gender: 'male',
            address: {
                country: 'Egypt',
                city: 'Behaeira',
                postCode: 'EG',
                fullAddress: {
                    doorNumber: 1,
                    street: 'AM st'
                }
            }
        },
        {
            name: 'Mahmoud Hassan',
            gender: 'male',
            address: {
                country: 'Egypt',
                city: 'Behaeira',
                postCode: 'EG',
                fullAddress: {
                    doorNumber: 1,
                    street: 'AM st'
                }
            }
        }
    ];

    for(var {name: personName, address: {country: personCountry}} of persons)
    {
        log(`${personName} lives in ${personCountry}`);
    }
}

// function default parameters
function functionDefaultParameters()
{
    const calculatePay = (yearSalary, bonus = {
        teamBonus: 0,
        employeeBonus: 0
    }) => {
        return yearSalary + bonus.teamBonus + bonus.employeeBonus;
    };

    log(calculatePay(100000000, {teamBonus: 10000000, employeeBonus: 1000000}));
}

// Class
function myClass()
{
    class Account 
    {
        constructor(id = 0, username = '', fullName = '', email = '')
        {
            this.id = id;
            this.username = username;
            this.fullName = fullName;
            this.email = email;
            
            log(`A new account with id(${this.id}) was created successfully!`);
        }
    
        login()
        {
            log('Login...');
        }
    
        register()
        {
            log('Setting up a new account...');
        }
    
        logOut()
        {
            log('Logging out...');
        }
    
        print()
        {
            log(`Account [ID: ${this.id}, Username: ${this.username}, Full name: ${this.fullName}, email: ${this.email}`);
        }
    
        // static method
        static who()
        {
            log('My name is Amr Hassan, a software engineer!');
        }
    }
    
    class Admin extends Account
    {
        constructor(id, username, fullName, email, role = '')
        {
            // the super class
            super(id, username, fullName, email);
            this.role = role;
        }
    
        print()
        {
            super.print();
            log( `Role: ${this.role}`);
        }
    
        printRole()
        {
            log(`Role: ${this.role}`);
        }
    }
    
    const a = new Admin(2, 'amrhassan', 'Amr Hassan', 'amr.h.shehata@gmail.com', 'admin');
    a.print();
    Account.who(); 
}

/**
 * Promises
 * * state [pending, fulfilled, rejected]
 * * ().then().catch()
 */
function myPromise()
{
    const idPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3]);
        }, 100);
    
        setTimeout(() => {
            reject("Unable to return account Ids.");
        }, 500);
    });
    
    const namePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Yourexa', 'Amr Hassan', 'Peter Slovanky']);
        }, 100);
    
        setTimeout(() => {
            reject("Unable to return account names.");
        }, 300);
    });
    
    Promise.all([idPromise, namePromise])
    .then((data) => 
    {
        const [ids, names] = data;
    
        for(let i = 0; i < ids.length; i++)
        {
            log(`[${ids[i]}] ${names[i]}`);
        }
    })
    .catch((error) => 
    {
        log(error);
    });
}

/**
 * Fetch API
 */
function myFetch()
{
    const getReandomUsers = (count) => {
        const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${count}`)
        .then(data => {
            data.json().then(randomUsers => {
                randomUsers.results.forEach((user) => 
                {
                    const {gender, email} = user;
                    log(`${gender} - ${email}`)
                });
            });
        })
        .catch(error => {
            log(error);
        });
    };

    getReandomUsers(3);
}

/**
 * Generators
 * * a function that can be paused
 * * used with asynchronous computations
 */
function myGen()
{
    const getAllData = function* () {
        yield 1;
        yield false;
        yield 'hello';
        yield {name: 'Amr'};
        return 'It\'s Done';
    };

    const getData = getAllData();

    // console.log(getData.next().value);
    // console.log(getData.next().value);
    // console.log(getData.next().value);
    // console.log(getData.next().value);
    // console.log(getData.next().value);
    // console.log(getData.next().value);

    const getNumbers = function* (numbers)
    {
        for(var i = 0; i < numbers.length; i++)
        {
            yield numbers[i];
        }

        return 'Done!';
    };

    const getNumbersGen = getNumbers([1, 2, 3, 4, 5]);

    const interval = setInterval(() => {
        const next = getNumbersGen.next();

        if(next.done)
        {
            log('It is done!');
            clearInterval(interval);
        }
        else
        {
            log(next.value);
        }
    }, 1000);
}

/**
 * Coroutines with Generators and Promises
 * * solves the callback function hell
 * * make the code cleaner
 */
function myCoRoutines()
{
}

/**
 * Async Await
 */
 function myAsyncAwait()
 {
    try
    {
        throw("Something went wrong!");
    }
    catch(error)
    {
        log(error);
    }
 }
 
/**
 * Try catch
 */
 function myTryCatch()
 {
    try
    {
        throw("Something went wrong!");
    }
    catch(error)
    {
        log(error);
    }
 }

 myTryCatch();