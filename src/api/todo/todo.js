const restful = require('node-restful');
const mongose = restful.mongoose;

const todoSchema = new mongose.Schema({
  description: {type: String, required: true},
  done: {type: Boolean, required: true, default: false},
  creactedAt: {type:Date, default: Date.now}
});

module.exports = restful.model('Todo', todoSchema);