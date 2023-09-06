import React, { useState } from "react";

function TaskList() {
  // Görevleri saklamak için bir state oluşturun
  const [tasks, setTasks] = useState([]);
  // Yeni görev adını saklamak için bir state oluşturun
  const [newTaskName, setNewTaskName] = useState("");

  // Yeni görev eklemek için bir işlev tanımlayın
  const addTask = () => {
    if (newTaskName.trim() === "") {
      return; // Boş bir görev eklemeyi engelleyin
    }

    const newTask = {
      id: Date.now(),
      name: newTaskName,
    };

    // Görevi görev listesine ekleyin
    setTasks([...tasks, newTask]);

    // Görev adını sıfırlayın
    setNewTaskName("");
  };

  // Görev silme işlevi
  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      <h2>Görevler</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => removeTask(task.id)}>Kaldır</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Yeni Görev Ekle"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button onClick={addTask}>Ekle</button>
      </div>
    </div>
  );
}

export default TaskList;
