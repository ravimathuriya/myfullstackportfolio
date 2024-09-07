const express = require("express")
const router = express.Router()
const msgschema = require("../models/rcvdmsg")
const { body, validationResult } = require('express-validator');


router.post("/",
    body('name').isLength({min:3}),
    body('email').isEmail(),
    body('message').isLength({ min:5 }) 
    ,(req, res) => {

    try {
        // mesg.save()
        // res.send("added successfully")

        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
    // const mesg = msgschema(req.body)

    msgschema.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    }).then(user => res.json(user));

    
    } 
    
    
    catch (error) {
        console.log("Interal Error")    
    }    
        
})

module.exports = router;