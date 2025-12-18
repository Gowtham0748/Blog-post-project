import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [];

app.get("/", (req, res) => {
    res.render("index.ejs", { posts: posts });
});

app.get("/new", (req, res) => {
    res.render("compose.ejs");
});

app.post("/new", (req, res) => {
    const post = {
        id: Date.now().toString(),
        title: req.body.title,
        content: req.body.content,
    };
    posts.push(post);
    res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
    const post = posts.find((p) => p.id === req.params.id);
    res.render("compose.ejs", { post: post });
});

app.post("/edit/:id", (req, res) => {
    const index = posts.findIndex((p) => p.id === req.params.id);
    if (index !== -1) {
        posts[index] = {
            id: req.params.id,
            title: req.body.title,
            content: req.body.content,
        };
    }
    res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
    posts = posts.filter((p) => p.id !== req.params.id);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
