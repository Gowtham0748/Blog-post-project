import express from "express";
import bodyParser from "body-parser";
import session from "express-session";


import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";

const app = express();
const port = process.env.PORT || 3020;

//middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


//session setup
app.use(session({
    secret: "blog-secret",
    resave: false,
    saveUninitialized: false
}));

//view engine
app.set("view engine","ejs");
//routes
app.use("/", authRoutes);
app.use("/", postRoutes);

//start server
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});





















// app.get("/", (req, res) => {
//     res.render("index.ejs", { posts: posts });
// });

// app.get("/new", (req, res) => {
//     res.render("compose.ejs");
// });

// app.post("/new", (req, res) => {
//     const post = {
//         id: Date.now().toString(),
//         title: req.body.title,
//         content: req.body.content,
//     };
//     res.redirect("/");
// });

// app.get("/edit/:id", (req, res) => {
//     res.render("compose.ejs", { post: post });
// });

// app.post("/edit/:id", (req, res) => {
    
//     res.redirect("/");
// });

// app.post("/delete/:id", (req, res) => {
//     res.redirect("/");
// });

// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });
