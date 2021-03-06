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
        choices: ['MIT'],
    },
    {
        type: 'input',
        message: 'Enter link to deployed site:',
        name: 'link',
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
![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-green.svg)

## Table of Contents:
* [Description](#Description)
* [Installation](##installation)
* [Usage](##usage)
* [Contribution Guidelines](##contribution)
* [Testing](##test)
* [License](##license)
* [Links](##links)
* [FAQs](##Questions)

## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

## Contribution:
${data.contribution}

## Test:
${data.test}

## License:
The MIT License 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Links:
[Deployed Site/Related Links](${data.link})

## Questions?
Contact me through Github:
[Git Hub](https://github.com/${data.username})
Or send an email to: ${data.email}
    `
    fs.writeFile(fileName, template, (err => !err ? console.log("Read me done!") : console.log(err)))
})
