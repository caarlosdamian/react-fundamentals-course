// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = useState('')
  const inputRef = React.useRef('')
  const handleSubmit = e => {
    e.preventDefault()
    console.dir()
    onSubmitUsername(inputRef.current.value)
  }

  const handleChange = e => {
    setUsername(e.target.value.toLowerCase())
  }

  const isValid = username === username.toLowerCase()
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleChange}
          ref={inputRef}
          value={username}
          id="username"
          type="text"
        />
        {!isValid && (
          <p role="alert" style={{color: 'red'}}>
            Username must be lower case
          </p>
        )}
      </div>
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
