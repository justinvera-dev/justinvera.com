const serviceList = [
    // {
    //     title: "Custom websites built from scratch",
    //     desc: "A fully custom website tailored to your business and needs. Built to load fast, look professional, and represent your brand and identity.",
    //     price: "300"
    // },
    {
        title: "Landing pages",
        desc: "A single landing page designed to turn visitors into leads.",
        price: "300",
        dataService: "Landing Page"
    },
    {
        title: "Event websites",
        desc: "A clean, time sensitive site designed to promote your event's details such as dates, registration, etc.",
        price: "400",
        dataService: "Event website"
    },
    {
        title: "Business websites",
        desc: "A professional multi-page site for your business to showcase what you have to offer such as a home, about, services, and contact page.",
        price: "1000",
        dataService: "Business website"
    },
    {
        title: "Portfolio sites",
        desc: "A clean and visually stunning site to showcase your portfolio and create a strong first impression to clients or employers.",
        price: "500",
        dataService: "Portfolio website"
    },
    {
        title: "On-page SEO",
        desc: "Optimize your website content, structure, and metadata to rank higher in search results.",
        price: "150",
        dataService: "On-page SEO"
    },
    {
        title: "Website launch and hosting setup",
        desc: "Getting your site live and running smoothly so everything runs smoothly from day one.",
        price: "100",
        dataService: "Website launch and hosting setup"
    },
    {
        title: "Website updates and ongoing maintenance",
        desc: "Regular updates and fixes to keep your site running well and up to par.",
        price: "50",
        dataService: "Website updates and ongoing maintenance"
    },
]
const servicesGrid = document.querySelector(".services-grid");
serviceList.forEach(service => {
    servicesGrid.innerHTML +=
    `
    <div class="service-card">
        <h3 class="service-card-title">${service.title}</h3>
        <p class="service-card-desc">${service.desc}</p>
        <div class="service-card-price" data-service="${service.dataService}">
            From $${service.price} <i class="fa-solid fa-chevron-right"></i>
        </div>
    </div>
    `
});
// 
const contact = document.querySelector("#contact");
const message = document.querySelector(".message");
const serviceCards = document.querySelectorAll(".service-card-price");
serviceCards.forEach(serviceCard => {
    serviceCard.addEventListener("click", function () {
        message.scrollIntoView({
            behavior: "smooth"
        });
        const service = this.dataset.service;
        message.value = 
`Hi, I'm interested in your ${service} service. 

I'd love to learn more about pricing, timeline, and what the process looks like.


`;
        message.classList.add("highlight");
        setTimeout(() => {
            message.classList.remove("highlight");
        }, 1200);
    })
});
