// first, require in your flavors. 
const Todo = require('./todo.js');

module.exports = function(app) {
  app.get('/yourdata', (req, res) => {
    Todo.find({}, (err, todo) => {
      if (err) return res.status(500).send(err);
      res.status(200).send(todo);
    })
  })

  app.post('/yourdata', (req, res)  => {
    const { dateToDisplay, todoInput } = req.body;
    Todo.findOneAndUpdate( { dateToDisplay }, { "$push": { "todoList": todoInput } }, {upsert: true, new: true}, (err, doc) => { 
      // return error if mongoose error
      if(err) return res.status(500).send(err);
      // figure out how to update state now. 
      res.status(200).send(doc); // where is this being sent? 
    })
  })
}
