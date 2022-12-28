import React from 'react'
import {BsArrowLeftCircle} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'

function Detail() {

const navv = useNavigate()
  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date+' & '+time;
  return ( 
      <div className="compo" style={{marginLeft: 'auto'}}>
      <h3 className="heding"><button onClick={() => navv(-1)} className='action-btn'><BsArrowLeftCircle></BsArrowLeftCircle></button>&nbsp;Detail Page</h3> 
      <div className="heding">
        <h4>Date & Time</h4>
        <h5>{ dateTime }</h5>
      </div>
      </div>
  )
}

export default Detail