var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var postSchema = new Schema({
    name : {type: String, index: true},
    date : {type: Date},
    msg : {type : String},
    email : {type : String}
});

var Post = mongoose.model('Post', postSchema);

exports.insertOnePost = function(postObj, callback) {
    let newPost = new Post(postObj);
    newPost.save(function(err, result) {
        callback(err, result);
    })
}