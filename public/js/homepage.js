const router = require('express').Router();
const { Products } = require('../models');

 for (let i = 0; i < Products.length; i ++) {
     router.post('/products/:id', async (req, res) => {
        try {
            const productId = await Products.findByPk(req.params.id[i]);
            const prodId = productId.get({ plain: true });
            res.render('product',  prodId );
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    })
 };