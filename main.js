const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get('/login', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views/login.html'));
})

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views/index.html'));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
