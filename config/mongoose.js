const mongoose = require('mongoose');

main().then(msg=>{ console.log("connection restablisehd to DB")}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/FirstApp');
}