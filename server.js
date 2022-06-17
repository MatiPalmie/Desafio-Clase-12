const express = require ('express');
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const {engine} = require('express-handlebars');
const PORT = 8080;

const productos = require ('./routes/productos');
const router = require('./routes/productos');

app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname + 'index.html')
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));

io.on('connection', channel => {
    channel.emit('productList', list);
});

app.engine('handlebars', engine());
app.set('view engine','handlebars');
app.set('views','./views');

// app.get('/',(req,res) => {
//     res.render('datos');
// })
app.use('/api/',productos);



httpServer.listen(PORT, () => {
    console.log(`Server runnning on port ${PORT}`);
});