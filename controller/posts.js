const Post = require("../model/posts");



function getAll(res) {
    Post.find({}).populate('author').then(function (posts,err) {
        if (!err) {
            console.log("fas");
        } else {
            res.status(500).json(err);
        }
        res.status(200).json(posts);
      });
}
function getById(req, res) {
  const {id} = req.params;
  Post.find({_id:id}).then(function (post,err){
    if(!err) res.status(200).json(post);
    res.status(500).json(err);
  });
}

function create(body, res) {
  Post.create({
    ...body
  }).then(function (post,err) {
    if(!err)res.status(201).json(post);
    res.status(500).json(err);
  });
}
function update(req, res) {
    Post.updateOne({_id:req.params.id},req.body).then(function (post,err) {
        if(!err)res.json(post);
        res.status(500).json(err);
      });
}
function deleteById(req, res) {
    Post.deleteOne({_id:req.params.id}).then(function (post,err) {
        if(!err)res.json(post);
        res.status(500).json(err);
      });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
