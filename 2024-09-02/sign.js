const jwt = require('jsonwebtoken');

const SECRET_KEY = 'mysecretkey';

const payload = {
    "id": 123,
    "username": "lcarlao"
};

const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "25s"});

console.log(token);