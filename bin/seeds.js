const mongoose = require('mongoose');
const Post = require ('../models/posts')

mongoose
  .connect('mongodb://localhost/blaccmass', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const posts = {
  title: "First Post",
  image: "https://cdn.domyown.com/images/content/roof_rat1.jpg",
  text: "This is the first post on my new music review blog that I am developing."  
}

Post.create(posts, (err)=> {
  if (err) {throw(err)}
  console.log('created post')
  mongoose.connection.close();
});