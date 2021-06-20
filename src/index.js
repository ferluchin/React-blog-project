import React from 'react'
import ReactDOM from 'react-dom'

const reactContentRoot = document.getElementById("root")


const App = () => {
  const myItem = "Luis"

  return (
    <ul>
      <li>item1</li>
      <li>item255</li>
      <li>{myItem}</li>

    </ul>
  )
}

ReactDOM.render(<App />, reactContentRoot)
