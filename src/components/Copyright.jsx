import React from 'react'

const Copyright = () => {
    const d = new Date();
    const year = d.getFullYear()
    
  return (
    <footer style = {{position: 'absolute', zIndex: '10000000', fontSize: '2em', bottom: '0px'}}>
        &copy; {year} created and designed by Faris Javaid :)
    </footer>
  )
}

export default Copyright