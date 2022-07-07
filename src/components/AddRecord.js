import React from 'react';
import axios from 'axios';

export default function AddRecord() {

    const adRecord = async () =>{
      let res =  await axios.post("http://localhost:7777/addRecord",{
            id : document.getElementById("formGroupExampleInput").value,
            name : document.getElementById("formGroupExampleInput2").value,
            branch : document.getElementById("formGroupExampleInput3").value,
            year : document.getElementById("formGroupExampleInput4").value,
            vaccination_type : document.getElementById("formGroupExampleInput5").value,
            date_1 : document.getElementById("formGroupExampleInput6").value,
            date_2 : document.getElementById("formGroupExampleInput7").value,
        });
    // console.log(res);
    }
    
    return (
        <form action='/'>
        <div className="form-group">
            <label htmlFor="formGroupExampleInput">id</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="id"/>
        </div>
        <div className="form-group">
            <label htmlFor="formGroupExampleInput2">name</label>
            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="name"/>
        </div>
        <div className="form-group">
            <label htmlFor="formGroupExampleInput2">branch</label>
            <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="branch"/>
        </div>
        <div className="form-group">
            <label htmlFor="formGroupExampleInput2">year</label>
            <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="year"/>
        </div>
        <div className="form-group">
            <label htmlFor="formGroupExampleInput2">vaccination_type</label>
            <input type="text" className="form-control" id="formGroupExampleInput5" placeholder="vaccination_type"/>
        </div>
        <div className="form-group">
            <label htmlFor="formGroupExampleInput2">date 1</label>
            <input type="text" className="form-control" id="formGroupExampleInput6" placeholder="date-1"/>
        </div>
        <div className="form-group">
            <label htmlFor="formGroupExampleInput2">date 2</label>
            <input type="text" className="form-control" id="formGroupExampleInput7" placeholder="date 2"/>
        </div>
        <button onClick={adRecord}>submit</button>
        </form>
    )
}
