// import prettier
const prettier = require('prettier');
const fs = require('fs');

function roleBuilder(teamObject, role) {
  let html = '';

  const roleProp = (obj) => {
    let roleHtml = '';
    let roleProperty;
    switch (obj.getRole()) {
      case 'Manager':
        roleHtml = 'Office';
        roleProperty = obj.officeNumber;
        break;
      case 'Engineer':
        roleHtml = 'GitHub Account';
        roleProperty = obj.gitHubUserName;
        break;
      case 'Intern':
        roleHtml = 'School';
        roleProperty = obj.school;
        break;
      default:
        console.error('switch broke :(');
        break;
    }
    return [roleHtml, roleProperty];
  };

  teamObject.forEach((teamMember) => {
    console.log(teamMember.getRole());
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
        <p class="subtitle is-6 mb-2"><strong>Email: </strong>${
          teamMember.email
        }</p>
        <p class="subtitle is-6 mb-2"><strong>${
          roleProp(teamMember)[0]
        }:</strong> ${roleProp(teamMember)[1]}</p>
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
      </div>
    </section>
  </body>
</html>

  `,
    { parser: 'html' }
  );
  // TODO: change to ASYNC!!
  try {
    fs.unlinkSync('./dist/report.html');
    // file removed
  } catch (err) {
    console.error(err);
  }

  fs.writeFile('./dist/report.html', html, (err) => {
    if (err) throw err;
  });

  console.log('File Written to report.html');
  return html;
}

module.exports = reportBuilder;
