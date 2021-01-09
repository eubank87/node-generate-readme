const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: 'input',
        message: 'What is your project Title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a brief description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Which License did you use?',
        name: 'license',
        choices: ['MIT', 'Apche 2.0', 'GPL 3.0', 'BSD3'],
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

inquirer.prompt(questions)
.then((data) =>{
    const fileName = `${data.title}.md`;
    const template = `# ${data.title}

## TOC
* [Installation](#installation)
* [Usage](#usage)
* [Testing](#test)
* [Contribution Guidelines](#Contribution)
* [FAQs](###Questions)

# Description
${data.description}

# Installation Instructions
${data.installation}

# Usage Information
${data.usage}

# Constribution Guidelines
${data.contribution}

# Test Instructions
${data.test}

![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-green.svg)


### Questions?
[Git Hub](https://github.com/${data.username})
Or send an email to: ${data.email}
    `
    fs.writeFile(fileName, template, (err => !err ? console.log("Read me done!") : console.log(err)))
})
