const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Handle POST request to /submit_form
app.post('/submit_form', (req, res) => {
    const { name, email, phone } = req.body;

    // Here, you can perform any necessary processing, such as sending an email or saving the data to a database

    res.send('Thank you for contacting us. We will get back to you shortly!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
