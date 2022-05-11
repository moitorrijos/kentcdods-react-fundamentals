// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// const smallBox = <div>small lightblue box</div>
const mediumBox = <div>medium pink box</div>
const largeBox = <div>large orange box</div>
const Box = (props) => {
  return <div className={`box box--${props.size}`} {...props} />
}

function App() {
  return (
    <Box className="box" size="small" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', fontStyle: 'italic' }}>
      <Box size="medium" style={{ backgroundColor: 'lightblue' }}>smallBox</Box>
      {mediumBox}
      {largeBox}
    </Box>
  )
}

export default App
