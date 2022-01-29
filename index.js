/*
Local Module
const global=require('./One');


var obj=new global.myClass( );

obj.myFunc();
*/

//core Module
/* const readline= require('readline');

const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('what is Your Nmae?', (ans) =>{
    if(ans=='aa'){
        rl.close();
    }else{
        rl.setPrompt('wrong ');
        rl.prompt();
        rl.on('line' ,(inp) => {
            if(inp=='aa'){
                rl.close();
            }else{
                rl.setPrompt('wrong' + inp);
                rl.prompt();
            }
        })
    }
    
    
}); */


//third party module

const express=require('express');
const app = express();
const morgan=require('morgan');
const mongoose=require('mongoose');
const uuid=require('uuid');

//middleware
app.use(morgan('dev'));

const myPerson =[
    {
        id:uuid.v4(),
        name:"aathi",
        age:23
    },
    {
        id:uuid.v4(),
        name:"Thasi",
        age:23
    },
    {
        id:uuid.v4(),
        name:"Bhai",
        age:23
    }
]

//get
app.get('/' , (req,res) => {
    res.status(200).json(myPerson)
})
app.get('/:id' , (req,res) => {
    res.json(req.params.id);
})

//localhost
app.listen(2000,()=> {
    console.log('server stated on 2000');
});


//DB cOnnect
mongoose.connect('mongodb://localhost:27017/persons', (err) => {
    if(err ){
        console.log("db not connected");
    }else{
        console.log("db connected success");
    }
})