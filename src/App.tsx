import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { CustomerMenu } from './components/CustomerMenu';
import { TableBooking } from './components/TableBooking';
import { UtensilsCrossed, ShoppingBag, Calendar, Shield, Home } from 'lucide-react';

type Page = 'home' | 'menu' | 'booking' | 'admin';

function AppContent() {
  const { isAdmin } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>('home');

  if (isAdmin) {
    return <AdminDashboard />;
  }

  if (currentPage === 'admin') {
    return <AdminLogin onLoginSuccess={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <nav className="bg-white shadow-lg border-b-4 border-blue-500 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <UtensilsCrossed className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
                Hotel Royal Paradise
              </h1>
            </div>
            <div className="flex gap-2 md:gap-4">
              <button
                onClick={() => setCurrentPage('home')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-semibold transition ${
                  currentPage === 'home'
                    ? 'bg-gradient-to-r from-slate-500 to-blue-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </button>
              <button
                onClick={() => setCurrentPage('menu')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-semibold transition ${
                  currentPage === 'menu'
                    ? 'bg-gradient-to-r from-slate-500 to-blue-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Menu</span>
              </button>
              <button
                onClick={() => setCurrentPage('booking')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-semibold transition ${
                  currentPage === 'booking'
                    ? 'bg-gradient-to-r from-slate-500 to-blue-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">Book</span>
              </button>
              <button
                onClick={() => setCurrentPage('admin')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-semibold transition ${
                  currentPage === 'admin'
                    ? 'bg-gradient-to-r from-slate-500 to-blue-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span className="hidden sm:inline">Admin</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {currentPage === 'home' && (
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Welcome to Hotel Royal Paradise
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto">
              Experience authentic flavors with our exquisite South Indian menu and royal service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('menu')}
                className="px-8 py-4 bg-gradient-to-r from-slate-500 to-blue-600 text-white rounded-xl font-semibold hover:from-slate-600 hover:to-blue-700 transition transform hover:scale-105 shadow-lg"
              >
                View Menu
              </button>
              <button
                onClick={() => setCurrentPage('booking')}
                className="px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold hover:bg-slate-100 transition transform hover:scale-105 shadow-lg border-2 border-slate-300"
              >
                Book a Table
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-400 to-blue-500 rounded-full mb-4">
                <UtensilsCrossed className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Fresh Ingredients</h3>
              <p className="text-slate-600">
                We source the finest ingredients to create unforgettable dishes
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-400 to-blue-500 rounded-full mb-4">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Easy Ordering</h3>
              <p className="text-slate-600">
                Browse our menu and place orders with just a few clicks
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-400 to-blue-500 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Table Reservations</h3>
              <p className="text-slate-600">
                Reserve your favorite table for a perfect dining experience
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">Our Royal Heritage</h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-4">
              At Hotel Royal Paradise, we believe that dining is not just about food, but about experiencing the rich 
              heritage of South Indian cuisine. Our talented chefs combine traditional techniques with modern innovation 
              to bring you authentic dishes that delight all your senses.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              Whether you're joining us for a traditional breakfast, elaborate lunch, or royal dinner, we're committed
              to providing exceptional service in an elegant yet comfortable atmosphere that reflects our royal heritage.
            </p>
          </div>
        </div>
      )}

      {currentPage === 'menu' && <CustomerMenu />}
      {currentPage === 'booking' && <TableBooking />}

      <footer className="bg-slate-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-slate-300">123 Paradise Avenue</p>
              <p className="text-slate-300">Royal City, RC 54321</p>
              <p className="text-slate-300">Phone: (+91) 98765 43210</p>
              <p className="text-slate-300">Email: info@hotelroyalparadise.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <p className="text-slate-300">Monday - Thursday: 11:00 AM - 10:00 PM</p>
              <p className="text-slate-300">Friday - Saturday: 11:00 AM - 11:00 PM</p>
              <p className="text-slate-300">Sunday: 10:00 AM - 9:00 PM</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-slate-300 hover:text-white transition">Facebook</a>
                <a href="#" className="text-slate-300 hover:text-white transition">Instagram</a>
                <a href="#" className="text-slate-300 hover:text-white transition">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Hotel Royal Paradise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
