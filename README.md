# 3D Interactive Portfolio Book — Runnable Project

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/3d-interactive-portfolio-book/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Recreated from the supplied 13.53-second screen recording titled **3D Interactive Portfolio Book**.

## What is visible in the video

The video demonstrates a 3D page-turning portfolio book with a purple cover and white pages. The visible page content includes:

- Cover: `PORTFOLIO` / `Interactive Designer`
- Introduction: `Hello! 👋` and a short UI/UX designer + Front-end developer description
- `Download Resume` button
- Technical Skills: HTML & CSS, JavaScript & React, UI/UX Design (Figma), 3D Animation
- What I Do: Web Development and Interface Design
- Contact page: name, email, message fields and `Send Message` button

## CSS transcribed from the visible editor

The recording shows the following rules clearly enough to transcribe:

```css
.front, .back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 0 12px 12px 0;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: inset 4px 0 10px rgba(0,0,0,.02);
}

.back {
  transform: rotateY(180deg);
  border-radius: 12px 0 0 12px;
  background: #f8fafc;
  border-right: 1px solid #e2e8f0;
  box-shadow: inset -4px 0 10px rgba(0,0,0,.02);
}

.page .front {
  background: #ffffff;
  border-left: 1px solid #e2e8f0;
}

.page:nth-child(even) .front {
  background: #f8fafc;
}
```

## Implemented functionality

- CSS 3D book and page-turn transitions
- Four page sheets with front/back content
- Previous / Next navigation controls
- Keyboard arrow-key navigation
- Click a page to turn it
- Skills progress bars
- Contact form front-end validation and demo confirmation
- Responsive layout for mobile and desktop

## Run

Extract the ZIP and open `index.html` in a modern browser. No npm install, build process or external assets are required.

## Files

- `index.html` — portfolio pages and content
- `style.css` — 3D book layout, page faces, shadows and transitions
- `script.js` — page navigation and contact form demo
- `README.md` — source transcription and run instructions

## Source accuracy

The CSS above is transcribed from the visible editor region in the video. The recording does not show all of the original HTML, JavaScript or complete CSS, so the page structure and interaction logic have been reconstructed to match the visible portfolio book and page contents. The portfolio text and skill percentages are demonstration content based on the visible labels; replace them with the portfolio owner's real details before publishing. The resume button is a visual link placeholder, and the contact form does not send data to a server.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
