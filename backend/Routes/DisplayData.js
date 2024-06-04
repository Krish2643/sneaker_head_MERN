const express = require('express');
const router = express.Router();
const products = require("../models/product");

router.post('/shoesData', async(req, res)=>{
    try{
        const data = await products.find({});
        // console.log(data);
        // global.items = data;
        // res.json("fetched successfully");
        res.send(data);
    }catch(error){
        console.log(error);
        res.send("server error");
    }
})




module.exports = router;