const { Product } = require('../models/Product');

const router  =require('express').Router();

router.get('/products', async(req, res)=>{ 
     const products = await Product.findAll({
        order: [
          ["price", "DESC"],
        ],
      })
     console.log(products)

      res.status(200).json({rows:products})
})


router.post('/products', async(req, res)=>{ 
    try{
        await Product.bulkCreate(req.body);  
        res.status(201).json( {message: 'Products created'});
    }

    catch(err){
        res.status(500).json( {message: err.message});
    }
  
})

 

module.exports  ={router}