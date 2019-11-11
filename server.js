const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')
const fs = require('fs');

const app = express();
const data = fs.readFileSync('data.json');
var json = JSON.parse(data);
var users = json.users;
var usersData = json.usersData;

console.log(users);
console.log(usersData);

// ces lignes (cors) sont importantes pour les sessions dans la version de développement
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}))
app.use(session({
  secret: '732d4ad4aba10b7df8df8bae22d7887eb921efce',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // ne changez que si vous avez activé le https
}))
app.use(morgan('dev'))
app.use(bodyParser.json())

const path = require('path')
app.use(express.static(path.join(__dirname, '/dist')))

app.post('/api/login', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)
  if (!req.session.userId) {
    const user = users.find(u => u.username === req.body.login && u.password === req.body.password)
    if (!user) {
      // gérez le cas où on n'a pas trouvé d'utilisateur correspondant
      res.status(401)
      res.json({
        message: 'error'
      })
    } else {
      // connect the user
      req.session.userId = 1000 // connect the user, and change the id
      res.json( usersData );
    }
  } else {
    res.status(401)
    res.json({
      message: 'you are already connected'
    })
  }
})

app.get('/api/logout', (req, res) => {
  if (!req.session.userId) {
    res.status(401)
    res.json({
      message: 'you are already disconnected'
    })
  } else {
    req.session.userId = 0
    res.json({
      message: 'you are now disconnected'
    })
  }
})

app.get('/api/admin', (req, res) => {
  if (!req.session.userId || req.session.isAdmin === false) {
    res.status(401)
    res.json({ message: 'Unauthorized' })
    return
  }

  res.json({
    message: 'congrats, you are connected'
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})

app.post('/api/editUserData', (req, res) => {
  json.usersData[req.body.login] = {};
  json.usersData[req.body.login].name = req.body.login;
  json.usersData[req.body.login].from = req.body.from;
  json.usersData[req.body.login].age = parseInt(req.body.age);
  fs.writeFileSync('data.json', JSON.stringify(json, null, 2));
  res.status(200).send(json.usersData[req.body.login]);
})

app.post('/api/deleteUserData', (req, res) => {
  delete json.usersData[req.body.login];
  fs.writeFileSync('data.json', JSON.stringify(json, null, 2));
  res.sendStatus(200);
})