import React, { useState } from "react";

function CategoryList() {
  // Kategorileri saklamak için bir state oluşturun
  const [categories, setCategories] = useState([]);
  // Yeni kategori adını saklamak için bir state oluşturun
  const [newCategoryName, setNewCategoryName] = useState("");

  // Yeni kategori eklemek için bir işlev tanımlayın
  const addCategory = () => {
    if (newCategoryName.trim() === "") {
      return; // Boş bir kategori eklemeyi engelleyin
    }

    const newCategory = {
      id: Date.now(),
      name: newCategoryName,
    };

    // Kategoriyi kategori listesine ekleyin
    setCategories([...categories, newCategory]);

    // Kategori adını sıfırlayın
    setNewCategoryName("");
  };

  // Kategori silme işlevi
  const removeCategory = (categoryId) => {
    const updatedCategories = categories.filter(
      (category) => category.id !== categoryId
    );
    setCategories(updatedCategories);
  };

  return (
    <div className="category-list">
      <h2>Kategoriler</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
            <button onClick={() => removeCategory(category.id)}>Kaldır</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Yeni Kategori Ekle"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <button onClick={addCategory}>Ekle</button>
      </div>
    </div>
  );
}

export default CategoryList;
