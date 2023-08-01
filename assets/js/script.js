import Destination from "./destination.js";
import DestinationText from "./destiText.js";
import DestinationBg from "./destiBg.js";
import Blog from "./blog.js";
import Testimonial from "./testimonial.js";

const navBar = document.querySelector(".header"),
    menuBtn = document.querySelector(".header__menu-icon"),
    closeMenuBtn = document.querySelector(".close-icon"),
    sections = document.querySelectorAll("section[id]"),
    destiSliderWrapper = document.querySelector(".destinations__slider-wrapper"),
    destinationsText = document.querySelector(".destinations__text"),
    destinationsBg = document.querySelector(".destinations__bg"),
    blogContent = document.querySelector(".blogs__content"),
    testiSliderWrapper = document.querySelector(".testimonials__wrapper"),
    scrollUpBtn = document.querySelector(".scroll-up");

const DESTINATIOS_API = "../assets/apis/destinations.json";
const BLOG_API = "../assets/apis/blogs.json";
const TESTIMONIALS_API = "../assets/apis/testimonials.json";

// initialize Scroll Reveal
const sr = ScrollReveal({ origin: "top", distance: "100px", duration: 2000, delay: 200 });

/* ============== Header ============== */

menuBtn.addEventListener("click", () => {});

closeMenuBtn.addEventListener("click", () => {});

function changeHeaderBg() {}

/* ============== Home Section ============== */
const homeSwiper = new Swiper();

const thumbnailsSwiper = new Swiper();

/* ============== About Section ============== */
/* ScrollReveal JS */

/* ============== Destinations Section ============== */

async function renderDestinations() {}

/* ============== Blog Section ============== */
async function renderBlogs() {}

/* ============== Testimonials Section ============== */
async function renderTestmonials() {}

/* ============== Footer ============== */
/* ScrollReveal JS */

/* ============== Active Scroll ============== */

function activeScroll() {}

/* ============== Scroll Up ============== */

function showScrollUpBtn() {}

scrollUpBtn.addEventListener("click", () => {});

window.addEventListener("scroll", () => {});

window.addEventListener("load", () => {});
