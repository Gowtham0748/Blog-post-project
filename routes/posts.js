import express from "express";
import pool from "../config/db.js";
import isAuthenticated from "../middleware/auth.js";

const router = express.Router();

// router.get("/", async (req,res)=>{
//     const result = await pool.query("SELECT * FROM posts");

//     res,render("index",{posts:result.rows});
// });

router.get("/", async (req, res) => {
  try {

    const result = await pool.query(
      "SELECT * FROM posts ORDER BY created_at DESC"
    );

    res.render("index", { posts: result.rows });

  } catch (err) {
    console.log(err);
    res.send("Error loading posts");
  }
});

router.get("/new",isAuthenticated, (req,res)=>{
    res.render("compose",{post:null});
});

router.post("/new",isAuthenticated, async (req,res)=>{
    const {title, content} = req.body;

    await pool.query(
        "INSERT INTO posts (title, content) VALUES ($1,$2)", [title,content]
    );

    res.redirect("/");
});

router.get("edit/:id", async(req,res)=>{
    try{
        const postId = req.params.id;

        const result = await pool.query(
            "SELECT * FROM posts WHERE id = $1",
            [postId],
        );
        const post = result.rows[0];

        res.render("compose",{post});
    }catch(err){
        console.log(err);
        res.send("Error fetching post");
    }
})

router.post("/edit/:id", async (req,res)=>{
    try{
        const postId = req.params.id;
        const {title, content} = req.body;

        await pool.query(
            "UPDATE posts SET title = $1, content = $2 WHERE id = $3",
            [title, content, postId],
        );
        res.redirect("/");
    }catch(err){
        console.log(err);
        res.send("Error updating post");
    }
});

router.post("/delete/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    await pool.query(
      "DELETE FROM posts WHERE id = $1",
      [postId]
    );

    res.redirect("/");

  } catch (err) {
    console.log(err);
    res.send("Error deleting post");
  }
});


export default router;