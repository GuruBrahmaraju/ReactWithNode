import "./TableComp.css";
import React from "react";

function template() {
  return (
    <div className="table-comp">
      <h1 className="text-center">Users</h1>
      <div className="table-responsive" >
        <table className='table table-bordered table-striped'>
          <tr>
            {
              this.props.headers.map((v) => {
                return <th>{v}</th>
              })
            }
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {
            this.props.data.map((obj) => {
              return <tr>
                         {
                         this.props.keys.map((k)=>{
                             return <td>{obj[k]}</td>
                         })
                         }
                         <td><input type="button" className="btn btn-primary" value="edit" /></td>
                         <td><input type="button" className="btn btn-primary" value="delete" /></td>
                     </tr>
            })
          }
        </table>
      </div>
    </div>
  );
};

export default template;
