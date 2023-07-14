const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hello NODE')
})

const port = 3000;
app.listen(port, () => {
    console.log("Node API is running now");
});