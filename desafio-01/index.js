const express = require('express');

const server = express();

server.use(express.json());

const projects = [];

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



server.post('/projects/:id/tasks', (req, res) => {


});

// Update project
server.put('/projects/:id', (req, res) => {

  const { id } = req.params;
  const { title } = req.body;

  projects[id].title = title;

  return res.json(projects);

});

server.delete('/projects/:id', (req, res) => {

});


server.listen(3000);