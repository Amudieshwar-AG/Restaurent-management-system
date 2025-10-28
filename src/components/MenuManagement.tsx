import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export const MenuManagement: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'appetizer',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    const { data } = await supabase
      .from('menu_items')
      .select('*')
      .order('category', { ascending: true });
    if (data) setMenuItems(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.price) {
      setMessage('Please fill in all required fields');
      return;
    }

    try {
      if (editingItem) {
        await supabase
          .from('menu_items')
          .update({
            name: formData.name,
            description: formData.description,
            price: parseFloat(formData.price),
            category: formData.category,
          })
          .eq('id', editingItem.id);
        setMessage('Dish updated successfully!');
      } else {
        await supabase
          .from('menu_items')
          .insert([{
            name: formData.name,
            description: formData.description,
            price: parseFloat(formData.price),
            category: formData.category,
          }]);
        setMessage('Dish added successfully!');
      }

      setFormData({ name: '', description: '', price: '', category: 'appetizer' });
      setEditingItem(null);
      setShowModal(false);
      fetchMenuItems();

      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Error saving dish');
    }
  };

  const handleEdit = (item: MenuItem) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      description: item.description,
      price: item.price.toString(),
      category: item.category,
    });
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this dish?')) {
      await supabase.from('menu_items').delete().eq('id', id);
      setMessage('Dish deleted successfully!');
      fetchMenuItems();
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingItem(null);
    setFormData({ name: '', description: '', price: '', category: 'appetizer' });
  };

  const categories = ['appetizer', 'main course', 'dessert', 'beverage'];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Menu Management</h2>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-500 to-blue-600 text-white rounded-lg hover:from-slate-600 hover:to-blue-700 transition"
        >
          <Plus className="w-5 h-5" />
          Add Dish
        </button>
      </div>

      {message && (
        <div className="mb-4 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg">
          {message}
        </div>
      )}

      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h3 className="text-xl font-semibold text-slate-700 mb-4 capitalize">{category}s</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-lg text-slate-800">{item.name}</h4>
                    <span className="text-xl font-bold text-blue-600">₹{Number(item.price).toFixed(2)}</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-slate-800">
                {editingItem ? 'Edit Dish' : 'Add New Dish'}
              </h3>
              <button onClick={closeModal} className="text-slate-500 hover:text-slate-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Price (₹)</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-slate-500 to-blue-600 text-white rounded-lg hover:from-slate-600 hover:to-blue-700 transition"
                >
                  {editingItem ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
