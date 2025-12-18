const posts = [];

function addPost(title, content) {
    const post = {
        id: Date.now().toString(),
        title: title,
        content: content,
    };
    posts.push(post);
}

addPost("First", "Content 1");
console.log("After 1st:", posts.length);

// Simulate some time passing
setTimeout(() => {
    addPost("Second", "Content 2");
    console.log("After 2nd:", posts.length);
    console.log(posts);
}, 100);
