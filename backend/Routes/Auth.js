const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtsecret = "mynameissneakerHead"

router.get('/hello', (req,res)=>{
    res.json({message:'Hello World'});
})

router.post('/signup',[
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('name').isLength({ min: 3 })
    ],
   async (req, res)=>{
    let success = false;
    const errors = validationResult(req);
     if(!errors.isEmpty()){
         return res.status(400).json({success, errors: errors.array()});
     }

     const salt = await bcrypt.genSalt(10);
     const hashPassword = await bcrypt.hash(req.body.password, salt); 

        try{
            const  {name, email, password} = req.body;
            const user = await User.create({ 
                name, 
                email, 
                password:hashPassword
            });

            const data = {
                userData : {
                    id: user._id,
                }
               }
            const jwtToken = jwt.sign(data, jwtsecret);

            res.json({success: true, jwtToken});
        }catch(err) {
            console.log(err);
            res.json("credintial should be unique");
            //  res.json({ error: "Please enter a unique value." })
        }
})


router.post("/login", async(req, res)=>{
           try{
               const  {email, password} = req.body;
               const user =  await User.findOne({email});
               if(!user){
                console.log("user is not registered");
                return res.status(400).json("user is not register");
               }

               const comparePassword = await bcrypt.compare(req.body.password, user.password);

               const data = {
                userData : {
                    id: user._id,
                }
               }
               const jwtToken = jwt.sign(data, jwtsecret);

               if(comparePassword){
                   res.json({success: true, jwtToken});
               }else{
                return res.status(400).json("incorrect password");
               }
           }catch(err) {
               console.log(err);
               res.json("credintial should be unique");
           }
})

module.exports = router;