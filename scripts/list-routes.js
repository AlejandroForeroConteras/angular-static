const fs = require('fs');
const axios = require('axios');
const endOfLine = require('os').EOL;
const apiUrl = 'https://jsonplaceholder.typicode.com';
const routesFile = './routes.txt';

// Todos
axios.get(`${apiUrl}/todos`).then(res => {
  const routes = [];
  res.data.forEach(todo => {
    routes.push('categories/' + todo.id);
  });
  fs.writeFileSync(routesFile, routes.join(endOfLine), 'utf8');
}).catch(e => console.log(e));