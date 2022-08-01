// packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Title entry is required to proceed.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
        default: ''
    },
    {
        type: 'input',
        name: 'installation',
        message:'Please enter installtion instuctions for your project.',
        default:'',
    },
    {
        type: 'input',
        name: 'usage',
        message:'Please enter usage information for your project.',
        default:'',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose which license will be used for project',
        choices: ['MIT','Apache-2.0','ISC','no license']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter any collaborators and thier github links.',
        default: ''
    },
    {
        type: 'input',
        name: 'tests',
        message: 'If you would like to go the extra mile, then write tests for your application',
        default: ''
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username.',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Github username is required to proceed.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Email address is required to proceed.');
                return false;
            }
        } 
    }
]

//function to write README file
function writeToFile(data) {
    fs.writeFile("./dist/README.md", generateMarkdown(data), function(err) {
        if (err) {
          return console.log(err);
        }
        console.log('Success!');
      });
}

//function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(input){
        const fileName =
        input.title

        writeToFile(fileName, input)
    })
}

// Function call to initialize app
init();
