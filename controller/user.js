const User = require("../model/user");


// const jsonWebToken = require('jsonwebtoken')
const bycrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const jwt_code = 'kajdffasdlfjl'
function getAll(res) {
   User.find({}).then(function (users,err) {
    if(!err)res.json(users);
    res.status(500).json(err);
  });
}
function getById(req, res) {
  const {id} = req.params;
  User.find({_id:id}).then(function (user,err) {
    if(!err){ 
      const token = req.headers['auth-token'];
       console.log(token);

const decodedToken = jwt.verify(token, jwt_code);
const userId = decodedToken.id;
console.log(decodedToken);
      res.status(201).json(user);
    }
    res.status(500).json(err);
  });
}

function create(body, res) {
  User.create({
    ...body
  }).then(function (err, user) {
    if(!err)res.json(user);
    res.status(500).json(err);
  });
}
function update(req, res) {
    User.updateOne({_id:req.params.id},req.body).then(function (user,err) {
    if(!err)res.json("user");
    res.status(500).json(err);
  });
}
function deleteById(req, res) {
  User.deleteOne({_id:req.params.id}).then(function (user,err) {
    if(!err)res.json(user);
    res.status(500).json(err);
  });
}

 function login(req, res) {
  
  const email = req.body.email;
  console.log(email);
  if(!email) {
    return res.status(400).send("Missing email")
  }
  User.findOne({email:email}).then(function (user,err) {
    // my_id =user[0]._id;
    m_id = user._id.toString();
    console.log(m_id);
   console.log(user);
    if(!err){
      const token = jwt.sign(
        { id :m_id ,name: req.body.name, email: req.body.email },
        jwt_code,
        { expiresIn: '1h' }
      );
      
      res.json({user,token});
    }
    res.status(500).json(err);
  });
  
}

function register(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  User.create({
    name,
    email,
  }).then(function (user,err) {
    if(err)res.json(err);
    console.log(user);
   res.json({user});
  }).catch(function (err) {
    res.status(500).json(err);
});
}



module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  register,
  login,
};
