// Create a express server 
import express from 'express';

const app = express();

app.get('/api/hello', (req, res) => {
    res.send('Hello World!');
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})
