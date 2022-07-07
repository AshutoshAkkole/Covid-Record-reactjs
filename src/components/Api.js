import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CovidTable from './CovidTable';

export default class Api extends Component {

    constructor(props)
    {
        super(props);
        
        this.state = {
            students : [],
        };
    }

    componentDidMount = () =>
    {
        axios.get("http://localhost:7777/getAllRecord")
        .then((data) => {
            // console.log(data.data);
            this.setState({students: data.data});
        });
    }

    componentWillUnmount = () =>
    {
        this.setState({
            students:[]
        })
    }

    deleteRecord = async (id) =>{
        let data = await axios.delete('http://localhost:7777/delRecord/'+id);
        console.log(data);
        this.componentDidMount();
    }

    render() {
         
        return (
            
            <table className='table'>
            <thead>
            <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">branch</th>
            <th scope="col">year</th>
            <th scope="col">type of Vaccination</th>
            <th scope="col">date-1</th>
            <th scope="col">date-2</th>
            <th scope="col">action-1</th>
            <th scope="col">action-2</th>
            </tr>
            </thead>
            <tbody>
           {
               this.state.students.map(
                   student =>
                <tr itemScope='row' key={student.id}>

                    <CovidTable id={student.id} name={student.name} branch={student.branch} year={student.year} date_1={student.date_1} date_2={student.date_2} vaccination_type={student.vaccination_type}/>

                    <td> <button onClick={()=>this.deleteRecord(student.id)}>Remove</button></td>
                    <td><button ><Link to='/UpdateRecord1' 
                    state={{id:student.id,
                    name:student.name,
                    branch:student.branch,
                    year:student.year,
                    date_1:student.date_1,
                    date_2:student.date_2,
                    vaccination_type:student.vaccination_type}} 
                    style={{color: "black"}} >Update</Link></button></td>
                </tr>
              
                )
            }

            </tbody>
            </table>
        
        )
    }
}

