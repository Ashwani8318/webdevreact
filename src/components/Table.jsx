import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./Table.css"

const Table = (props) => {
  const urlParams = useParams();
  const navigate = useNavigate();
  let { n } = props;
  n = n ? n : parseInt(urlParams.num);
  
  if (!Number.isInteger(n)) {
    return (
      <div className='table-error-container'>
        <div className='error-card'>
          <h2>⚠️ Invalid Input</h2>
          <p>Please provide a valid number value to display the multiplication table.</p>
          <button className='btn btn-primary' onClick={() => navigate(-1)}>
            ← Go Back
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div className='table-container'>
        <div className='table-card'>
          <h2 className='table-title'>📊 Multiplication Table of {n}</h2>
          <div className='table-results'>
            {Array.from({ length: 10 }, (_, index) => (
              <div key={index + 1} className='table-row'>
                <span className='table-operation'>{n} × {index + 1}</span>
                <span className='table-equals'>=</span>
                <span className='table-result'>{n * (index + 1)}</span>
              </div>
            ))}
          </div>
          <button className='btn btn-primary' onClick={() => navigate(-1)}>
            ← Go Back
          </button>
        </div>
      </div>
    )
  }
}

export default Table


