import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react";
import "./Employeelist.css"
import axios from "axios";




const EmployeesList=()=>{
const [employees,setEmployees]=useState([]);

useEffect(()=>{
    getEmployees();
},[]);

const getEmployees = async () => {
    try{
        const response = await axios.get(`http://localhost:4040/employees`);
        setEmployees(response.data);
    }catch(error){
        console.log('Error: ', error);
    }
}

const handleDelete = async (employeeID) => {
    try{
        const response = await axios.delete(`http://localhost:4040/employees/${employeeID}`);
        if(response){
            getEmployees();
        }
    }catch(error){
        console.log(error);
    }
}

     return(
    
    <div className="employeelist">
  
 <h1>EMPLOYEESLIST</h1>   
<table className="table table-striped ">
    <thead>
        <tr>
            <th>EMPLOYEE ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>DEPARTMENT</th>
            <th>DATE OF BIRTH</th>
            <th>MOBILE NUMBER</th>
            <th>DATE OF JOINING</th>
            <th>REPORTING PERSON</th>
            <th> EXPERIENCE IN MONTH</th>
            <th>SALARY</th>
            <th> LinkedIn</th>
            <th>GovernmentProof</th>
            <th>EDITE EMPLOYEE</th>
        </tr>
    </thead>
    <tbody>
    {employees.length ? employees.map((employee, index) => (
                        <tr key={index}>

                            <td>{employee._id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.Department}</td>
                            <td>{employee.DateofBirth}</td>
                            <td>{employee.mobileNumber}</td>
                            <td>{employee.DateofJoining}</td>
                            <td>{employee.ReportingPerson}</td>
                            <td>{employee.Experience}</td>
                            <td>{employee.salary }</td>
                            <td>{employee.LinkedIn}</td>
                            <td>{employee.GovernmentProof}</td>
                          
      
   
                            <td>
                                <Link  className="btn btn-link"  to={`/employees/${employee._id}/update`}>UPDATE</Link>
                                <button className="btn btn-link" onClick={() => handleDelete(employee._id)}>DELETE</button>
                            </td>
                        </tr>
                    )):<></>}
    </tbody>
</table> 



</div>)


}
export default EmployeesList;
