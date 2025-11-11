import React, { useEffect, useState } from 'react'
import "./HomePage.css"

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: ""
  });
  const [loading, setLoading] = useState(false);

  const addForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const addUser = () => {
    if (!formData.id || !formData.name || !formData.email) {
      alert("Please fill all fields!");
      return;
    }
    setLoading(true);
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).
      then(response => response.json()).
      then(data => {
        alert("User added successfully!");
        setFormData({ id: "", name: "", email: "" });
        setLoading(false);
      }).
      catch(error => {
        console.log(error);
        setLoading(false);
      });
  }

  const updateUser = () => {
    if (!formData.id || !formData.name || !formData.email) {
      alert("Please fill all fields!");
      return;
    }
    setLoading(true);
    fetch(`http://localhost:5000/users/${formData.id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).
      then(response => response.json()).
      then(() => {
        alert("User updated successfully!");
        setFormData({ id: "", name: "", email: "" });
        setLoading(false);
      }).
      catch(error => {
        console.log(error);
        setLoading(false);
      });
  }

  const deleteUser = (id) => {
    if (window.confirm("Are you sure?")) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      }).then(() => {
        setUsers(users.filter(u => u.id !== id));
        alert("User deleted successfully!");
      }).catch(error => console.log(error));
    }
  }

  useEffect(() => {
    fetch("http://localhost:5000/users").
      then(response => response.json()).
      then(data => setUsers(Array.isArray(data) ? data : [])).
      catch(error => console.log(error));
  }, []);

  return (
    <div className='home-page'>
      <div className='form-container'>
        <h2 className='form-title'>👥 User Management</h2>
        <div className='form-card'>
          <form className='user-form'>
            <div className='form-group'>
              <label>User ID</label>
              <input
                type="text"
                value={formData.id}
                name="id"
                onChange={addForm}
                placeholder='Enter ID'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <label>Name</label>
              <input
                type="text"
                value={formData.name}
                name="name"
                onChange={addForm}
                placeholder='Enter full name'
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <label>Email</label>
              <input
                type="email"
                value={formData.email}
                name="email"
                onChange={addForm}
                placeholder='Enter email address'
                className='form-control'
              />
            </div>
            <div className='button-group'>
              <button
                type='button'
                className='btn btn-primary'
                onClick={addUser}
                disabled={loading}
              >
                {loading ? 'Loading...' : '➕ Add User'}
              </button>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={updateUser}
                disabled={loading}
              >
                {loading ? 'Loading...' : '✏️ Update User'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className='users-container'>
        <h2 className='users-title'>📋 Users List</h2>
        {users.length === 0 ? (
          <div className='no-users'>
            <p>No users found. Add a new user to get started!</p>
          </div>
        ) : (
          <div className='table-wrapper'>
            <table className='users-table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        className='btn-delete'
                        onClick={() => deleteUser(user.id)}
                        title="Delete user"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage