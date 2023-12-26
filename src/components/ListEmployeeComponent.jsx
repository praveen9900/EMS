import React, {useEffect,useState} from 'react'
import { listEmployees } from '../services/EmployeeService'
import {useNavigate} from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees,setEmployees] = useState([])

    useEffect(()=> {
        listEmployees().then((response) =>{
            setEmployees(response.data);
        }).catch(error =>{
            console.log(error);
    })
},[])

    const navigator = useNavigate();

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List of Employee</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-striped table-bordered table-success'>
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email ID</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key = {employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={()=> updateEmployee(employee.id)} >Update</button>
                            </td>
                        </tr>)
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent