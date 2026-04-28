const posts = [
    {
        tags: ["Write Up"],
        date: "April 28, 2026 | 12:52AM",
        title: 'Natas: Web Exploits Walkthrough Levels (0-4)',
        desc: "This is my first step onto NATAS which is a web exploitation wargames site. I documented my journey through levels (0-4) of NATAS and this felt like the right place to start as the web is what I'm most familiar with as a frontend web developer.",
        slug: "natas-levels-0-4-writeup"
    },
]
const blogPosts = document.querySelector(".blog-posts");
const searchInput = document.querySelector('.tag-search');

function render(filtered = posts) {
    if (filtered.length === 0) {
        blogPosts.innerHTML = `<p class="no-results">No posts found.</p>`;
        return;
    }

    blogPosts.innerHTML = filtered.map(post => 
        `
        <a href="posts/${post.slug}/index.html" class="blog-post">
            <div class="blog-post-details">
                <div class="blog-post-tags">
                    ${post.tags.map(tag => `<div class="blog-post-tag">${tag}</div>`).join("")}
                </div>
                <div class="blog-post-date">${post.date}</div>
            </div>
            <h2 class="blog-post-title">${post.title}</h2>
            <p class="blog-post-desc">${post.desc}</p>
        </a>
        `).join("");
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    const filtered = posts.filter(post => {
        const searchable = [
            post.title,
            post.desc,
            post.tags.join(' ')
        ].join(' ').toLowerCase();

        return searchable.includes(query);
    });

    render(filtered);
});

render();