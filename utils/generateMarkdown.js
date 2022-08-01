// function that returns a license badge based on which license is passed in //['MIT','Apache','ISC','GNI','no license']
function renderLicenseBadge(license) { 
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}
//function that returns the license link
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return ""
  } else 
    return `https://opensource.org/licenses/${license}`
}


// function that returns the license section of README
function renderLicenseSection(license) {
  if (license === 'no license') {
    return ''
  } else {
    return `## License
  ${renderLicenseBadge(license)}
  
  ${renderLicenseLink(license)} 
  `
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description 
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
 
  ${renderLicenseSection(data.license)}

  ## Contributing 
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions 
  * Github: [${data.github}](https://github.com/${data.github})
  * Email: [${data.email}](mailto:${data.email})
`;
}
module.exports = generateMarkdown;
