import React,{useState,useEffect} from "react";

const Reportlist=(props)=>{
    const {data}=props
    const [filteredData,setFilteredData]=useState({})
    useEffect(()=>{
        const result=data.find(ele=>{
            return ele.Guest==='No'
        })
        setFilteredData(result)
    },[data])
    console.log(filteredData)
    return(
        <div>
            <h3>Host-{filteredData['Name (Original Name)']}</h3>
            <h3>Total Participants-{data.length}</h3>
            <h3>Duration-{filteredData['Total Duration (Minutes)']}</h3>
        </div>
    )
}

export default Reportlist