// ! Project Generator
const projectList = [
    {
        title: "Abhijith Thomas Photography",
        desc: "A dark, minimal portfolio built to let the photography speak with a clean gallery layout with lightbox viewing, optimized image delivery, and an integrated contact form",
        image: "img/abhijith-thomas.png",
        alt: "Abhijith Thomas Photography website — custom portfolio built by Justin Vera, freelance web developer. This site is a dark, minimal portfolio website built to let the photography speak with a clean gallery layout with lightbox viewing, optimized image delivery, and an integrated contact form",
        tags: ["HTML", "CSS", "JS", "Python"],
        link: "https://abhijiththomasphotography.com/"
    },
    {
        title: "Hyde's Cuts & Razors",
        desc: "A bold, bright site for a local barbershop built to attract walk-ins with an integrated Google Maps location and contact form.",
        image: "img/hyde.png",
        alt: "Hyde's Cuts & Razors website — custom portfolio built by Justin Vera, freelance web developer. This website is a bold, bright site for a local barbershop built to attract walk-ins with an integrated Google Maps location and contact form.",
        tags: ["HTML", "CSS"],
        link: "#"
    },
    {
        title: "Sunnyside Agency",
        desc: "An artsy, unconventional landing page for a creative agency with bold layouts, expressive design, and a look that breaks the mold.",
        image: "img/sunnyside.png",
        alt: "Sunny Side Agency website — custom portfolio built by Justin Vera, freelance web developer. This site is an artsy, unconventional landing page for a creative agency with bold layouts and expressive design.",
        tags: ["HTML", "CSS"],
        link: "https://sunnyside-agency-landing-page-main-peach.vercel.app/"
    },
]
const projectsGallery = document.querySelector(".projects-gallery");
projectList.forEach(project => {
    projectsGallery.innerHTML += 
    `
    <article class="project">
        <div class="project-image">
            <a href="${project.link}" target="_blank">
                <img src="${project.image}" alt="${project.alt}">
            </a>
        </div>
        <div class="project-content">
            <div class="project-text">
                <h2 class="project-title">${project.title}</h2>
                <p class="project-desc">${project.desc}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<div class="project-tag">${tag}</div>`).join("")}
                </div>
            </div>
        </div>
    </article>
    `
})
// ! Search Function
const projects = document.querySelectorAll(".project");
const tagSearch = document.querySelector("#tag-search");
tagSearch.addEventListener("input", function () {
    const criteria = this.value;
    projects.forEach(project => {
        const projectTags = project.querySelectorAll(".project-tag");
        const queries = criteria.split(",").map(query => query.trim().toLowerCase()).filter(query => query);
        const match = queries.some(query => [...projectTags].some(projectTag => projectTag.textContent.toLowerCase().includes(query.toLowerCase())));
        if (match === true) {
            project.style.display = "";
        } else {
            project.style.display = "none";
        }
        if (criteria === "") {
            project.style.display = "";
        }
    });
})