const {OAuth2Client} = require('google-auth-library')
 const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
exports.googlelogin = (req,res) => {
    const {tokenId} = req.body
    client.verifyIdToken({idToken :tokenId, audience= process.env.GOOGLE_CLIENT_ID}).then((response) => {
        const {email_verified, name, email} = response.payload
        if ( email_verified){
            User.findOne({email}).exec((err, user) => {
                if (err) {
                    return res.status(400).json({
                        error:"user doesn't exist"
                    })
                } else {
                    if (user){
                        const token = jwt.sign({_id: user._id}, process.env.GOOGLE_CLIENT_ID);
                        const {_id, name, email} = user
                        res.json({
                            token,
                            user:{_id, name, email}
                        }) 
                    } else {
                        let password = email+ process.env.GOOGLE_CLIENT_ID
                        let newuser = new User({name, email, password})
                        newuser.save((err, data) => {
                            if (err) {
                                return res.status(400).json({
                                    error:"something went wrong"
                                })
                            }
                            const token = jwt.sign({_id: data._id}, process.env.GOOGLE_CLIENT_ID);
                        const {_id, name, email} = newuser
                        res.json({
                            token,
                            user:{_id, name, email}
                        }) 
                        })
                    }
                }
            })
        }
        console.log(response.payload)
    })
    console.log()
}