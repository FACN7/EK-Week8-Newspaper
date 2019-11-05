// use express.Router() class and load it with controllers
const express = require('express');
const path = require('path');
const router = express.Router();
const queries=require("../queries/index");

// const fruit = require('./fruit');
const error = require('./error');

// router.get('/fruit', fruit.get);
// router.post('/fruit', fruit.post);
router.use(express.static(path.join(__dirname, "..",'..', 'public'), { maxAge: '30d' }));
router.get('/',(req,res)=>{
    res.render('home',{karem:"karem world"})
})
router.get('/addArticle', (req, res) => {
    res.render('addArticle')

  })

router.get('/ViewArticle/:article_id',(req,res)=>{
    let articleId = req.params.article_id //this needs to be changed TODO
    queries.getbody(articleId,(err,data)=>{
        if(err){
            // error.server(err, req, res, {}); return;
            console.log("err:"+ err);return;
        }
        let articleData=data.rows[0];
        console.log(articleData);
        
        res.render('viewArticle',articleData);
    });

})

router.use(error.client);
router.use(error.server);

module.exports = router;
