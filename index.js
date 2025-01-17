const express = require('express');
const fs = require('fs');

//importing the data
const users = require('./MOCK_DATA.json');

const app = express();
const PORT = 3000;


// Middleware to parse incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rendering on html page
app.get('/users',(req, res)=>{
  const html = `
    <ul>
    ${users.map((user) =>`<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

//=================REST API========================

// 1. Routes - list all the data 
app.get('/api/users',(req, res)=>{
  return res.json(users);
})

// 2. Finding users by id - done using dynamic path parameters
app.get('/api/users/:id', (req, res) =>{

  //need to find the data using id
  const id = Number(req.params.id);
  const user = users.find((user) =>user.id === id);

  // return the result
  return res.json(user);

})

//using post method- Adding the data
app.post('/api/users', (req, res)=>{

  //data will be available on body
  const body = req.body;
  users.push({...body, id: users.length+1});
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{

  return res.json({status: 'success', id: users.length+1});
  });
  
})

// 4. Delete a user
app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ status: 'User not found' });
  }

  const removedUser = users.splice(userIndex, 1);
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ status: 'Error deleting user', error: err.message });
    }
    res.json({ status: 'successfully removed', user: removedUser[0] });
  });
});

app.listen(PORT, ()=>{
  console.log('Server is running ...');
});