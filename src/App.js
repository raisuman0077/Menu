import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ... new Set (items.map((item)=>item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems =(category)=>{
    if(category ==='all'){
      setMenuItems(items);
      return;
    }
    const newItem = items.filter((item)=>item.category=== category)
    setMenuItems(newItem);
  }
  return <>
    <div className='main section'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'>
        
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </div>
    </div>
  </>;
}

export default App;
