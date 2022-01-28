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

app.use(morgan('dev'));

app.get('/' , (req,res) => {
    res.json("hellov  ")
})

//localhost
app.listen(2000,()=> {
    console.log('server stated on 2000');
})