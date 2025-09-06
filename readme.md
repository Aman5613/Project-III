# Allbirds

A full-stack web application built with React, Redux Toolkit, and Vite, featuring user registration, login/logout, admin product management, product display, responsive design, protected routes, notifications via Toastify, and a JSON server backend.

# Screenshots

![App Screenshot](https://ik.imagekit.io/6i2qiqf2n/allbirds/Screenshot%20(18).png?updatedAt=1757145849897)
![App Screenshot](https://ik.imagekit.io/6i2qiqf2n/allbirds/Screenshot%20(19).png?updatedAt=1757145849762)
![App Screenshot](https://ik.imagekit.io/6i2qiqf2n/allbirds/Screenshot%20(20).png?updatedAt=1757145849660)
![App Screenshot](https://ik.imagekit.io/6i2qiqf2n/allbirds/Screenshot%20(21).png?updatedAt=1757145849745)
![App Screenshot](https://ik.imagekit.io/6i2qiqf2n/allbirds/Screenshot%20(22).png?updatedAt=1757145849780)
![App Screenshot](https://ik.imagekit.io/6i2qiqf2n/allbirds/Screenshot%20(23).png?updatedAt=1757145849802)
![App Screenshot](https://ik.imagekit.io/6i2qiqf2n/allbirds/Screenshot%20(24).png?updatedAt=1757145849730)
![App Screenshot](https://ik.imagekit.io/6i2qiqf2n/allbirds/Screenshot%20(25).png?updatedAt=1757145849777)

## Features

- **User Registration & Login:** Users can register and log in. Authentication state is managed with Redux Toolkit.
- **Admin Product Management:** Only admin users can create new products.
- **Product Display:** All users can view products on a beautiful, responsive home page.
- **Protected Routes:** Admin-only routes for product creation.
- **Notifications:** Toastify is used for success/error notifications.
- **Footer:** Responsive footer component.
- **Routing:** React Router for navigation between pages.
- **Database:** JSON Server simulates a REST API backend.

## Tech Stack

- **Frontend:** React, Redux Toolkit, Vite, Tailwind CSS, Toastify, React Router
- **Backend:** JSON Server

## Getting Started

### Prerequisites

- Node.js & npm installed
- JSON Server installed globally (`npm install -g json-server`)

### Installation

1. **Clone the repository:**
	```bash
	git clone https://github.com/Aman5613/Project-III.git
	cd Project-III
	```

2. **Install frontend dependencies:**
	```bash
	cd Frontend
	npm install
	```

3. **Start JSON Server:**
	```bash
	cd ../Backend
	json-server --watch db.json --port 5000
	```

4. **Start the frontend:**
	```bash
	cd ../Frontend
	npm run dev
	```

### Folder Structure

- `Frontend/` - React app source code
  - `src/Pages/` - Home, Login, Register, Product, CreateProduct, Profile, Carousel, Footer
  - `src/Store/` - Redux slices and store setup
  - `src/Routes/` - Mainroutes for protected/public routes
  - `src/Utils/` - Axios config
  - `src/assets/` - Images and fonts
  - `public/` - Static assets
- `Backend/` - JSON Server database (`db.json`)

### Usage

- Register as a new user.
- Login to access user features.
- Admin users can create new products.
- View products on the home page.
- Notifications appear for actions (login, logout, product creation, errors).
- Responsive design for all devices.

### Redux Toolkit

- State management for authentication, products, and cart.
- Slices: `userSlice`, `productsSlice`, `cartSlice`
- Async actions: `userAction`, `productAction`

### Routing

- Public routes: Home, Login, Register, Product
- Protected routes: CreateProduct (admin only), Profile

### Toastify

- Used for notifications (success, error, info).

### JSON Server

- Simulates REST API for users and products.
- Data stored in `Backend/db.json`.

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

## License

