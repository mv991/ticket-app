import exprss from "express"

const router = exprss.Router();

 router.get("/api/users/currentUser",(req,res) => {
    res.send("Hi teher")
}) 

export {router as currentUserRouter}