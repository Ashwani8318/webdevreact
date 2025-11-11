import "./Counter.css"

const Counter = (props) => {
  let { count = 0, onIncrement, onDecrement } = props
  
  const countStyle = () => {
    if (count <= 0) {
      return { color: "#ef4444" }
    } else if (count > 0 && count <= 5) {
      return { color: "#f59e0b" }
    } else {
      return { color: "#10b981" }
    }
  }

  return (
    <div className='counter-container'>
      <div className='counter-card'>
        <h2 className='counter-title'>🔢 Counter Application</h2>
        
        <div className='counter-display'>
          <p style={countStyle()} className='counter-value'>{count}</p>
          <p className='counter-label'>
            {count === 0 ? 'Zero' : count > 0 ? 'Positive' : 'Negative'}
          </p>
        </div>

        <div className='button-container'>
          <button
            className='btn btn-decrement'
            onClick={onDecrement}
            title="Decrease counter"
          >
            ➖ Decrease
          </button>
          <button
            className='btn btn-increment'
            onClick={onIncrement}
            title="Increase counter"
          >
            ➕ Increase
          </button>
        </div>

        <div className='counter-info'>
          <p>Current value: <strong>{count}</strong></p>
        </div>
      </div>
    </div>
  )
}

export default Counter