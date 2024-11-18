const express = require("express")
const app = express()
const port = 3000
const path = require('path');

console.log(__dirname)

app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(request, response)=>{
    response.sendFile(path.join(__dirname, 'index.html'));
});
app.get("/about",(request, response)=>{
    response.sendFile(path.join(__dirname, 'about.html'));
});

app.get("/contact",(request, response)=>{
    response.sendFile(path.join(__dirname, 'contact.html'));
});

app.listen(port, ()=>{
    console.log('My server is running at http://localhost:' + port)
})