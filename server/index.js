const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());
const db = require("./models");


//memanggil routers

const postRouter = require("./routes/Post");
app.use("/post", postRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, ()=> {
        console.log("server berjalan di port 3001");
    });
});

