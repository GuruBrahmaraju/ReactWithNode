import "./Register.css";
import React from "react";

function template() {
  return (
    <div className="register container-fluid">
       <h3 className="text-center m-b-50">Registration</h3>
        <div className="row form-group">
            <div className="col-sm-5 text-right">
                <b>Name:</b>
            </div>
            <div className="col-sm-3">
                <input className="form-control" />
            </div>

        </div>

        <div className="row form-group">
            <div className="col-sm-5 text-right">
                <b>Email:</b>
            </div>
            <div className="col-sm-3">
                <input className="form-control" />
            </div>

        </div>

        <div className="row form-group">
            <div className="col-sm-5 text-right">
                <b>Phone:</b>
            </div>
            <div className="col-sm-3">
                <input className="form-control" />
            </div>

        </div>

        <div className="row form-group">
            <div className="col-sm-5 text-right">
                <b>Age:</b>
            </div>
            <div className="col-sm-3">
                <input className="form-control" />
            </div>

        </div>

        <div className="row form-group">
          <div className="col-sm-12 text-center">
              <input type="button" className="btn  btn-primary" value='regster'/>
         </div>
        </div>
    </div>
  );
};

export default template;
