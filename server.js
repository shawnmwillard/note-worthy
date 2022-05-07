//Require Express
const express = require("express");
const path = require("path");

const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Run on PORT 3001
const PORT = process.env.PORT || 3001;

//Let me know when / where server is started successfully
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
