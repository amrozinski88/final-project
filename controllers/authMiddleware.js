const admin = require("firebase-admin");

const getAuthToken = (req,res,next)=>{
    if(req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer"){
        req.authToken = req.headers.authorization.split(" ")[1]
    } else{
        req.authToken = null
    }
    next()
}


const authChecker = (req,res,next)=>{
    getAuthToken(req, res, async ()=>{
        try {
            const userInfo = await admin.auth().verifyIdToken(req.authToken);
            req.authId = userInfo.uid
            return next()
        } catch (error){
            return res.status(401).json("You must be logged in to view this page")
        }
    })
}

module.exports = authChecker;