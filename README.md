# 🌍 Wanderlust

A full-stack Airbnb-style property listings web application where users can browse, create, edit, and delete listings — and leave reviews on each one.

> Built from scratch as a first full-stack project — zero to deploy.

---

## 🚀 Live Demo

> ![Home Page](https://github.com/ritesh01-hub/wanderlust/blob/74ba707c188e2bc597f4776c15468516a537bf91/Screenshot%202026-05-28%20095332.png)

---

## 📸 Screenshots

> _Add screenshots of your app here_

---

## ✨ Features

- 📋 **Browse Listings** — View all available property listings on the home page
- ➕ **Create Listing** — Add a new property with title, description, image, price, location, and country
- ✏️ **Edit & Update** — Modify any existing listing with full form validation
- 🗑️ **Delete Listing** — Remove a listing along with all its associated reviews
- ⭐ **Reviews System** — Add a rating (1–5) and comment to any listing
- ❌ **Delete Reviews** — Remove individual reviews from a listing
- ✅ **Server-side Validation** — Joi schema validation on both listings and reviews
- 🔁 **RESTful Routes** — Clean, standard REST architecture throughout

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB + Mongoose |
| **Templating** | EJS + ejs-mate |
| **Validation** | Joi |
| **HTTP Methods** | method-override |
| **Styling** | Bootstrap 5 |

---

## 📁 Project Structure

```
wanderlust/
├── models/
│   ├── listing.js       # Listing schema (title, description, image, price, location, country, reviews[])
│   └── review.js        # Review schema (comment, rating 1-5)
├── routes/
│   ├── listing.js       # CRUD routes for /listings
│   └── review.js        # Nested routes for /listings/:id/reviews
├── views/
│   ├── layouts/
│   │   └── boilerplate.ejs
│   ├── listings/
│   │   ├── index.ejs
│   │   ├── show.ejs
│   │   ├── new.ejs
│   │   └── edit.ejs
│   └── partials/
│       ├── navbar.ejs
│       └── footer.ejs
├── public/              # Static assets (CSS, JS)
├── schemas.js           # Joi validation schemas
├── app.js               # Express app entry point
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/wanderlust.git
cd wanderlust

# 2. Install dependencies
npm install

# 3. Start MongoDB locally
mongod

# 4. Run the app
node app.js
```

The app will be running at **http://localhost:8080**

---

## 🔗 Routes Overview

### Listings

| Method | Route | Description |
|---|---|---|
| GET | `/listings` | Show all listings |
| GET | `/listings/new` | Form to create a listing |
| POST | `/listings` | Create a new listing |
| GET | `/listings/:id` | Show a single listing |
| GET | `/listings/:id/edit` | Form to edit a listing |
| PUT | `/listings/:id` | Update a listing |
| DELETE | `/listings/:id` | Delete a listing |

### Reviews

| Method | Route | Description |
|---|---|---|
| POST | `/listings/:id/reviews` | Add a review to a listing |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete a review |

---

## 🗄️ Data Models

### Listing
```js
{
  title: String,
  description: String,
  image: {
    url: String,
    filename: String
  },
  price: Number,
  location: String,
  country: String,
  reviews: [{ type: ObjectId, ref: "Review" }]
}
```

### Review
```js
{
  comment: String,
  rating: Number  // 1 to 5
}
```

---

## 📦 Dependencies

```json
{
  "express": "^4.x",
  "mongoose": "^7.x",
  "ejs": "^3.x",
  "ejs-mate": "^4.x",
  "method-override": "^3.x",
  "joi": "^17.x"
}
```

---

## 🌱 Future Improvements

- [ ] User authentication & authorization (Passport.js)
- [ ] Flash messages for success/error feedback
- [ ] Image upload via Cloudinary
- [ ] Map integration (Mapbox / Leaflet)
- [ ] Search and filter listings
- [ ] Responsive mobile UI improvements

---

## 🙌 Acknowledgements

- Inspired by [Airbnb](https://www.airbnb.com/)
- Built as part of a full-stack web development learning journey

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ — from zero to deploy.</p>
