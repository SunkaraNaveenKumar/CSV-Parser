import React from "react";
import ReportChart from "./ReportChart";

const ReportTable=(props)=>{
    const {data}=props
    return(
        <div >
               <table border='1'style={{display:'inline-block'}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {data.map(ele=>{
                    return(
                        <tr>
                            <td>{ele['Name (Original Name)']}</td>
                            <td>{ele['User Email']}</td>
                            <td>{ele['Total Duration (Minutes)']}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <ReportChart data={data}/>
        </div>
    )
}

export default ReportTable