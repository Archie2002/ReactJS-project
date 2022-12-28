import React, {useState} from 'react'
import image from './image.png'
import { Link } from 'react-router-dom'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsLightningCharge } from 'react-icons/bs'
import {IoIosArrowDropleftCircle} from 'react-icons/io'
import { MdOutlineReportGmailerrorred } from 'react-icons/md'
import { GiSandsOfTime } from 'react-icons/gi'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

function Navbar1() {

    const [isOpen,setIsOpen]=useState(false)

    if(isOpen){
    return (
        <div className="sidebar">
            <div className="sidebar nav flex-column">
            <ul className="items">
            <li className="nav-item"><img className="logo" src={image} width="50" height="50" alt="Rapidops"/>&nbsp;Rapidops<p className="logo-text">Driven by impact</p> </li>
            <li className="nav-item"><Link to="/delayed" className="nav-link"><AiOutlineClockCircle className="icon"/>&nbsp;&nbsp;Delayed</Link></li>
            <li className="nav-item"><Link to="/unique" className="nav-link"><BsLightningCharge className="icon"/>&nbsp;&nbsp;Unique</Link></li>
            <li className="nav-item"><Link to="/error" className="nav-link"><MdOutlineReportGmailerrorred className="icon"/>&nbsp;&nbsp;Error</Link></li>
            <li className="nav-item"><Link to="/republish" className="nav-link"><GiSandsOfTime className="icon"/>&nbsp;&nbsp;Republish</Link></li>
            </ul>
            <button onClick={() => setIsOpen(!isOpen)} className="scroll-left action-btn"><IoIosArrowDropleftCircle className='togel-icons'/></button>
            </div>
        </div>
    )
    }
    else{
        return(
            <div className="sidebar" style={{width: '100px'}}>
            <div className="sidebar nav flex-column">
            <ul className="items">
            <li className="nav-item"><img className="logo" src={image} width="50" height="50" alt="Rapidops"/></li>
            <li className="nav-item"><Link to="/delayed" className="nav-link"><AiOutlineClockCircle className="icon"/></Link></li>
            <li className="nav-item"><Link to="/unique" className="nav-link"><BsLightningCharge className="icon"/></Link></li>
            <li className="nav-item"><Link to="/error" className="nav-link"><MdOutlineReportGmailerrorred className="icon"/></Link></li>
            <li className="nav-item"><Link to="/republish" className="nav-link"><GiSandsOfTime className="icon"/></Link></li>
            </ul>
            <button onClick={() => setIsOpen(!isOpen)} className="scroll-right action-btn"><IoIosArrowDroprightCircle className='togel-icons'/></button>
            </div>
        </div>
        )
    }
}

export default Navbar1
