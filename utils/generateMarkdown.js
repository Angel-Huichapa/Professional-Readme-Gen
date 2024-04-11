// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}


## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please feel free to contact me at ${data.email}
You can also find me on GitHub as [${data.github}] at (https://github.com/${data.github})
  `;
}

module.exports = generateMarkdown;
