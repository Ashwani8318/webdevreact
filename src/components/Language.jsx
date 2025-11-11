import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import "./Language.css"

const Language = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [query, setQuery] = useState("");
  
  const addQuery = () => {
    if (query.trim()) {
      setSearchParam({ info: query.toLowerCase() })
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addQuery();
    }
  }

  const languages = ['Java', 'Python', 'React', 'JavaScript', 'TypeScript']

  return (
    <div className="language-page">
      <div className="search-section">
        <h2 className="page-title">🔍 Programming Language Guide</h2>
        
        <div className="search-container">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search for a programming language..."
            className="search-input"
          />
          <button className='btn btn-search' onClick={addQuery}>
            🔎 Search
          </button>
        </div>

        <div className="suggested-languages">
          <p className="suggestions-label">Popular Languages:</p>
          <div className="language-chips">
            {languages.map((lang) => (
              <button
                key={lang}
                className="language-chip"
                onClick={() => {
                  setQuery(lang);
                  setSearchParam({ info: lang.toLowerCase() })
                }}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>

      <SearchData info={searchParam.get("info")} />
    </div>
  )
}

const SearchData = (props) => {
  const { info } = props;

  const languageData = {
    java: {
      name: "☕ Java",
      description: "A powerful, widely-used programming language known for its platform independence and strong OOP principles.",
      features: ["Object-Oriented", "Platform Independent", "Strongly Typed", "Multithreading", "Garbage Collection"],
      uses: ["Enterprise Applications", "Android Development", "Web Services", "Big Data Processing"]
    },
    python: {
      name: "🐍 Python",
      description: "A versatile, easy-to-learn language perfect for beginners and advanced users alike.",
      features: ["Simple Syntax", "Interpreted Language", "Dynamic Typing", "Rich Libraries", "Cross-platform"],
      uses: ["Data Science", "Machine Learning", "Web Development", "Automation", "Scientific Computing"]
    },
    react: {
      name: "⚛️ React",
      description: "A modern JavaScript library for building user interfaces with reusable components.",
      features: ["Component-Based", "Virtual DOM", "JSX Syntax", "One-way Data Binding", "Hot Reloading"],
      uses: ["Single Page Applications", "Progressive Web Apps", "Mobile Apps (React Native)", "Interactive UIs"]
    },
    javascript: {
      name: "🟨 JavaScript",
      description: "The language of the web, enabling interactive and dynamic web pages.",
      features: ["Event-Driven", "Prototype-Based", "Functional Programming", "Asynchronous", "DOM Manipulation"],
      uses: ["Web Development", "Frontend Development", "Backend (Node.js)", "Mobile Development"]
    },
    typescript: {
      name: "📘 TypeScript",
      description: "A superset of JavaScript that adds static typing and other features.",
      features: ["Static Typing", "Interfaces", "Classes", "Type Checking", "Better IDE Support"],
      uses: ["Large-Scale Applications", "Enterprise Projects", "Angular Development", "Type-Safe Code"]
    }
  };

  const data = languageData[info];

  if (!data) {
    return (
      <div className="result-section">
        <div className="no-result">
          <p className="no-result-emoji">❓</p>
          <p className="no-result-text">No results found. Please search for Java, Python, React, JavaScript, or TypeScript!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="result-section">
      <div className="result-card">
        <h2 className="result-title">{data.name}</h2>
        <p className="result-description">{data.description}</p>

        <div className="features-section">
          <h3>✨ Key Features</h3>
          <ul className="features-list">
            {data.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="uses-section">
          <h3>🎯 Common Uses</h3>
          <ul className="uses-list">
            {data.uses.map((use, index) => (
              <li key={index}>{use}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Language