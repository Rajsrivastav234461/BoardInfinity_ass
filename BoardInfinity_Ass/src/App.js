import { useState, useEffect } from 'react';
import { ChevronDownIcon, CalendarIcon, PlusIcon, XIcon } from 'lucide-react';
import './App.css';  
import { db } from './firebase'; 
import { collection, addDoc, getDocs } from 'firebase/firestore';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    date: '',
    status: 'TODO',
  });

  // Fetch tasks from Firestore on initial render
  useEffect(() => {
    const fetchTasks = async () => {
      const querySnapshot = await getDocs(collection(db, 'tasks'));
      const fetchedTasks = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(fetchedTasks);
    };
    fetchTasks();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateTask = async () => {
    if (newTask.title && newTask.date) {
      const taskToAdd = {
        ...newTask,
        createdAt: new Date().toISOString(),
      };
      try {
        // Add the task to Firestore
        const docRef = await addDoc(collection(db, 'tasks'), taskToAdd);

        // Add the task to local state
        setTasks((prev) => [...prev, { ...taskToAdd, id: docRef.id }]);

        // Close the modal and reset the form
        setIsModalOpen(false);
        setNewTask({
          title: '',
          description: '',
          priority: 'Medium',
          date: '',
          status: 'TODO',
        });
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  };

  const changeStatus = (taskId, newStatus) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Desktop & Mobile Application</h1>
        <button onClick={() => setIsModalOpen(true)} className="create-btn">
          Create Task
        </button>
      </div>
      
      <div className="task-columns">
        {['TODO', 'IN PROGRESS', 'COMPLETED'].map(status => (
          <div key={status} className="task-column">
            <div className={`task-column-header ${status.toLowerCase()}`}>
              {status}
            </div>
            <div className="task-list">
              {tasks.filter(task => task.status === status).map(task => (
                <div key={task.id} className="task-card">
                  <div className="task-card-header">
                    <span className={`priority ${task.priority.toLowerCase()}`}>
                      {task.priority}
                    </span>
                    <div className="dropdown">
                      <button className="dropdown-button">
                        <ChevronDownIcon className="icon" />
                      </button>
                      <div className="dropdown-menu">
                        {['TODO', 'IN PROGRESS', 'COMPLETED'].map(newStatus => (
                          <button
                            key={newStatus}
                            onClick={() => changeStatus(task.id, newStatus)}
                            className="dropdown-item"
                          >
                            {newStatus}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <div className="task-date">
                    <CalendarIcon className="icon" />
                    <span>{task.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>
                <PlusIcon className="icon" />
                Create New Task
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="close-btn">
                <XIcon className="icon" />
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Title *</label>
                <input
                  type="text"
                  name="title"
                  value={newTask.title}
                  onChange={handleInputChange}
                  placeholder="Enter task title"
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={newTask.description}
                  onChange={handleInputChange}
                  placeholder="Enter task description"
                />
              </div>
              <div className="form-group">
                <label>Select Date *</label>
                <input
                  type="date"
                  name="date"
                  value={newTask.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select name="status" value={newTask.status} onChange={handleInputChange}>
                  <option value="TODO">TODO</option>
                  <option value="IN PROGRESS">IN PROGRESS</option>
                  <option value="COMPLETED">COMPLETED</option>
                </select>
              </div>
              <div className="form-group">
                <label>Priority</label>
                <select name="priority" value={newTask.priority} onChange={handleInputChange}>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
              <div className="form-actions">
                <button onClick={() => setIsModalOpen(false)} className="cancel-btn">
                  Cancel
                </button>
                <button onClick={handleCreateTask} className="create-task-btn">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
