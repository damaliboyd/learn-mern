const express = require('express');
const bodyParser = require('body-parser');
const app = express();

import {getUserList} from './user';
const userList = getUserList();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send('Welcome Humans and Other Earthlings!');
});

app.get('/getUsers', (req,res) => {
    return res.status(200).send({
        success: 'true',
        message: 'users',
        users: userList
    });
});

app.post('/addUser', (req, res) => { 
    if (!req.body.name) { 
        return res.status(400).send({
             success: 'false', message: 'name is required', });
    } 
    else if (!req.body.companies) { 
        return res.status(400).send({ success: 'false', message: 'companies is required', }); 
    } 
    const user = { id: userList.length + 1, isPublic: req.body.isPublic, name: req.body.name, companies: req.body.companies, books: req.body.books }; 
    userList.push(user); 
    return res.status(201).send({ success: 'true', message: 'user added successfully', user, });
});

app.put('/updateUser/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedUser = {
        id: id,
        isPublic: req.body.isPublic,
        name: req.body.name,
        companies: req.body.companies,
        books: req.body.books
    };

    for(let i = 0; i < userList.length; i++){
        if(userList[i].id === id){
            userList[i] = updatedUser;
            return res.status(201).send({
                success: 'true',
                message: 'user added successfully',
                updatedUser
            });
        }
    }

    return res.status(404).send({
        success: 'true',
        message: 'error in update'
    })
})

app.listen(8000, () => {
    console.log('Example app listening on app 8000')
});