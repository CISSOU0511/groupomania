/*const mysql = require('mysql2');



const commentSchema = mysql.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  firstName: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mysql.model('groupomania', commentSchema);