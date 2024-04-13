import React from 'react'

function Alert() {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
  Successfully Enabled <strong>Dark Mode</strong>
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Alert