import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { TiArrowSync } from 'react-icons/ti'

function Searchbar(props) {

    const {allSelected, onSearchTopic, onSearchLink} = props

    const delAll = () => { 
        alert('selected all deleted')
        for(let i=0; i<allSelected.length; i++)
        console.log(allSelected[i]['id'])
    }

    return (
        <div className="search">
            <input placeholder="Search by topic" onChange={e => onSearchTopic(e.target.value)} type="text"></input>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input placeholder="Search by linkName" onChange={e => onSearchLink(e.target.value)} type="text"></input>
            
            <span className="search-icon">
            <button className="action-btn" onClick={delAll}><AiFillDelete style={{color: 'red'}} className="s-icons"/> Delete</button> &nbsp;&nbsp;&nbsp;
            <button className="action-btn"><TiArrowSync style={{color: 'blue'}} className="s-icons"/> Retry</button>
            </span>
        </div>
    )
}

export default Searchbar
