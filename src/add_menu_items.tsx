import { supabase } from './lib/supabase';

// Function to add South Indian breakfast items
export const addSouthIndianBreakfastItems = async () => {
  const breakfastItems = [
    { name: 'Idli Sambar', description: 'Soft steamed rice cakes served with spicy sambar and coconut chutney', price: 85.00, category: 'breakfast' },
    { name: 'Masala Dosa', description: 'Crispy fermented crepe filled with spiced potatoes, served with sambar and chutney', price: 120.00, category: 'breakfast' },
    { name: 'Rava Dosa', description: 'Semolina-based dosa with crispy texture, served with sambar and chutney', price: 110.00, category: 'breakfast' },
    { name: 'Pongal', description: 'Creamy rice and lentil porridge seasoned with black pepper, cumin and ghee', price: 95.00, category: 'breakfast' },
    { name: 'Upma', description: 'Coarsely ground semolina cooked with vegetables and spices', price: 80.00, category: 'breakfast' },
    { name: 'Ragi Uttapam', description: 'Thick fermented pancake made from finger millet flour topped with vegetables', price: 100.00, category: 'breakfast' },
    { name: 'Vada Sambar', description: 'Deep-fried savoury donut made from urad dal, served with sambar', price: 75.00, category: 'breakfast' },
    { name: 'Pesarattu', description: 'Green gram dosa from Andhra Pradesh, topped with ginger and served with upma', price: 115.00, category: 'breakfast' },
    { name: 'Aloo Paratha', description: 'Whole wheat flatbread stuffed with spiced mashed potatoes', price: 90.00, category: 'breakfast' },
    { name: 'Tomato Uttapam', description: 'Fermented rice and lentil pancake topped with tomatoes and spices', price: 105.00, category: 'breakfast' }
  ];

  for (const item of breakfastItems) {
    const { error } = await supabase
      .from('menu_items')
      .insert([item]);
    
    if (error) {
      console.error('Error adding breakfast item:', error);
    } else {
      console.log(`Added breakfast item: ${item.name}`);
    }
  }
};

// Function to add South Indian lunch items
export const addSouthIndianLunchItems = async () => {
  const lunchItems = [
    { name: 'South Indian Thali', description: 'Traditional meal with rice, sambar, rasam, dal, curry, pickle, papadum and buttermilk', price: 250.00, category: 'lunch' },
    { name: 'Fish Curry with Rice', description: 'Spicy fish curry in coconut milk, served with steamed rice', price: 220.00, category: 'lunch' },
    { name: 'Chicken Chettinad', description: 'Spicy chicken curry with traditional Chettinad masala, served with rice', price: 240.00, category: 'lunch' },
    { name: 'Sambar Rice', description: 'Tangy lentil curry with vegetables, served with steamed rice', price: 150.00, category: 'lunch' },
    { name: 'Rasam Rice', description: 'Tangy tamarind soup with spices, served with steamed rice', price: 120.00, category: 'lunch' },
    { name: 'Curd Rice', description: 'Steamed rice mixed with yogurt, tempered with mustard seeds and curry leaves', price: 100.00, category: 'lunch' },
    { name: 'Vegetable Biryani', description: 'Fragrant basmati rice cooked with mixed vegetables and authentic spices', price: 180.00, category: 'lunch' },
    { name: 'Avial', description: 'Mixed vegetables cooked in coconut and yogurt curry, served with rice', price: 160.00, category: 'lunch' },
    { name: 'Kaara Kurma', description: 'Spicy coconut-based curry with vegetables or chicken, served with rice', price: 190.00, category: 'lunch' },
    { name: 'Meen Curry', description: 'Traditional Kerala fish curry with coconut milk and tamarind', price: 210.00, category: 'lunch' }
  ];

  for (const item of lunchItems) {
    const { error } = await supabase
      .from('menu_items')
      .insert([item]);
    
    if (error) {
      console.error('Error adding lunch item:', error);
    } else {
      console.log(`Added lunch item: ${item.name}`);
    }
  }
};

// Function to add South Indian snack items
export const addSouthIndianSnackItems = async () => {
  const snackItems = [
    { name: 'Bonda', description: 'Deep-fried savoury balls made with urad dal and spices', price: 70.00, category: 'snack' },
    { name: 'Medu Vada', description: 'Savory lentil donuts served with sambar and coconut chutney', price: 60.00, category: 'snack' },
    { name: 'Bisi Bele Bath', description: 'Hot rice dish made with rice, toor dal, vegetables and special spice blend', price: 130.00, category: 'snack' },
    { name: 'Ragi Mudde', description: 'Finger millet balls traditionally served with sambar or curry', price: 110.00, category: 'snack' },
    { name: 'Paniyaram', description: 'Savory dumplings made from fermented rice and dal batter, cooked in special pan', price: 90.00, category: 'snack' },
    { name: 'Kothimbir Vadi', description: 'Coriander leaves and gram flour fritters seasoned with spices', price: 85.00, category: 'snack' },
    { name: 'Idiyappam with Egg Curry', description: 'Rice noodles served with spicy egg curry', price: 140.00, category: 'snack' },
    { name: 'Appam with Stew', description: 'Lacey fermented rice pancake served with coconut milk stew', price: 160.00, category: 'snack' },
    { name: 'Kanji', description: 'Rice gruel with mustard seeds, curry leaves and vegetables or fish', price: 100.00, category: 'snack' },
    { name: 'Murukku', description: 'Crispy savoury snack made from rice and urad dal flour', price: 50.00, category: 'snack' }
  ];

  for (const item of snackItems) {
    const { error } = await supabase
      .from('menu_items')
      .insert([item]);
    
    if (error) {
      console.error('Error adding snack item:', error);
    } else {
      console.log(`Added snack item: ${item.name}`);
    }
  }
};

// Function to add South Indian dinner items
export const addSouthIndianDinnerItems = async () => {
  const dinnerItems = [
    { name: 'Rava Kesari', description: 'Sweet semolina dessert cooked with ghee, sugar and nuts', price: 90.00, category: 'dinner' },
    { name: 'Pulihora', description: 'Tangy turmeric rice mixed with peanuts, curry leaves and spices', price: 120.00, category: 'dinner' },
    { name: 'Neer Dosa', description: 'Soft, thin rice crepes served with coconut chutney and sambar', price: 110.00, category: 'dinner' },
    { name: 'Kerala Sadya', description: 'Traditional feast on banana leaf with rice, sambar, rasam, avial, curry, pickle, papadum, mor kuzhambu and payasam', price: 300.00, category: 'dinner' },
    { name: 'Mangalore Biryani', description: 'Fragrant rice with spices, meat or vegetables, served with raita', price: 230.00, category: 'dinner' },
    { name: 'Parotta with Beef Curry', description: 'Layered flatbread served with spicy beef curry', price: 200.00, category: 'dinner' },
    { name: 'Kori Rotti', description: 'Mangalorean spicy chicken curry with crispy rice wafers', price: 180.00, category: 'dinner' },
    { name: 'Hyderabadi Biryani', description: 'Fragrant long-grain rice layered with marinated meat and aromatic spices', price: 240.00, category: 'dinner' },
    { name: 'Pesarattu Dose', description: 'Moong dal crepes served with upma or sambar', price: 150.00, category: 'dinner' },
    { name: 'Tiffin Special Combo', description: 'Combination of idli, vada, dosa, upma with sambar and chutneys', price: 190.00, category: 'dinner' }
  ];

  for (const item of dinnerItems) {
    const { error } = await supabase
      .from('menu_items')
      .insert([item]);
    
    if (error) {
      console.error('Error adding dinner item:', error);
    } else {
      console.log(`Added dinner item: ${item.name}`);
    }
  }
};

// Function to add all South Indian menu items
export const addAllSouthIndianItems = async () => {
  console.log('Adding South Indian breakfast items...');
  await addSouthIndianBreakfastItems();
  
  console.log('Adding South Indian lunch items...');
  await addSouthIndianLunchItems();
  
  console.log('Adding South Indian snack items...');
  await addSouthIndianSnackItems();
  
  console.log('Adding South Indian dinner items...');
  await addSouthIndianDinnerItems();
  
  console.log('All South Indian menu items added successfully!');
};