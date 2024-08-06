// const  currentUserRouter  = require("./routes/current-user");

 const {signupRouter}  = require("./routes/signup");

const express = require("express");
const bodyParser = require("body-parser");
const { errorHandler }  = require( "./middlewares/error-handler");
const app = express();
app.use(bodyParser.json());
app.use(signupRouter)
// app.use(currentUserRouter)

// Use currentUserRouter for /current-user route
// app.use("/current-user", currentUserRouter);

// Use signupRouter for /signup route
// app.use("/signup", signupRouter);
app.listen(8000,() => {
    console.log("Listening on port 3000");
})

