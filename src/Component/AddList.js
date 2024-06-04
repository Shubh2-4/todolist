import React, { useState } from 'react'

export default function AddList({ todolist,deleteData }) {
  let [line,setLine] = useState(false);
  let [linein,setLinein] = useState("");

  let lineThrough = (selectedindex) => {
    setLinein(selectedindex);
    setLine(!line);
  }
  // let custom = {
  //   width:'80px'
  // }
  return (
    <div>
        <div className='outer'>
      <ul>
        {todolist.map((value, index) => {
          return (
              <li className={(line && linein===index) ? 'custom' : '' } key={index} onClick={()=>lineThrough(index)}>{value} <span onClick={()=>deleteData(value)}>&times;</span></li>
              )
            })}
      </ul>
            </div>
    </div>
  )
}
