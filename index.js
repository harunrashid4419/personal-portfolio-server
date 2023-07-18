const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const projects = require('./data/projects.json');

app.use(cors());
app.use(express());


app.get('/projects', async(req, res) =>{
    res.send(projects);
});

app.get('/projects/:id', async(req, res) =>{
    const id = req.params.id;
    const project = projects.find(project => project.id === id);
    res.send(project);
})

app.get('/', async(req, res) =>{
    res.send('port is running');
})

app.listen(port, () => console.log(`port is running on ${port}`));