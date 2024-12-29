# Restaurant Management Dashboard

## Project Setup

This project is a Restaurant Management Dashboard designed to provide an interactive user interface and backend for managing restaurant data effectively. The project consists of two primary components:

1. **Backend**: Located in the `server` folder.
2. **Frontend**: Located in the `client` folder.

### File Structure

```
Restaurant-Management-Dashboard/
├── client/                # Frontend React application
│   ├── public/            # Public assets
│   ├── src/               # React source code
│   │   ├── assets/        # Assets
│   │   ├── chartData/     # Data for Charts
│   │   ├── components/    # React components
│   │   ├── scenes/        # Menus
│   │   ├── states/        # Redux Toolkit API setup
│   │   ├── App.js         # Main App component
│   │   ├── index.js       # Entry point
├── server/                # Backend Node.js application
│   ├── controllers/       # API controllers
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── index.js          # Backend entry point
├── package.json           # Project metadata and dependencies
├── README.md              # Project documentation
```

### Technical Specifications

1. **Frontend (React.js, Material UI/Tailwind CSS):**

   - **Framework:** React.js (Next.js optional)
   - **UI Library:** Material UI / Tailwind CSS
   - **Responsive Design:** Ensure the dashboard works across desktop, tablet, and mobile views.

   **Components:**

   - Sidebar Navigation (Dashboard, Orders, Customers, Menu, Settings)
   - Cards for KPIs (Visitors, Orders, Earnings, Satisfaction)
   - Charts (Profit trends, Popular time slots)
   - Tables/Lists (User ratings, Liked/Disliked dishes)
   - Forms (Profit calculator with input fields)

   **Functionalities:**

   - Interactive charts using Chart.js or Recharts.
   - Hover effects and tooltips for better UX.
   - Filtering and sorting options for user ratings and menu items.

2. **Backend (Node.js, Express, MongoDB):**

   - **Framework:** Node.js with Express
   - **Database:** MongoDB

   **API Development:**

   - **Endpoints:**
     - `/api/order` - Retrieve, add, update, and delete orders.
     - `/api/customer` - Manage customer data.
     - `/api/menu` - Add/update menu items.
     - `/api/dashboard` - Return dashboard stats (visitors, orders, profits).

   **Authentication:** Use JWT for secure access.

   **Data Models:**

   - User Model: (name, email, role)
   - Order Model: (items, totalAmount, customer, date)
   - Customer Model: (name, contact, orders)
   - Menu Model: (dishName, category, price, popularity)

3. **Integration:**

   - Connect the frontend with the backend using REST APIs.
   - Implement CRUD operations for orders, customers, and menu management.
   - Real-time updates (Optional - use WebSockets or polling).
   - Optional: Deploy the project on Vercel/AWS/Heroku and provide the link.

## Project Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running locally or on a remote server.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Rupa-Rd/Restaurant-Management-Dashboard.git
   cd Restaurant-Management-Dashboard
   ```

2. Install dependencies for the backend:

   ```bash
   cd server
   npm install
   ```

3. Install dependencies for the frontend:

   ```bash
   cd ../client
   npm install
   ```

4. Set up MongoDB:

   - Ensure MongoDB is running locally or provide a connection string for a remote MongoDB instance.
   - The backend uses a MongoDB database, and you will need to create custom data based on the schema provided in the `models` folder of the `server` directory.

5. Configure environment variables:

   - Create a `.env` file in the `server` folder.
   - Add the MongoDB connection string and any other required variables (e.g., `PORT`).

   Example `.env` file:

   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5001
   ```

## Project Usage

### Starting the Application

1. Start the backend server:

   ```bash
   cd server
   npm start
   ```

   The backend will run on `http://localhost:5001` by default. If the local server is not found, it will fallback to the deployed server at `https://admin-dashboard-server-mssm.onrender.com`.

2. Start the frontend React application:

   ```bash
   cd ../client
   npm start
   ```

   The frontend will run on `http://localhost:3000` by default.

### Custom Data Creation

- The application requires custom data for the MongoDB database. You need to create this data based on the schema files in the `server/models` directory.
- Use a tool like MongoDB Compass or write scripts to insert sample data into the database.

### API Integration

The frontend and backend communicate using a React-based API implemented with Redux Toolkit's `@reduxjs/toolkit/query/react`. This API handles all data fetching, caching, and synchronization between the React client and the Node.js backend.

#### API Features

- Centralized state management using Redux Toolkit.
- Declarative data fetching through autogenerated hooks.
- Automatic cache management and invalidation.

#### API Configuration Example

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL || "https://admin-dashboard-server-mssm.onrender.com" }),
  reducerPath: "adminApi",
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/api/general/user/${id}`,
      providesTags: ["User"],
    }),
  }),
});

export const {
  useGetUserQuery,
  } = api;
```

#### Usage Example in React Component

```javascript
import React from "react";
import { useGetMenuQuery } from "../api";

const MenuComponent = () => {
  const { data: menuItems, error, isLoading } = useGetMenuQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading menu: {error.message}</p>;

  return (
    <ul>
      {menuItems.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default MenuComponent;
```

### Accessing the Application

- Open a web browser and navigate to `http://localhost:3000`.
- The frontend communicates with the backend server running on `http://localhost:5001`.

### Note:

I've already deployed the application, you can access here for verification: \`[https://restaurant-management-dashboard.vercel.app\`](https://restaurant-management-dashboard.vercel.app`)
