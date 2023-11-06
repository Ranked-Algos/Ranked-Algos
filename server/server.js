const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`App is listening on`, PORT);
});

module.exports = app;