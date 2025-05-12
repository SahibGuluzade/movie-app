import React from 'react'

const Workexamples = () => {
  return (
    <div>
      <h1>Work Examples </h1> 
      <table border="1">
  <thead>
    <tr>
      <th>Project Name</th>
      <th>Description</th>
      <th>Technologies Used</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Portfolio Website</td>
      <td>A personal portfolio showcasing projects and skills.</td>
      <td>HTML, CSS, JavaScript</td>
      
    </tr>
    <tr>
      <td>E-commerce Store</td>
      <td>A fully functional online store with payment integration.</td>
      <td>React, Firebase, Stripe</td>
      
    </tr>
    <tr>
      <td>Weather App</td>
      <td>Fetches real-time weather data based on user location.</td>
      <td>HTML, CSS, OpenWeather API</td>
      
    </tr>
  </tbody>
</table>

      </div>
  )
}

export default Workexamples;