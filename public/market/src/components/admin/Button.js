import React from 'react'

const Button = () => (
  <button
      type="button"
      className="btn btn-info"
      style={{display: 'block', margin: '0 auto'}}
      data-toggle="modal"
      data-target="#createWorkitem"
    >
      Create Work Item
    </button>
)

export default Button;
