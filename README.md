# Gourmet Haven - Restaurant Management System

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

## 🌟 Overview

Gourmet Haven is a modern, full-stack restaurant management system built with modern web technologies. This application provides customers with an intuitive interface to browse menus, place orders, and book tables, while offering restaurant owners powerful admin tools to manage their business operations.

## ✨ Key Features

### Customer Experience
- **Interactive Menu Browsing**: Browse categorized menu items with descriptions and prices
- **Shopping Cart Functionality**: Add items to cart, adjust quantities, and manage orders
- **Online Table Booking**: Reserve tables with date, time, and contact information
- **Responsive Design**: Fully mobile-friendly interface
- **Real-time Updates**: Instant booking and order confirmations

### Admin Dashboard
- **Secure Admin Authentication**: Protected admin access with login credentials
- **Menu Management**: Add, edit, and delete menu items with categories
- **Order Tracking**: Monitor and manage customer orders
- **Reservation Management**: View and manage table bookings
- **Data Insights**: Real-time analytics and reporting

## 🛠️ Technologies Used

### Frontend
- **React 18**: Modern component-based UI library
- **TypeScript**: Static type checking for enhanced code quality
- **Vite**: Next-generation build tool for faster development
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Beautiful, accessible icons
- **React Context API**: State management solution

### Backend & Database
- **Supabase**: Backend-as-a-Service providing:
  - PostgreSQL database
  - Authentication system
  - Real-time subscriptions
  - RESTful APIs
  - Edge functions (future expansion)
- **Supabase JavaScript Client**: For database interactions

### Development Tools
- **ESLint**: Code linting and quality
- **Prettier**: Code formatting
- **TypeScript Compiler**: Type checking and compilation
- **PostCSS**: CSS processing

## 🏗️ Architecture

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Browser   │───▶│   React     │───▶│ Supabase    │
│   (Client)  │    │  Frontend   │    │   (DB/API)  │
└─────────────┘    └─────────────┘    └─────────────┘
                      │
                      ▼
                ┌─────────────┐
                │   Node.js   │
                │   Runtime   │
                └─────────────┘
```

### Frontend Structure
```
src/
├── components/          # Reusable UI components
│   ├── AdminDashboard.tsx
│   ├── AdminLogin.tsx
│   ├── CustomerMenu.tsx
│   ├── MenuManagement.tsx
│   └── TableBooking.tsx
├── contexts/            # React Context providers
│   └── AuthContext.tsx
├── lib/                 # Utility functions and clients
│   └── supabase.ts
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone <your-repository-url>
cd <repository-name>
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Start the development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Environment Configuration

To connect with your Supabase project:

1. Create a Supabase project at [supabase.io](https://supabase.io)
2. Set up the required tables (see Database Schema section)
3. Get your project URL and anon key from Project Settings > API
4. Add them to your `.env` file

## 📊 Database Schema

The application uses the following tables in Supabase:

### Menu Items Table
```sql
CREATE TABLE menu_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  category VARCHAR(100) NOT NULL -- 'appetizer', 'main course', 'dessert', 'beverage'
);
```

### Admin Table
```sql
CREATE TABLE admin (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
```

### Orders Table
```sql
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  items_ordered JSONB NOT NULL, -- Array of ordered items
  total_price DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'preparing', 'ready', 'completed'
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Bookings Table
```sql
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  table_no INTEGER NOT NULL,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  contact VARCHAR(100) NOT NULL,
  status VARCHAR(50) DEFAULT 'confirmed', -- 'confirmed', 'cancelled', 'completed'
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 📝 Scripts

Available npm scripts:

- `npm run dev` - Start development server with hot-reloading
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Lint code with ESLint
- `npm run typecheck` - Run TypeScript type checking

## 🧪 Testing

Testing framework setup in progress. Future enhancements will include:

- Unit tests with Jest and React Testing Library
- Integration tests for API interactions
- End-to-end tests with Playwright

## 🔒 Security Considerations

- Authentication is handled through session storage
- Passwords are stored as plain text (should be hashed in production)
- CORS policies configured in Supabase
- Input validation on both client and server sides

## 🎨 UI/UX Features

- **Modern Design**: Clean, contemporary interface with gradient accents
- **Responsive Layout**: Mobile-first design approach
- **Smooth Animations**: Hover effects and transitions for better UX
- **Intuitive Navigation**: Easy-to-use navigation system
- **Visual Feedback**: Loading states, success messages, and error handling

## 📱 Responsive Design

The application is fully responsive and works on:
- Mobile devices (320px - 768px)
- Tablets (768px - 1024px)
- Desktops (1024px+)

## 🔧 Configuration

### Tailwind CSS
- Custom color palette with gradients (slate, blue)
- Responsive breakpoints configured
- Plugin configuration for additional utilities

### Vite Configuration
- React plugin for JSX transformation
- Optimized dependency handling
- Environment variable support

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct and the process for submitting pull requests.

### Development Guidelines

- Follow TypeScript best practices
- Write component documentation
- Ensure responsive design
- Maintain consistent UI components
- Test functionality across browsers

## 🔒 Security

Please see [SECURITY.md](SECURITY.md) for information on reporting security vulnerabilities.

## 🐛 Issues and Bugs

If you encounter any issues:

1. Check existing issues
2. Create a new issue with detailed information
3. Include steps to reproduce
4. Provide environment details

## 📈 Future Enhancements

- User registration and personal accounts
- Payment integration
- Advanced analytics dashboard
- Inventory management
- Staff management features
- Push notifications
- Multi-language support
- Advanced reporting features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Component-based UI library
- [Supabase](https://supabase.io/) - Backend-as-a-Service
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next-generation build tool
- [Lucide](https://lucide.dev/) - Beautiful icon library

## ⚙️ Project Status

- [x] Customer menu browsing
- [x] Shopping cart functionality
- [x] Online table booking
- [x] Admin authentication
- [x] Menu management
- [x] Responsive design
- [ ] Advanced admin dashboard
- [ ] Payment processing
- [ ] Real-time notifications

## 📞 Support

For support, please contact [your-email@example.com](mailto:your-email@example.com) or open an issue in the repository.

---

Made with ❤️ using React, TypeScript, and Supabase