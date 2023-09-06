import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import education from '../JsonFiles/education.json';
import '../CSSfiles/Tables.css';
const Tables=()=>{
    const DisplayData = education.map(
        (info)=>{
            return(
                <tr>
                    <td className="td">{info.Qualification}</td>
                    <td className="td">{info.Institution}</td>
                    <td className="td">{info.cgpa}</td>
                    <td className="td">{info.Years}</td>
                </tr>
            )
        }
    )
    return(
        <div>
            <table className="tables">
                <thead>
                    <tr>
                        <th className="th">Qualification</th>
                        <th className="th">Institution</th>
                        <th className="th">CGPA/ Percentage</th>
                        <th className="th">Year</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
}
export default Tables;