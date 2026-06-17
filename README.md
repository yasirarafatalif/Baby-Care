# Care.io

### Baby Sitting & Elderly Care Service 

A modern caregiving service platform where users can easily book trusted caretakers for **children, elderly people, and sick family members.**

---

# 🔗 Important Links

🌐 **Live Website**
[https://care-xyz.vercel.app](https://care-io-gamma.vercel.app/)

👤 **Demo Admin Login**

Email: [admin@gmail.com](mailto:admin@gmail.com)
Password: Admin12
👤 **Demo User Login**

Email: [user@gmail.com](mailto:user@gmail.com)
Password: User12

📂 **GitHub Repository**
[https://github.com/yourusername/care.xyz](https://github.com/yasirarafatalif/Baby-Care.git)

---

# Project Overview

**Care.io** is a caregiving service platform that helps users find trusted caretakers for home services.

Users can:

* Search care services
* Book services based on duration and location
* Track their bookings
* Manage booking status

The goal of this platform is to make caregiving **simple, reliable, and accessible for everyone.**

---

# Services

The platform currently provides three main services:

### Baby Sitting

Professional babysitters to take care of children.

### Elderly Care

Support and care services for elderly people.

### Sick People Care

Home care services for sick or recovering patients.

---

# Features

### Responsive Design

* Mobile
* Tablet
* Desktop

### Authentication System

* Email & Password Login
* Google Social Login

### Dynamic Booking System

Users can:

* Select service duration (hours or days)
* Choose location

  * Division
  * District
  * City
  * Area
* Enter address

### Automatic Cost Calculation

Total cost is calculated dynamically.

```
Total Cost = Duration × Service Charge
```

### Booking Status

Each booking has a status:

* Pending
* Confirmed
* Completed
* Cancelled

### My Booking Dashboard

Users can:

* View all bookings
* Track booking status
* Cancel bookings
* View booking details

---

# Pages & Routes

### Homepage `/`

Contains:

* Hero Banner / Slider
* About Section
* Services Overview
* Testimonials

---

### Service Details Page

```
/service/:service_id
```

Displays full information about the selected service and a **Book Service** button.

If user clicks **Book Service**:

* Logged in → redirect to booking page
* Not logged in → redirect to login page

---

### Booking Page (Private Route)

```
/booking/:service_id
```

Steps:

1. Select duration
2. Select location
3. Enter address
4. Total cost calculated automatically
5. Confirm booking

After confirmation:

```
Status = Pending
```

---

### My Bookings Page

```
/my-bookings
```

Shows:

* Service Name
* Duration
* Location
* Total Cost
* Booking Status

Actions:

* View details
* Cancel booking

---

### 404 Error Page

If page not found:

Users see **Not Found message** with a button to return to homepage.

---

# Getting Started

First install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

You can start editing the homepage by modifying:

```
app/page.js
```

---

# Environment Variables

Create `.env.local`

```
MONGODB_URI=
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
EMAIL_USER=
EMAIL_PASS=
```

---

# Future Improvements

Optional features:

* Stripe Payment Integration
* Admin Dashboard
* Payment History
* Booking Management System

---

# Deployment

The easiest way to deploy this project is using **Vercel**.

https://vercel.com

For more information:

https://nextjs.org/docs/app/building-your-application/deploying

---

# Author

Final Assignment Project built using **Next.js** for a caregiving service booking platform.
