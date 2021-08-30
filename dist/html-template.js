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
        <script src="./app.js"></script>
        <script src="https://kit.fontawesome.com/1521bcb097.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
               <h1 class="text-center"> My Team </h1>
            </div>
           </div>
        </div>
    
        <div class="container">
          <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">

           <div class="card employee-card" id="manager" >
           <div class="card-header">
            <h2 class ="card-title"> ${data.name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> ${data.role} </h3>
            </div>
              <div class="card-body">
                <ul class = "list-group">
                  <li class="list-group-item"> ID: ${data.id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                  <li class="list-group-item">Office number: ${data.officenumber}</li>
                </ul>
               </div>
               </div>

    <div id="Engineer" class="card employee-card">
          <div class="card-header text-white bg-primary mb-3">
              <h2 class ="card-title"> ${data.Engineer.name}</h2>
              <h3 class ="card-title"><i class="fas fa-glasses mr-2"></i> ${data.role} </h3>
          </div>
          <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${data.Engineer.id}</li>
              <li class="list-group-item">Email: <a href="mailto:${data.Engineer.email}">${data.Engineer.email}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${data.Engineer.github}">${data.Engineer.github}</a> </li>
          </ul>
          </div>
    </div>

    <div id="Intern" class="card employee-card">
      <div class="card-header text-white bg-primary mb-3">
          <h2 class ="card-title"> ${data.Intern.name}</h2>
          <h3 class ="card-title"><i class="fas fa-user-graduate mr-2"></i> ${data.role} </h3>
      </div>
      <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${data.Intern.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${data.Intern.email}">${data.Intern.email}</a></li>
          <li class="list-group-item">School: ${data.Intern.school}</li>
      </ul>
      </div>
    </div>
    
        </div>
        </div>
        </div>
    </div>   
    </body>
    </html>      
    
    `;
}


module.exports = generateHtml;