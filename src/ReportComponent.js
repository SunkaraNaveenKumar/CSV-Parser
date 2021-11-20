import React from "react";
import Reportlist from "./ReportList";
import ReportTable from "./ReportTable";

const ReportComponent=(props)=>{
const {data}=props
    return(
        <div>
            <h2>Report</h2>
            <Reportlist data={data}/>
            <ReportTable data={data}/>
        </div>
    )
}

export default ReportComponent
