const express= require('express');
const blogController = require('../controllers/blogControllers');


const router = express.Router();

router.get('/blogs', blogController.blog_index);
router.post('/blogs', blogController.blog_create_post);
router.get('/blogs/create', blogController.blog_create_get);
router.get('/blogs/:id', blogController.blog_detials);
router.delete('/blogs/:id', blogController.blog_delete);
module.exports = router;





  // another method to delete a blog
  // app.get('/blogsdelete/:id', (req, res) => {
  //   console.log('------------------------------');
  //   const id = req.params.id;
  //   Blog.findByIdAndDelete(id)
  //     .then(result => {
  //       Blog.find().sort({ createdAt: -1 })
  //         .then((result) => {
  //           res.render('index', { title: 'all Blog', blogs: result });
  //         })
  //     }).catch(err => {
  //       console.log(err);
  //     })
  
  // })
  