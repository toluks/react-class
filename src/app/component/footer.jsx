import React from 'react'

export default function footer() {
  return (
    <footer className='bg-[gold] flex items-center justify-center h-[20vh]'>
        <p>&copy; univelcity{new Date().getFullYear()}</p>
    </footer>
  )
}
