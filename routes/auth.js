import express from "express";
import bcrypt from "bcrypt";
import pool from "../config/db.js";

const router = express.Router();

router.get("/login",(req,res)=>{
    res.render("login");
});

router.get("/signup", (req,res)=>{
    res.render("signup");
});

//signup user
router.post("/signup", async (req,res)=>{

    const {username, email, password} = req.body;
    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(
        "INSERT INTO users (username, email, password) VALUES ($1,$2,$3)",
        [username, email, hashedPassword]
        );

        res.redirect("/login");

    } catch (err) {
        console.log(err);
        res.send("Signup error");
    }
    
});


// LOGIN USER
router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  try {

    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    const user = result.rows[0];

    if (!user) {
      return res.send("User not found");
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.send("Invalid password");
    }

    req.session.userId = user.id;

    res.redirect("/");

  } catch (err) {
    console.log(err);
    res.send("Login error");
  }

});


// LOGOUT
router.get("/logout", (req, res) => {

  req.session.destroy(() => {
    res.redirect("/");
  });

});

export default router;