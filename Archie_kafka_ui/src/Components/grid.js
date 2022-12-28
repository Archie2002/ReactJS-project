 import React,{useState} from 'react'
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {FiRefreshCcw}  from 'react-icons/fi';
import {AiFillDelete}  from 'react-icons/ai';
import Searchbar from './searchbar';
import { NavLink } from 'react-router-dom';
import records from './records';

function Grid() {

  const [allSelected, setAllSelected] = useState([])
  const [tempData, setTempData] = useState([] )
   
  const delbtn = (params) => {
    alert('Deleted')
    console.log(params.data.id)
    
  }
    const columnDefs =[
        {headerName:"Id",field:'id',lockVisible:true, checkboxSelection: true},
        {headerName:"Topic",field:'topic',lockVisible:true, cellRenderer: elink},
        {headerName:"Link_Name",field:'linkName',sortable:true,lockVisible:true, },
        {headerName:"Time",field:'executionTime',sortable:true,lockVisible:true, }, 
        {headerName:"Action",field:'Action',cellRendererFramework: (params) => <div><button className="action-btn" onClick={() => delbtn(params)}><AiFillDelete style={{color: 'red'}} className='s-icons'/></button>&nbsp;&nbsp;&nbsp;<button className="action-btn"><FiRefreshCcw style={{color: 'blue'}} className='s-icons'/></button></div>, 
        sortable:true, lockVisible:true },
      ];
      
      function elink(props){
        return(
        <NavLink className="links" to="/delayed/detail" >{props.value}</NavLink>)
     }
 
    let getData = (from, to)=>{ 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (from > 100) {
                    reject(false);
                } else {
                    resolve(records.slice(from,to));
                }
            }, 1000);
        }); 
      }
      
      let gridData = [];
      let isAllDataFetched = false;   
    
      const datasource = {
        getRows(params) {
         console.log(JSON.stringify(params.startRow+" to "+params.endRow));
          const { startRow, endRow } = params
          getData(startRow, endRow)
            .then(response => {
              isAllDataFetched = response.length!==25;
              gridData = gridData.concat(response);
              params.successCallback(response, isAllDataFetched ? gridData.length: -1);
            })
            
            .catch(error => {
              console.error(error);
              params.failCallback();
            })        
        }
      }; 
 
      const onGridReady = (params) => {   
        params.api.setDatasource(datasource);
      }
    
          const components={
            loading:(params)=>{
              if(params.value!==undefined){
                return params.value
              }else{
                return "Loading......"
              }
            }
          }
    
      const defaultColDef={
        sortable:true,
        editable:true,
        flex:1,
        enableValue:true,   
      }

      const onSelectionChanged = (event) => {
          setAllSelected(event.api.getSelectedRows())
      }


      const onSearchLink = (value) =>{
        const newD = records.filter(link => link.linkName.toLowerCase().includes(value.toLowerCase()))
        setTempData(newD)
        console.log(tempData)
        console.log(value)
      }

      const onSearchTopic = (value) =>{
        const newD = records.filter(top => top.topic.toLowerCase().includes(value.toLowerCase()))
        setTempData(newD)
        console.log(tempData)
        console.log(value)
      }

  return (
    <div>
    <div>
    <Searchbar allSelected={allSelected} onSearchLink={onSearchLink} onSearchTopic={onSearchTopic}/>
    </div>
    <div className="ag-theme-alpine compo" style={{height: 500, width: 'auto'}}> 
    <AgGridReact 
      columnDefs={columnDefs}
      rowSelection='multiple'
      rowMultiSelectWithClick={true}
      defaultColDef={defaultColDef}
      onGridReady={onGridReady} 
      components={components} 
      cacheBlockSize={25}
      rowModelType={"infinite"}
      onSelectionChanged = {onSelectionChanged}
      >
      </AgGridReact>
     
   </div>
    </div>
  );
}

export default Grid