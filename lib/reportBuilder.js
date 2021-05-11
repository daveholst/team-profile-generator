// import prettier
const prettier = require('prettier');
const fs = require('fs');

// function to generate individual cards for each employee
function roleBuilder(teamObject, role) {
  let html = '';
  // helper function to get specific role information into DOM
  const specificRoleInfo = (obj) => {
    let labelHtml = '';
    let roleContentProperty;
    switch (obj.getRole()) {
      case 'Manager':
        labelHtml = 'Office';
        roleContentProperty = obj.officeNumber;
        break;
      case 'Engineer':
        labelHtml = 'GitHub';
        roleContentProperty = `<a href="https://github.com/${obj.gitHubUserName}">${obj.gitHubUserName}</a>`;
        break;
      case 'Intern':
        labelHtml = 'School';
        roleContentProperty = obj.school;
        break;
      default:
        console.error('switch broke :(');
        break;
    }
    return [labelHtml, roleContentProperty];
  };
  // loop over team object to build correct cards into correct subheadings/sections
  teamObject.forEach((teamMember) => {
    if (teamMember.getRole() === role) {
      html += prettier.format(
        `
<div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-128x128">
          <img src="https://randomuser.me/api/portraits/men/${60}.jpg" alt="Placeholder image" />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-3">${teamMember.name}</p>
        <p class="subtitle is-6 mb-2"><strong>Employee ID:</strong> ${
          teamMember.id
        }</p>
        <p class="subtitle is-6 mb-2"><strong>Email: </strong><a href="mailto:${
          teamMember.email
        }">${teamMember.email}</a></p>
        <p class="subtitle is-6 mb-2"><strong>${
          specificRoleInfo(teamMember)[0]
        }:</strong> ${specificRoleInfo(teamMember)[1]}</p>
      </div>
    </div>
  </div>
</div>
      `,
        { parser: 'html' }
      );
    }
  });
  return html || '';
}

// function to generatoe html for report
function reportBuilder(teamObject) {
  const html = prettier.format(
    `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Report</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css" />
  </head>
  <body>
    <section class="hero is-warning">
      <div class="hero-body">
        <p class="title">Project 486 - Team Members</p>
        <p class="subtitle">System Generated Report</p>
      </div>
    </section>
    <section id="managers" class="section is-small">
      <div class="container">
        <h1 class="title">Team Managers</h1>
        <h2 class="subtitle">The Team managers for this project are:</h2>
        ${roleBuilder(teamObject, 'Manager')}
      </div>
    </section>
    <section id="engineers" class="section is-small">
    <div class="container">
        <h1 class="title">Engineers</h1>
        <h2 class="subtitle">The Engineers for this project are:</h2>
        ${roleBuilder(teamObject, 'Engineer')}
      </div>
    </section>
    <section id="interns" class="section is-small">
    <div class="container">
        <h1 class="title">Interns</h1>
        <h2 class="subtitle">The Interns on this project are:</h2>
        ${roleBuilder(teamObject, 'Intern')}
      </div>
    </section>
  </body>
</html>

  `,
    { parser: 'html' }
  );
  // remove old html file
  try {
    fs.unlinkSync('./dist/report.html');
  } catch (err) {
    console.error(err);
  }
  // build new hmtl file
  try {
    fs.writeFileSync('./dist/report.html', html);
    console.log('File Written to ./dist/report.html');
  } catch (err) {
    console.error(err);
  }
  // returns html - easier to test.
  return html;
}

module.exports = reportBuilder;
