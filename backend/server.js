// express file ko import karne ke do tarike hai
// 1. common js   => ye old tarika hai expess ko import karne ka
// 2. modules js   => ye new tarika hai expess ko import karne ka


// // this is old way to import express here
// //common js  => ye synchroness tarike se kaam karta hai
// const express = require('express')     


//new way to import express
// modules js  => ye asynchroness tarike se kaam karta hai
//Interview Question: express files ko assemble karna padta hai => express files ko assemble karne ke lia package.json file mein {"type": "module"} add karna padega ,,, ydi add nhi kia to error aa jayegi 
import express from 'express'

const app = express()

//bad practice static=> use() is a middlewere
// because jab bhi backend mein kuch change hoga to ye us change ko display kar dega but gyi frontend mein kuch bhi change nhi hoga
// ydi aapne frontend mein change kar dia hai to dobara "build" command run karni padegi (purani dist folder ko delete karke) aur phir bad mein dist folder backend mein shift karna padega
app.use(express.static('dist'))



// app.get("/", (req, res) => {
//     res.send("Hey i am ready")
// })

const jokes = [
    {
        id: 1,
        title: "hey",
        content: "hey i am joker ,aur suna gaddu"
    },
    {
        id: 2,
        title: "kutta gai",
        content: "abe kutte kya haal"
    },
    {
        id: 3,
        title: "randi baz dost",
        content: "saale tu to randi baz nikla"
    },
    {
        id: 4,
        title: "lodu",
        content: "abe lodu ab to moz aa rhi hai"
    },
    {
        id: 5,
        title: "hiran joke",
        content: "Abe saale ek thappad mein hiran bana duga"
    },
    {
        id: 6,
        title: "kya haal",
        content: "kuch nhi bas yaar lodiya nhi hai jeevan mein"
    },
    {
        id: 7,
        title: "maa ki aakh",
        content: "teri maa ki aakh"
    },
]

const port = process.env.PORT || 3000

//standard way to request
app.get("/api/jokes", (req, res) => {
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`I am listening at http://localhost:${port}`)
})