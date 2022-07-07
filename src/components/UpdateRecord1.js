import React, { Component } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        const location = useLocation();
        this.state = {
        id : location.state.id,
        name : location.state.name,
        branch : location.state.branch,
        year:location.state.year,
        vaccination_type:location.state.vaccination_type,
        date_1:location.state.date_1,
        date_2:location.state.date_2
    };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    uptRecord = async () =>{
        let res =  await axios.put("http://localhost:7777/updateRecord",{
              id : document.getElementById("formGroupExampleInput").value,
              name : document.getElementById("formGroupExampleInput2").value,
              branch : document.getElementById("formGroupExampleInput3").value,
              year : document.getElementById("formGroupExampleInput4").value,
              vaccination_type : document.getElementById("formGroupExampleInput5").value,
              date_1 : document.getElementById("formGroupExampleInput6").value,
              date_2 : document.getElementById("formGroupExampleInput7").value,
          });
        }

    render()
    {
        return(
            <form>
          <div className="form-group">
              <label htmlFor="formGroupExampleInput">id</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="id" value={this.state.id} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
              <label htmlFor="formGroupExampleInput2">name</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="name" value={this.state.name} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
              <label htmlFor="formGroupExampleInput2">branch</label>
              <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="branch" value={this.state.branch} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
              <label htmlFor="formGroupExampleInput2">year</label>
              <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="year" value={this.state.year} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
              <label htmlFor="formGroupExampleInput2">vaccination_type</label>
              <input type="text" className="form-control" id="formGroupExampleInput5" placeholder="vaccination_type" value={this.state.vaccination_type} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
              <label htmlFor="formGroupExampleInput2">date 1</label>
              <input type="text" className="form-control" id="formGroupExampleInput6" placeholder="date-1" value={this.state.date_1} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
              <label htmlFor="formGroupExampleInput2">date 2</label>
              <input type="text" className="form-control" id="formGroupExampleInput7" placeholder="date 2" value={this.state.date_2} onChange={this.handleChange}/>
          </div>
          <button onClick={uptRecord}>submit</button>
          </form>
        )
    }
}