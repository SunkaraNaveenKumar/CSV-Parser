import React,{useState} from "react";
import Papa from "papaparse";

const MainContainer=(props)=>{
    const{dataCallBack}=props
    const [selectFile,setSelectFile]=useState('')

    const handleFileChange=(e)=>{
       const result=e.target.files
       setSelectFile(result[0])
       console.log(result[0])
    }

    function handleSubmit(e) {
    e.preventDefault()
        Papa.parse(selectFile, {
            header: true,
            dynamicTyping: true,
            complete: function (results) {
                dataCallBack(results.data)
            }
        })
    }
    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
            <input type="file" name='file' accept=".csv" onChange={handleFileChange} />
            <input type="submit" value="upload" />
            </form>
           
        </div>
    )
}

export default MainContainer