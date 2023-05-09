const express = require('express')
const mongoose = require('mongoose');
//const { post } = require('./route/user');
const app = express()
const port = 3000
const userRouter = require('./route/user')
const postRouter = require('./route/posts')

app.use(express.json())

app.use('/user', userRouter)
app.use('/post',postRouter )
mongoose.connect('mongodb://127.0.0.1:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Not Connected to Database ERROR! ", err);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})