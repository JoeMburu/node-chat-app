const express = require('express');
const path = require('path');

const port = process.env.PORT = 3000;
const app = express();
app.use(express.static(path.join(__dirname , '../public')));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
