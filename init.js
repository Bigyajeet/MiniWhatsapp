//sample data is created
const mongoose = require('mongoose');
const Chat=require("./models/chat.js");
const ExpressError=require("./ExpressError")



main().then(()=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let allchats=[
    {
    from:"bigya",
    to:"biswo",
    msg:"hello",
    created_at:new Date(),//utc

},
{
    from:"SWORUP",
    to:"bigya",
    msg:"thala is best",
    created_at:new Date(),//utc

},
{
    from:"swasti",
    to:"bigya",
    msg:"hey whatsup",
    created_at:new Date(),//utc

},

{
    from:"pilu",
    to:"bigya",
    msg:"bhai kauthi",
    created_at:new Date(),//utc

},

{
    from:"chinmay",
    to:"bigya",
    msg:"ready ta",
    created_at:new Date(),//utc

},
];

Chat.insertMany(allchats);
 