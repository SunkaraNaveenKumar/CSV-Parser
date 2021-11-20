import React,{useState} from "react";
import MainContainer from "./MainContainer";
import ReportComponent from "./ReportComponent";

const App=(props)=>{
    const [data,setData]=useState([])

    const dataCallBack=(data)=>{
        setData(data)
        console.log('data',data)
    }
    return(
        <div>
           <h1>File Upload + CSV parser</h1>
           <MainContainer dataCallBack={dataCallBack}/> <hr />
           {data.length >0 &&<ReportComponent data={data}/>}
        </div>
    )
}

export default App