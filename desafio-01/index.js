const express = require('express');

const server = express();

server.use(express.json());

const projects = [];
let requests = 0;


// Global Middleware
server.use((req, res, next) => {
  
  requests++;
  console.log(`Number of requests: ${requests}`);

  return next();
});


// Local Middleware
function checkProjectId(req, res, next) {

  const { id } = req.params;
 

  if (!projects[id]) {
    return res.status(400).json({ error: 'project not found' });
  } 

  return next();
  
}

// Project list
server.get('/projects', (req, res) => {
  return res.json(projects);
});

// Create new project
server.post('/projects', (req, res) => {
  const projeto = { id, title, task } = req.body;

  projects.push(projeto);

  return res.json(projects);
});

// Create new tasks
server.post('/projects/:id/tasks', checkProjectId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects[id].tasks.push(title);

  return res.json(projects);

});

// Update project
server.put('/projects/:id', checkProjectId, (req, res) => {

  const { id } = req.params;
  const { title } = req.body;

  projects[id].title = title;

  return res.json(projects);

});

// Delete projects
server.delete('/projects/:id', checkProjectId, (req, res) => {
  const { id } = req.params;

  projects.splice(id, 1);

  return res.json(projects);
});


server.listen(3000);