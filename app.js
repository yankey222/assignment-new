const express = require('express');

const app =express();

app.set('view engine','ejs');
app.use(express(__dirname + '/public'))
app.use('/css', express.static(path.join(__dirname , '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname , '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname , '/node_modules/jquery/dist/')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const employees =[
    {
        employeeID: "200",
        name: "fred",
        position: "production manager"
    },
    {
        employeeID: "219",
        name: "linda",
        position: "graphics manager"
    },
    {
        employeeID: "203",
        name: "raymond",
        position: "ceo"
    }
]

app.get('/',(req,res) =>{
    res.json();
})

const port =4040;
app.listen(port,() => {
    console.log('Server has started on port ${port}');
});