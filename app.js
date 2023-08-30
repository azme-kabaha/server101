// 1 we need to import the express

// const express=require('express');

// 2 -  init the app remmember that in the app we have HTTP methods = post/ get/ put/delete

/*
const app = express();

app.get('/', (req,res)=>{
    res.send('hello welcome to express')
});


// 3   Running The Server

const port = 5000;
 app.listen(port,()=>console.log(` server is running on ${port}`));  */


//------------------------------------------------------------------



// --------------// to send json file to user ------https://youtu.be/vWtkz4q4ieA?si=-CiKjBej-Z2NwulJ-------------------------







const express=require('express');

 const app = express();
   
 const books=[
    {
        id:1,
        title:'Black Swan',
        author:'Azme kabaha',
        description:'About Black Swan',
        price:10 ,
        cover:'soft cover ',

    },
    {
        id:2,
        title:'Rich Dad Poor Dad',
        author:'Robene usa',
        description:'About Black Rich Dad Poor Dad',
        price:12 ,
        cover:'soft cover ',

    },
]


 app.get('/api/books',(req,res)=>{
    res.json(books)
})
const port = 5000;
 app.listen(port,()=>console.log(` server is running on ${port}`));

/*
if the user has send request to the server and the request is '/api/books'  that mean the express server will return a JSON response to the client
*/ 