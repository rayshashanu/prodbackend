const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes/index.js');


require('dotenv').config();
const port = 1000;

mongoose.connect('mongodb+srv://rayshashanu:raysha@8182@cluster0.ly25y9i.mongodb.net/raysha/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log(
  'connected to mongo'));




const app = express();
app.use(express.json());
app.use(cors());
const corsOptions = {
  origin: 'http://localhost:1000',
};

app.use(cors(corsOptions));


app.use(
  session({
    secret: '123',
    resave: false,
    saveUninitialized: true
  })
)

app.use((req,res,next) => {

  console.log(req.method, req.url);
   console.log(res.statusCode);
   console.log(req.body);
   next();
})


app.use('/',userRoutes);
// app.use('/admin',adminRoutes);

app.listen(port, () => {
   console.log('server is running:',1000)
});





