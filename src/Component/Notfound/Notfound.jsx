import React, { Component } from 'react'

export default class Notfound extends Component {
  render() {
    return (
      <div>
        <div className="container p-5 vh-100">
          <h1 className="fs-1 fw-bolder p-4">Page Not Found</h1>
          <p className="fs-4 text-white text-opacity-50 p-4" >We couldn't find what you were looking for.</p>
        </div>
      </div>
    )
  }
}
