import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Calendar, Clock, User, Phone, Check } from 'lucide-react';

export const TableBooking: React.FC = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    tableNo: '1',
    date: '',
    time: '',
    contact: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!formData.customerName.trim() || !formData.date || !formData.time || !formData.contact) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const bookingData = {
        customer_name: formData.customerName.trim(),
        table_no: parseInt(formData.tableNo),
        booking_date: formData.date,
        booking_time: formData.time,
        contact: formData.contact,
        status: 'confirmed',
      };

      const { error } = await supabase.from('bookings').insert([bookingData]);

      if (error) {
        console.error('Error making reservation:', error);
        setError('Error making reservation: ' + error.message);
        return;
      }

      setSuccess(true);
      setFormData({
        customerName: '',
        tableNo: '1',
        date: '',
        time: '',
        contact: '',
      });

      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      console.error('Error making reservation:', err);
      setError('Error making reservation: ' + (err.message || 'Unknown error'));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-400 to-blue-500 rounded-full mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Table Booking
            </h1>
            <p className="text-slate-600">Reserve your table at Hotel Royal Paradise for a memorable dining experience</p>
          </div>

          {success && (
            <div className="mb-6 bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg flex items-center gap-3">
              <Check className="w-6 h-6" />
              <div>
                <p className="font-semibold">Booking confirmed!</p>
                <p className="text-sm">We look forward to serving you.</p>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-6 bg-red-100 border border-red-300 text-red-700 p-4 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Contact Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="tel"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="Enter your contact number"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Table Number</label>
              <select
                value={formData.tableNo}
                onChange={(e) => setFormData({ ...formData, tableNo: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                required
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    Table {num}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-slate-500 to-blue-600 text-white rounded-lg font-semibold hover:from-slate-600 hover:to-blue-700 transition transform hover:scale-105"
            >
              Confirm Booking
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-slate-600">
            <p>For any inquiries, please call us at (+91) 98765 43210</p>
          </div>
        </div>
      </div>
    </div>
  );
};
};
