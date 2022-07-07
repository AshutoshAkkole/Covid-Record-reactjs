import React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function UpdateRecord() {
    const uptRecord = async () =>{
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
      const location = useLocation()

      const obj =
      {
          id : location.state.id,
          name : location.state.name,
          branch : location.state.branch,
          year:location.state.year,
          vaccination_type:location.state.vaccination_type,
          date_1:location.state.date_1,
          date_2:location.state.date_2

      }
    //   console.log(location.state.id);
    //   console.log('hi')

      
      return (
          <form>
          <div className="form-group">
              <label htmlFor="formGroupExampleInput">id</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="id" value={obj.id}/>
          </div>
          <div className="form-group">
              <label htmlFor="formGroupExampleInput2">name</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="name" value={obj.name}/>
          </div>
          <div className="form-group">
              <label htmlFor="formGroupExampleInput2">branch</label>
              <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="branch" value={obj.branch}/>
          </div>
          <div className="form-group">
              <label htmlFor="formGroupExampleInput2">year</label>
              <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="year" value={obj.year}/>
          </div>
          <div className="form-group">
              <label htmlFor="formGroupExampleInput2">vaccination_type</label>
              <input type="text" className="form-control" id="formGroupExampleInput5" placeholder="vaccination_type" value={obj.vaccination_type}/>
          </div>
          <div className="form-group">
              <label htmlFor="formGroupExampleInput2">date 1</label>
              <input type="text" className="form-control" id="formGroupExampleInput6" placeholder="date-1" value={obj.date_1}/>
          </div>
          <div className="form-group">
              <label htmlFor="formGroupExampleInput2">date 2</label>
              <input type="text" className="form-control" id="formGroupExampleInput7" placeholder="date 2" value={obj.date_2}/>
          </div>
          <button onClick={uptRecord}>submit</button>
          </form>
      )
}
