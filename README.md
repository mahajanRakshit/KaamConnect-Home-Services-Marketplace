# KaamConnect – Home Services Marketplace

KaamConnect is a responsive front-end demo marketplace concept that connects customers with local home-service professionals.

## Features
- Responsive landing page with service categories and service search.
- Customer and service-worker registration and login demo.
- Customer booking form with date, address, contact and problem details.
- Customer dashboard to view saved service requests.
- Worker dashboard to view submitted customer requests.
- Browser `localStorage` used to demonstrate persistence between refreshes.

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript
- Browser localStorage

## Run locally
1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in a modern browser. For best results, use VS Code with the Live Server extension.
4. Register a customer or worker account, then log in using the same browser.

No npm installation or build command is required.

## Project structure
```text
KaamConnect/
├── index.html
├── login.html
├── register.html
├── customer-dashboard.html
├── worker-dashboard.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── auth.js
│   └── dashboard.js
├── assets/
│   └── README.md
├── .gitignore
├── LICENSE
└── README.md
```

## Deploy with GitHub Pages
1. Create a public GitHub repository named `KaamConnect`.
2. Upload the contents of this folder (so `index.html` is at the repository root).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then save.
6. Wait for GitHub Pages to publish the site. The URL will look like `https://YOUR-USERNAME.github.io/KaamConnect/`.

## Important demo limitations
This is a front-end portfolio prototype, not a production marketplace. Account details and bookings are stored in browser localStorage. They are not securely authenticated, encrypted, synchronized across devices, or shared between different users/browsers. The worker dashboard displays requests saved in the same browser only. Do not enter real passwords or sensitive personal information. A production version needs a secure backend, database, authentication, authorization, booking workflow, and privacy/security controls.

## Suggested future improvements
- Backend API and database.
- Secure password hashing and session management.
- Worker profiles, service areas, availability and ratings.
- Booking status updates and customer/worker communication.
- Admin dashboard and payment integration.
