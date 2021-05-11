// import prettier
const prettier = require('prettier');
const fs = require('fs');

function managersBuilder(teamObject) {
  let html = '';
  teamObject.forEach((teamMember) => {
    if (teamMember.getRole() === 'Manager') {
      html += prettier.format(
        `
<!-- managers card -->
<div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-128x128">
          <img src="https://randomuser.me/api/portraits/men/78${Math.floor(
            Math.random() * 100
          )}.jpg" alt="Placeholder image" />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-3">Name: ${teamMember.name}</p>
        <p class="subtitle is-4">Employee ID: ${teamMember.id}</p>
        <p class="subtitle is-4">Email: ${teamMember.email}</p>
        <p class="subtitle is-4">Office: ${teamMember.officeNumber}</p>
      </div>
    </div>
  </div>
</div>
      `,
        { parser: 'html' }
      );
    }
  });
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
    <section id="managers" class="section is-medium">
      <div class="container">
        <h1 class="title">Team Managers</h1>
        <h2 class="subtitle">The Team managers for this project are:</h2>
        ${managersBuilder(teamObject)}
      </div>
    </section>
    <section id="engineers" class="section is-medium">
      <h1 class="title">Engineers</h1>
      <h2 class="subtitle">The Engineers for this project are:</h2>
    </section>
    <section id="interns" class="section is-medium">
      <h1 class="title">Interns</h1>
      <h2 class="subtitle">The Interns on this project are:</h2>
    </section>
  </body>
</html>

  `,
    { parser: 'html' }
  );

  // fs.writeFile('../dist/report.html', html, (err) => {
  //   if (err) throw err;
  //   console.log('File Written to report.html');
  // });

  return html;
}

module.exports = reportBuilder;
