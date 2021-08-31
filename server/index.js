const express = require('express')
const PORT = 8080;
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req,res) => {
    res.status(200)
    res.send('You have arrived on the landing page')
})

// app.get('/', (req, res) => {
    
// })


app.listen(PORT, () => {
    console.log('How can we tell if it is working')
})