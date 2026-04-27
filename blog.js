const posts = [
    {
        tags: ["Write Up"],
        date: "April 26, 2026",
        title: 'PicoCTF: How to "Obedient Cat"',
        desc: "A walkthrough of my first ever CTF challenge — easier than I expected but taught me a lot about how flags work."
    },
    {
        tags: ["Opinion"],
        date: "April 27, 2026",
        title: 'I Spent a Week on TryHackMe as a Complete Beginner"',
        desc: "No experience, no idea what I was doing. Here's what happened."
    },
    {
        tags: ["Notes"],
        date: "April 26, 2026",
        title: 'TCP vs UDP — When and Why',
        desc: "The difference finally clicked for me. Here's how I think about it now."
    },
]
const blogPosts = document.querySelector(".blog-posts");

function render() {
    blogPosts.innerHTML = posts.map(post => 
        `
        <div class="blog-post">
            <div class="blog-post-details">
                <div class="blog-post-tags">
                    ${post.tags.map(tag => `<div class="blog-post-tag">${tag}</div>`).join("")}
                </div>
                <div class="blog-post-date">${post.date}</div>
            </div>
            <div class="blog-post-title">${post.title}</div>
            <div class="blog-post-desc">
                ${post.desc}
            </div>
        </div>
        `).join("");
}
render();