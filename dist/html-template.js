const generateHtml = (data) => {
    return `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Team Members</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" media="screen" href="./dist/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link rel="shortcut icon" href="path/to/favicon.ico">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
        <script src="./index.js"></script>
    </head>
    <body>
        <div class="head-constainer">
            <h1>Bill's Team </h1>
        </div>
    
        <div class="team-container">
    
        <div class="manager">
        <div class="name">
            <p> ${data.name}</p>
            <p><i></i> ${data.position} </p>
        </div>
        <ul>
            <li>ID: ${data.ID}</li>
            <li>Email: <a href="mailto:${data.email}">${data.email}</a></li>
            <li>Office number: ${data.officenumber}</li>
        </ul>
    </div>

    <div class="employee">
          <div class="name">
              <p> ${data.name}</p>
              <p><i></i> ${data.position} </p>
          </div>
          <ul>
              <li>ID: ${data.ID}</li>
              <li>Email: <a href="mailto:${data.email}">${data.email}</a></li>
              <li>GitHub: <a href="https://github.com/${data.github}">${data.github}</a> </li>
          </ul>
    </div>

    <div class="intern">
      <div class="name">
          <p> ${data.name}</p>
          <p><i></i> ${data.position} </p>
      </div>
      <ul>
          <li>ID: ${data.ID}</li>
          <li>Email: <a href="mailto:${data.email}">${data.email}</a></li>
          <li>School: ${data.school}</li>
      </ul>
    </div>
    
        </div>
    </body>
    </html>      
    
    `;
};

module.exports = generateHtml;