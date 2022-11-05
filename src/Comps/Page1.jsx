import { React, useState } from 'react'
import PageItems from './PageItems'
import data from './Data'

const Page1 = () => {

  const [darkMode, setDarkMode] = useState(false);

  const styleDiv = {
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : '#d03769',
    padding: '2rem',
  }

  return (
    <>
      <div className='page' style={styleDiv}>
        <header>
          <h1>Overreacted</h1>
          <span> <button onClick={() => setDarkMode((value) => { return !value })}>{darkMode ? 'Light mode' : 'Dark mode'}</button> </span>
        </header>
        <div className='main'>
          {data.map((e, idx) => {
            return (
              <PageItems heading={e.heading} dayDate={e.dayDate} caption={e.caption} key={idx} />
            )
          })}

        </div>
      </div>

    </>
  )
}

export default Page1