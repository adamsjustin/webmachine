import React from 'react'

const Create = ({ modalHandler }) => (
  <button
      onClick={() => modalHandler('create')}
      type="button"
      className="btn btn-primary"
      style={{display: 'block', margin: '0 auto'}}
      data-toggle="modal"
      data-target="#createWorkitem"
    >
      Create Workitem
    </button>
)

export default Create;
