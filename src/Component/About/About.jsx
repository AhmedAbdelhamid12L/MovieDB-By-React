import React from 'react'

export default function About() {
  return (
    <div>
      <div className='d-flex flex-column vh-100 justify-content-between'>
        <div>
          <h1 className='text-center'>About</h1>
          <p  className='text-center text-muted h5'>Movies Data Base </p>
          <p className='text-center text-muted h5'>Full FrontEnd Project Using React </p>
        </div>
        <div>
          <footer className='pb-5'><p className='mb-5 text-info h5'> Powered by Ahmed Abdelhamid Ahmed</p></footer>
        </div>
      </div>
    </div>
  ) 
}
