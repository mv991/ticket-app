import exprss from "express"

const router = exprss.Router();

router.post("/api/users/signin",(req,res) => {
    res.send("Hi teher")
}) 
export {router as signinRouter}