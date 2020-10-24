const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/node-angular-starter`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

app.use(bodyParser.json());
// app.use(cors())

// Create link to Angular build directory
// var distDir = __dirname + "/dist/";
// app.use(express.static(distDir));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});
