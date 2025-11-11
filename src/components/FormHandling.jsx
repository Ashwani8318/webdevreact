import { useState } from "react";
import "./FormHandling.css";

const FormHandling = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("Male");
  const [lang, setLang] = useState([]);
  const [country, setCountry] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [records, setRecords] = useState([]);

  const addLanguage = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setLang([...lang, value]);
    } else {
      setLang(lang.filter((item) => item !== value));
    }
  };

  const displayInfo = (e) => {
    e.preventDefault();
    if (!name || !email || !age || !country) {
      alert("Please fill all required fields!");
      return;
    }
    if (!confirm) {
      alert("Please confirm before submitting!");
      return;
    }
    const record = {
      id: Date.now(),
      name,
      email,
      age,
      gender,
      lang,
      country,
      confirm,
    };
    setRecords([...records, record]);
    setName("");
    setEmail("");
    setAge("");
    setGender("Male");
    setLang([]);
    setCountry("");
    setConfirm(false);
  };

  const deleteRecord = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      setRecords(records.filter(record => record.id !== id));
    }
  };

  return (
    <div className="form-handling-page">
      <div className="form-section">
        <h2 className="section-title">📝 Registration Form</h2>
        <form onSubmit={displayInfo} className="registration-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age *</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span>Male</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span>Female</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={gender === "Other"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span>Other</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Languages</label>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="Hindi"
                  checked={lang.includes("Hindi")}
                  onChange={addLanguage}
                />
                <span>Hindi</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="English"
                  checked={lang.includes("English")}
                  onChange={addLanguage}
                />
                <span>English</span>
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="French"
                  checked={lang.includes("French")}
                  onChange={addLanguage}
                />
                <span>French</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="country">Country *</label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="form-control"
              required
            >
              <option value="">Select your country</option>
              <option value="India">India</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          <div className="form-group checkbox-label-large">
            <label>
              <input
                type="checkbox"
                checked={confirm}
                onChange={(e) => setConfirm(e.target.checked)}
              />
              <span>I agree to the terms and conditions *</span>
            </label>
          </div>

          <button type="submit" className="btn btn-submit">
            ✅ Submit Registration
          </button>
        </form>
      </div>

      {records.length > 0 && (
        <div className="records-section">
          <h2 className="section-title">📊 Registered Users</h2>
          <div className="table-wrapper">
            <table className="records-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Languages</th>
                  <th>Country</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.id}>
                    <td>{record.name}</td>
                    <td>{record.email}</td>
                    <td>{record.age}</td>
                    <td>{record.gender}</td>
                    <td>{record.lang.join(", ")}</td>
                    <td>{record.country}</td>
                    <td>
                      <button
                        className="btn-delete"
                        onClick={() => deleteRecord(record.id)}
                        title="Delete record"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormHandling;
