// src/components/CreateItem.js
import React, { useState } from 'react';
import { db } from '../firebaseConfig/firebase';

const Create = () => {
    const [itemProducts, setItemProducts] = useState('');

    const addItem = () => {
        db.ref('Products').push({
        text: itemText
        });
        setItemProducts('');
    };

    return (
        <div>
        <input
            type="string"
            value={itemProducts}
            onChange={(e) => setItemText(e.target.value)}
        />
        <button onClick={addItem}>Add Product</button>
        </div>
    );
};

export default Create;
