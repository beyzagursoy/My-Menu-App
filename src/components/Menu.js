import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('https://northwind.vercel.app/api/products');
        const data = response.data;

        
        setMenuItems(data.slice(0, 5)); 
      } catch (error) {
        console.error('Veri alınamadı:', error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <div className="w3-row w3-padding-64" id="menu">
      <div className="w3-col l6 w3-padding-large">
        <h1 className="w3-center">Our Menu</h1>
        {menuItems.map((menuItem, index) => (
          <div key={index}>
            <h4>{menuItem.Name}</h4>
            <p className="w3-text-grey">{`${menuItem.QuantityPerUnit} - $${menuItem.UnitPrice.toFixed(2)}`}</p>
            <br />
          </div>
        ))}
      </div>

      <div className="w3-col l6 w3-padding-large">
        
      </div>
    </div>
  );
}

export default Menu;



