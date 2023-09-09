//npm init -y
//npm install express
//create index.js
//create views and put index.ejs in it
//install ejs
//setup server in index.js




import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use("/public/images", express.static("./public/images"));
app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs');
app.get("/", (req, res) => {
   res.render("index.ejs",{workarr});
});

let workarr = [];

app.post("/",(req,res)=>{
    const addedWork = req.body["work"];
    workarr.push(addedWork);
    res.render("index.ejs",{workarr});
        

  

})
app.listen(port, () => {
   console.log(`Listening on port ${port}`);
});