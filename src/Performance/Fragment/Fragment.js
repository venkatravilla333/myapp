import React from 'react'
import TableData from './TableData'

function Fragment() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
         <TableData/>
        </tr>
        
      </tbody>
    </table>
  )
}

export default Fragment