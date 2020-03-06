const express = require('express');
const router  = express.Router();

const Post = require("../models/Post.js")

/* GET post page */
router.get('/post', (req, res, next) => {
  console.log("d", req.params)
  let id = req.params.id;
  res.render('post');
});

router.get('/post/create', (req, res, next) => {
  console.log("d", req.params.id)
  let id = req.params.id;
  res.render('create');
});

router.post('/post/create', (req, res, next)=>{
  let title = req.body.theTitle
  let image = req.body.theImage
  let text = req.body.theText
  Post.create({
    title: title,
    image: image,
    text: text
})
.then(()=>{
    console.log(req)
    res.redirect('/post')

})
.catch(error => {
  next(error);
  console.log(error);
})
})

module.exports = router;
