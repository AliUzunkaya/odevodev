import React, { useState } from "react";
import CategoryList from "./components/CategoryList";
import TaskList from "./components/TaskList";
import { categories, tasks } from "./data"; // data.js'den verileri içe aktar

function App() {
  // Kategorileri ve görevleri state olarak tanımlayın
  const [categoryList, setCategoryList] = useState(categories);
  const [taskList, setTaskList] = useState(tasks);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Kategori ekleme işlevi
  const addCategory = (name) => {
    if (name.trim() === "") return;
    const newCategory = {
      id: Date.now(),
      name,
    };
    setCategoryList([...categoryList, newCategory]);
  };

  // Kategori silme işlevi
  const removeCategory = (categoryId) => {
    const updatedCategories = categoryList.filter(
      (category) => category.id !== categoryId
    );
    setCategoryList(updatedCategories);
  };

  // Seçili kategoriyi güncelleme işlevi
  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  // Görev ekleme işlevi
  const addTask = (name) => {
    if (name.trim() === "") return;
    const newTask = {
      id: Date.now(),
      name,
      categoryId: selectedCategory.id,
    };
    setTaskList([...taskList, newTask]);
  };

  // Görev silme işlevi
  const removeTask = (taskId) => {
    const updatedTasks = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTasks);
  };

  return (
    <div className="app">
      <CategoryList
        categories={categoryList}
        onAddCategory={addCategory}
        onRemoveCategory={removeCategory}
        onSelectCategory={selectCategory}
      />
      <TaskList
        tasks={
          selectedCategory
            ? taskList.filter((task) => task.categoryId === selectedCategory.id)
            : []
        }
        onAddTask={addTask}
        onRemoveTask={removeTask}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;
