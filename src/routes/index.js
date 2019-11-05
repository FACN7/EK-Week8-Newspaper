// use express.Router() class and load it with controllers
const express = require('express');
const path = require('path');
const router = express.Router();
const queries=require("../queries/index");
const error = require('./error');

router.use(express.static(path.join(__dirname, "..",'..', 'public'), { maxAge: '30d' }));
router.get('/',(req,response)=>{
    queries.getalltitles(( err, res)=>{
        if(err) {throw err;}
        response.render('home',{titles:res.rows});
    })
})
router.post('/addArticle', (req, res) => {
    const user_id=1;
    const pic_url=null;
    queries.addarticle(user_id,req.body.Title,req.body.Article,pic_url,(err,response)=>{
        if(err) {throw err;}
        res.redirect('/')
    })

  })
  router.get('/addArticle', (req, res) => {
    // console.log(req.body);
    res.render('addArticle');

  })


router.get('/ViewArticle',(req,res)=>{
    res.render('ViewArticle')

})

router.use(error.client);
router.use(error.server);

module.exports = router;
