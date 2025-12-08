# Vehicle Rental System Backend API

## Project Overview
- Backend API for managing a vehicle rental system.
- Manage vehicles, customers, and bookings.
- Secure authentication with Admin and Customer roles.

## Technology Stack
- Node.js + TypeScript
- Express.js
- PostgreSQL
- bcrypt for password hashing
- jsonwebtoken (JWT) for authentication

## Code Structure
- `controllers/` → Handle requests
- `services/` → Business logic
- `routes/` → API endpoints
- `middlewares/` → Auth, validation, error handling
- `models/` → Database queries
- `utils/` → Helper functions
- `index.ts` → App entry point

## Database Tables

### Users
- id → Auto-generated
- name → Required
- email → Required, unique, lowercase
- password → Required, min 6 characters
- phone → Required
- role → 'admin' or 'customer'

### Vehicles
- id → Auto-generated
- vehicle_name → Required
- type → 'car', 'bike', 'van', 'SUV'
- registration_number → Required, unique
- daily_rent_price → Required, positive
- availability_status → 'available' or 'booked'

### Bookings
- id → Auto-generated
- customer_id → Links to Users table
- vehicle_id → Links to Vehicles table
- rent_start_date → Required
- rent_end_date → Required, must be after start date
- total_price → Required, positive
- status → 'active', 'cancelled', 'returned'

## Authentication & Authorization
- Admin → Full access to manage everything
- Customer → Can register, view vehicles, manage own bookings
- Passwords hashed with bcrypt
- Login via `/api/v1/auth/signin` → Get JWT token
- Protected routes require `Authorization: Bearer <token>`

## API Endpoints

### Authentication
- POST `/api/v1/auth/signup` → Register new user
- POST `/api/v1/auth/signin` → Login and get token

### Vehicles
- POST `/api/v1/vehicles` → Admin only, add new vehicle
- GET `/api/v1/vehicles` → Public, view all vehicles
- GET `/api/v1/vehicles/:vehicleId` → Public, view single vehicle
- PUT `/api/v1/vehicles/:vehicleId` → Admin only, update vehicle
- DELETE `/api/v1/vehicles/:vehicleId` → Admin only, delete vehicle if no active bookings

### Users
- GET `/api/v1/users` → Admin only, view all users
- PUT `/api/v1/users/:userId` → Admin or Own, update user
- DELETE `/api/v1/users/:userId` → Admin only, delete user if no active bookings

### Bookings
- POST `/api/v1/bookings` → Customer/Admin, create booking
- GET `/api/v1/bookings` → Role-based, admin sees all, customer sees own
- PUT `/api/v1/bookings/:bookingId` → Customer cancel (before start date), Admin mark returned, system auto-mark returned

## Notes
- Follow modular code structure.
- Validate all requests.
- Return consistent JSON responses.
- Handle errors with proper HTTP status codes.
