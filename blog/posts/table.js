function generateTOC() {
    const headings = document.querySelectorAll(".post-content h1, .post-content h2, .post-content h3, .post-content h4, .post-content h5, .post-content h6");
    if (headings.length === 0) return;

    const toc = document.createElement("div");
    toc.classList.add("toc");
    toc.innerHTML = `<p class="toc-title">Contents</p>`;
    // <i class="fa-solid fa-chevron-right hide"></i> <i class="fa-solid fa-chevron-up"></i> 
    const stack = [];
    let rootList = document.createElement("ul");
    toc.appendChild(rootList);

    headings.forEach(heading => {
        const id = heading.textContent.toLowerCase().replace(/\s+/g, "-");
        heading.id = id;

        const level = parseInt(heading.tagName[1]);
        const li = document.createElement("li");
        li.innerHTML = `<a href="#${id}">${heading.textContent}</a>`;

        while (stack.length > 0 && stack[stack.length - 1].level >= level) {
            stack.pop();
        }

        if (stack.length === 0) {
            rootList.appendChild(li);
        } else {
            let subList = stack[stack.length - 1].li.querySelector("ul");
            if (!subList) {
                subList = document.createElement("ul");
                stack[stack.length - 1].li.appendChild(subList);
            }
            subList.appendChild(li);
        }

        stack.push({ level, li });
    });

    document.querySelector(".toc-sidebar").appendChild(toc);
}

generateTOC();