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


router.get('/ViewArticle/:article_id',(req,res)=>{
    let articleId = req.params.article_id //this needs to be changed TODO
    queries.getbody(articleId,(err,data)=>{
        if(err){
            // error.server(err, req, res, {}); return;
            console.log("err:"+ err);return;
        }
        let articleData=data.rows[0];
        // console.log(articleData);

        res.render('viewArticle',articleData);
        // res.
    });

})

router.use(error.client);
router.use(error.server);

module.exports = router;
