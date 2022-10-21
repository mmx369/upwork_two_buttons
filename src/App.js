import React, { useState } from 'react'
import { Button } from './components/Button'
import { Table } from './components/Table'

function App() {
  const [showTable, setShowTable] = useState(true)
  const [isActive, setActive] = useState(true)

  const toggleClass = () => {
    setActive(!isActive)
  }

  const handleCloginClick = () => {
    if (!isActive) {
      toggleClass()
    }
    setShowTable(true)
  }

  const handleVloginClick = () => {
    if (isActive) {
      toggleClass()
    }
    setShowTable(false)
  }

  return (
    <div className='buttons'>
      <Button
        id='cloginbtn'
        text='CLIENT LOGIN'
        onClick={handleCloginClick}
        className={isActive ? 'switchBtn selectedBtn' : 'switchBtn'}
      />
      <Button
        id='vloginbtn'
        text='VENDOR LOGIN'
        onClick={handleVloginClick}
        className={isActive ? 'switchBtn' : 'switchBtn selectedBtn'}
      />
      {showTable ? <Table /> : null}
    </div>
  )
}

export default App
