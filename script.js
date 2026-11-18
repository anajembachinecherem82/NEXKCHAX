
function showMessage() {
    alert("Login system coming in our next lesson!");
}

function createPost() {
    const input = document.getElementById("postInput");
    const posts = document.getElementById("posts");

    const message = input.value.trim();

    if (message === "") {
        alert("Please write something first!");
        return;
    }

    const post = document.createElement("article");
    post.className = "post";

    const heading = document.createElement("h3");
    heading.textContent = "NexChax Member";

    const paragraph = document.createElement("p");
    paragraph.textContent = message;

    const button = document.createElement("button");
    button.textContent = "👍 Like";
    button.onclick = function() {
        likePost(button);
    };

    const likes = document.createElement("span");
    likes.textContent = "0 likes";

    post.append(heading, paragraph, button, likes);
    posts.prepend(post);

    input.value = "";
}

function likePost(button) {
    const counter = button.nextElementSibling;
    let likes = Number(counter.dataset.likes || 0);

    likes++;
    counter.dataset.likes = likes;
    counter.textContent = likes + " likes";
}
