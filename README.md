

## 📌 Project Overview
This project scrapes the `<title>` and first `<h1>` of a webpage using Puppeteer (Node.js)  
Then it serves the result using Flask (Python) inside a multi-stage Docker container.

## 📁 Technologies Used
- Node.js & Puppeteer
- Python & Flask
- Docker (multi-stage build)
- HTML/CSS for portfolio
- Ubuntu Linux

## 📦 Build & Run

```bash
docker build -t scraper-portfolio .
docker run -p 5000:5000 scraper-portfolio
