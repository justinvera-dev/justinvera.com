const posts = [
    {
        tags: ["Write Up"],
        date: "April 28, 2026 | 12:52AM",
        title: 'Natas: Web Exploits Walkthrough Levels (0-4)',
        desc: "This is my first step onto NATAS which is a web exploitation wargames site. I documented my journey through levels (0-4) of NATAS and this felt like the right place to start as the web is what I'm most familiar with as a frontend web developer.",
        slug: "natas-levels-0-4-writeup"
    },
    {
        tags: ["Project"],
        date: "April 10, 2026 | 7:22PM",
        title: 'Building My Portfolio Site with Plain HTML, CSS, and JS',
        desc: "No frameworks, no build tools — just vanilla code. Here's why I kept it simple and what I learned from building justinvera.com from scratch.",
        slug: "building-my-portfolio-site"
    },
    {
        tags: ["Cybersecurity", "Theory"],
        date: "April 5, 2026 | 11:00AM",
        title: 'Breaking Down the WannaCry Ransomware Attack',
        desc: "WannaCry infected hundreds of thousands of machines in 2017. I break down how it worked, why it spread so fast, and what defenders could have done differently.",
        slug: "wannacry-ransomware-breakdown"
    }
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