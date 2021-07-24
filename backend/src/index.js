// const express = require("express");
// const userController = require("./Controller/user.controller");
// const { login } = require("./Controller/auth.controller");
// const passport = require('passport');
// const app = express();
// app.use(express.json());
// app.use(passport.initialize());
// app.use(passport.session());

// app.use("/login", login);
// app.use("/users", userController);

// passport.serializeUser(function(user,done){
//    done(null,"user")
// })

// passport.deserializeUser(function(id,done ){
//   done(null, "user")
// })

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });

// module.exports = app;

//express
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)
server.post("/api/v1/auth/google", async (req, res) => {
    const { token }  = req.body
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID
    });
    const { name, email, picture } = ticket.getPayload();    
    const user = await db.user.upsert({ 
        where: { email: email },
        update: { name, picture },
        create: { name, email, picture }
    })
    res.status(201)
    res.json(user)
})
