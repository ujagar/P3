const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3001
console.log("PORT: ", PORT);
const app = express();

app.listen(PORT, () => { console.log(`APP is running on port ${ PORT } `) });

