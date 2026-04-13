MINIMALIST PORTFOLIO WEBSITE
=============================

A clean, fast, fully responsive portfolio website built with
HTML5, CSS3, and Vanilla JavaScript. No frameworks. No dependencies.

FILE STRUCTURE
--------------
portfolio-website/
├── index.html        → Home / Hero page
├── about.html        → Bio, Skills, Experience, Education
├── projects.html     → Filterable project gallery
├── contact.html      → Contact form with validation
├── css/
│   └── style.css     → All styles (mobile-first)
├── js/
│   └── script.js     → Nav toggle, filter, form validation
├── images/           → Add your project images here
└── README.txt        → This file

HOW TO RUN
----------
Simply open index.html in any modern browser. No build step needed.

HOW TO CUSTOMIZE
----------------
1. PERSONAL INFO
   - Replace "Your Name" with your name in all 4 HTML files
   - Update "YN." logo in the navbar
   - Update email in contact.html
   - Update social media links in all footers

2. HERO SECTION (index.html)
   - Edit hero-role, hero-tagline text
   - Update CTA button links if needed

3. PROJECTS (projects.html + index.html)
   - Replace .project-img-placeholder divs with <img> tags
   - Update project titles, descriptions, tags
   - Update Live Demo and GitHub links
   - Add/remove project cards as needed
   - data-category values: "web", "design", "other"

4. ABOUT (about.html)
   - Replace .photo-placeholder with your actual photo
   - Update bio paragraphs
   - Edit skills lists
   - Update experience and education timeline items

5. COLORS & FONTS (css/style.css)
   - Edit CSS variables at the top of style.css:
     --accent: #2563eb  → change to your brand color
     --black / --white  → adjust for dark mode if desired
   - Font: change Google Fonts import in each HTML <head>

6. CONTACT FORM
   - The form currently shows a success message on submit
   - To actually send emails, integrate with:
     a) Formspree (https://formspree.io) — free, easy
     b) EmailJS (https://emailjs.com) — client-side email
     c) Your own backend endpoint

ADDING PROJECT IMAGES
---------------------
1. Add image files to the /images/ folder
2. Replace this in project cards:
   <div class="project-img-placeholder">Project Image</div>
   With:
   <img src="images/your-image.jpg" alt="Project Name" />

PERFORMANCE TIPS
----------------
- Compress images before adding (use squoosh.app)
- Use WebP format for best compression
- Keep images under 200KB each

BROWSER SUPPORT
---------------
Works in all modern browsers: Chrome, Firefox, Safari, Edge.
