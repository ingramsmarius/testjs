const dotenv = require('dotenv')

dotenv.config();
const express = require('express');

const app = express();

app.get('/endpoint-1', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: 'Seems like endpoint 1 works'
        }
    })
});
app.get('/endpoint-2', (req, res, next) => {
    res.status(200).json({
        success: true,
        data: {
            message: 'Seems like endpoint 2 works'
        }
    })

});

const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log('server is running on this port ${PORT}'))
