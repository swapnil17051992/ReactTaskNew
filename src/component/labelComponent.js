import React from 'react';
import ReactDOM from 'react-dom';
import '../css/bootstrap.min.css'

export class LabelTest extends React.Component{
constructor(){
    super();
    this.Name=["User Name" ,"Password"]
}

    render(){
        return(
            <div>
                     <div className="container">
        <div className="row" >
            <div className="col-sm-4">
            </div>
            <div className="col-sm-4">
                <div className="panel panel-primary">
                    <div className="panel-heading" >
                        Admin</div>
                    <div className="panel-body">
                        <div className="row" >
                            <div className="col-sm-4">
                                <label className="form-group">
                                    User Name <span className="glyphicon glyphicon-asterisk" >
                                    </span>
                                </label>
                            </div>
                            <div className="col-sm-8" >
                                <input type="text" id="txtUsername" className="form-control" />
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-sm-4">
                                <label className="form-group">
                                    Password <span className="glyphicon glyphicon-asterisk">
                                    </span>
                                </label>
                            </div>
                            <div className="col-sm-8" >
                                <input type="password" id="txtPassword" className="form-control" />
                            </div>
                        </div>
                    </div>
                   
                    <div className="panel-footer">
                        <div className="row">
                            <div className="col-sm-4 col-sm-offset">
                                <label >
                                </label>
                            </div>
                            <div className="col-sm-5 col-sm-offset" >
                            </div>
                            <div className="col-sm-3" >
                                <input type="button" value="Sign In" id="btnLogin" className="btn btn-primary btn-sm" />
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
            
            <div className="col-sm-4">
            </div>
        </div>
       
    </div>

                
            </div>
        )
    }
}