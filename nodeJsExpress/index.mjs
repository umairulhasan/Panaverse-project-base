//this is express example 

import express from 'express';

const app = express();

app.get('/',(req, res) => {
    res.send ('Sir Zia khan responsing from HTTP server ');
})

const PORT = 5001;

app.listen(PORT,() => {
    console.log(`Running on this Port ${PORT}`);
});