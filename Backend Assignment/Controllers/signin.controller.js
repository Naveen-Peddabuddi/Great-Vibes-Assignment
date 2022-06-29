const uuid = require('uuid')
const User = require('../Models/signup.model')


class Session {
    constructor(username, expiresAt) {
        this.username = username
        this.expiresAt = expiresAt
    }

    isExpired() {
        this.expiresAt < (new Date())
    }
}

const sessions = {}

const signinHandler = async(req, res) => {
    
    try{
        const users = await User.find({username : req.body.username,password: req.body.password}).lean().exec()
        if(users){
            const sessionToken = uuid.v4()
        const now = new Date()
        const expiresAt = new Date(+now + 5000 * 1000)
        const session = new Session(req.body.username, expiresAt)
        
        sessions[sessionToken] = session
        res.cookie("session_token", sessionToken, { expires: expiresAt })
        res.send(users).status(201).end()
        }
        else {
            res.status(401).end()
        }
        
        
    }
   catch(e){
    res.send(e.message)
   }
}


const handler = (req,res,next)=> {
    if (!req.cookies) {
        res.send("please login").status(401).end()
    }
    const sessionToken = req.cookies['session_token']
    if (!sessionToken) {
        // If the cookie is not set, return an unauthorized status
        res.status(401).end()
      
    }userSession = sessions[sessionToken]
    if (!userSession) {
        // If the session token is not present in session map, return an unauthorized error
        res.status(401).end()
        
    }if (userSession.isExpired()) {
        delete sessions[sessionToken]
        res.send("session expired").status(401).end()
    }
    next()
}


module.exports = {
    signinHandler,
    handler
}