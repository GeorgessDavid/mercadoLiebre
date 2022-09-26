let express = require('express');

let app = express();

let path = require('path');

const publicPath = path.join(__dirname, '/public');


app.listen(3000, () => {
    console.log("Servidor activo en el puerto 3000.")
})

app.use(express.static((__dirname + '/public')));

app.get('/', (req,res) => {

    res.sendFile((__dirname + '/views/home.html'));

})

app.get('/register', (req,res) => {

    res.sendFile((__dirname + '/views/register.html'))

})

app.get('/login', (req,res) => {

    res.sendFile((__dirname + '/views/login.html'))
    
})