// first, require in your flavors. 
const Todo = require('./todo.js');

module.exports = function(app) {

  app.get('/yourdata', (req, res) => {
    console.log('inside here!!!')
    // we've entered the matrix. 
    Todo.find({}, (err, todo) => {
      if (err) return res.status(500).send(err);
      res.status(200).send(todo);
    })
  })

  // doesn't work below. 
  app.post('/yourdata', (req, res)  => {
    console.log('request object inside of post', req.body)
  })
}


// module.exports = function(app) {
//   // returns an object with the vote totals for chocolate, vanilla, and strawberry ice cream
//   app.get('/api/votes', (req, res) => {
//     // what we'll do here for our first get request is find all of the flavors. 
//     Flavor.find({}, (err, items) => {
//       // make sure to send back error, don't just set the status. 
//       if (err) return res.status(500).send(err); 
//       // if good, send back items we got 
//       res.status(200).send(items)
//     })
//   });
  
//   // adds a vote to the ice cream with the given req.body.flavor
//   // creates the flavor in the database if it's not found
//   app.post('/api/vote', (req, res) => {
//     // primary difference b/t post and get request is that the post has a req.body
//     // our body will have a flavor, example will be chocolate. 
//     // if it gets req.body.flavor chocolate, it'll search the database for the chocolate and increase the like count for chocolate.
    
//     // what we'll first do is extract body.chocolate
//     // typically call collections with an uppercase - may be because of lowercase & adding a 's' due to mongo
//     const flavor = req.body.flavor;

//     // given our flavor model, we want to find and update
//     // want to put in a query, what we want to find
//     // want to find an icecream with the flavor of chocolate 
//     // first arg is saying to give me the document with the flavor defined in line 25
//     // second argument is called the updater, part of the mongoose API - $inc: {} - pass an object for which objects we want to increment it by 
//       // what we want to specify with an incrementer, we want to incrememnt the likes by one. Every person one vote. 
//     // third arg is the upsert (update / insert) 
//       // if something is already found, it will update it. 
//       // if it doesn't exist, it will create a document with the flavor and the like count of one. 
//     // inside third arg, new: true - if you don't put, then it won't have the vote upvoted. 
//       // sam heavily recommends putting in new: true in the options, so you can return from your response in the API with the right amount of likes from the document. 
//     // to test this, can go to postman
//     Flavor.findOneAndUpdate({ flavor }, {$inc: {likes: 1}}, {upsert: true, new: true}, (err, item) => { // finding only one because there's only one flavor. 
//       // return error if mongoose error
//       if(err) return res.status(500).send(err);
      
//       res.status(200).send(item);
//     })
//   });
// }

