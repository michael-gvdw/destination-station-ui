import React from "react";

const initialState={
    linkNS: "",
    fromDep: "",
    toDes: "",
    dateDep: "",
    timeDep: "",
    errorMes: ""
};

export default class InputForm extends React.Component{
    state = initialState;

    handleChange = event => {
        const isCheckBox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckBox
            ? event.target.checked
            : event.target.value
        });
    };

    validate = () =>{
        let errorMes = "";
        if(!this.state.fromDep || !this.state.toDes ||
            !this.state.dateDep || !this.state.timeDep){
            errorMes = "Input is Required";
            return false;
        }
        return true;
    };

    handleSubmit = event=>{
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            console.log(this.state);
            this.setState(initialState);
        }
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div class="form-row">
                    <div class="form-group col-md-100">
                        <label>NS Link</label>
                        <input
                            class = "form-control"
                            type="text"
                            name="linkNS"
                            placeholder="NS Link"
                            value={this.state.link}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div id="divInput">
                    <div id="inputToFrom">
                        <h2>Departure Information</h2>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">From</label>
                            <div class="col-sm-10">
                                <input
                                    class="form-control"
                                    type="text"
                                    name="fromDep"
                                    placeholder="Depart From"
                                    value={this.state.from}
                                    onChange={this.handleChange}
                                />
                                <div style={{fontSize: 12, color: "red"}}>{this.state.errorMes}</div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">To</label>
                            <div class="col-sm-10">
                                <input
                                    class="form-control"
                                    type="text"
                                    name="toDes"
                                    placeholder="To Destination"
                                    value={this.state.to}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div style={{fontSize:12, color:"red"}}>{this.state.errorMes}</div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Date</label>
                            <div class="col-sm-10">
                                <input
                                    class="form-control"
                                    type="date"
                                    name="dateDep"
                                    value={this.state.date}
                                    onChange={this.handleChange}
                                />
                                <div style={{fontSize:12, color:"red"}}>{this.state.errorMes}</div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Time</label>
                            <div class="col-sm-10">
                                <input
                                    class="form-control"
                                    type="time"
                                    name="timeDep"
                                    value={this.state.time}
                                    onChange={this.handleChange}
                                    min="00:00" max="23:59"
                                />
                                <div style={{fontSize: 12, color:"red"}}>{this.state.errorMes}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary mb-2">submit</button>
            </form>
        );
    }
}