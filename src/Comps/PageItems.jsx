import React from 'react'



const PageItems = ({ heading, dayDate, caption }) => {
  return (

    <div style={{ marginBottom: "1.8rem" }}>
      <h1>{heading}</h1>
      <p>{dayDate}</p>
      <p>{caption}</p>
    </div>

  )
}

export default PageItems