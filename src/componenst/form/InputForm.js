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
                <div id="nsLink">
                    <h2>NS Link</h2>
                    <label>NS Link</label>
                    <input
                        type="text"
                        name="linkNS"
                        placeholder="NS Link"
                        value={this.state.link}
                        onChange={this.handleChange}
                    />
                </div>

                <div id="divInput">
                    <div id="inputToFrom">
                        <div id="depFromInput">
                            <h2>Departure Information</h2>
                            <label>From</label>
                            <input
                                type="text"
                                name="fromDep"
                                placeholder="Depart From"
                                value={this.state.from}
                                onChange={this.handleChange}
                            />
                            <div style={{fontSize:12, color:"red"}}>{this.state.errorMes}</div>
                        </div>
                        <div id="desToInput">
                            <label>To</label>
                            <input
                                type="text"
                                name="toDes"
                                placeholder="To Destination"
                                value={this.state.to}
                                onChange={this.handleChange}
                            />
                            <div style={{fontSize:12, color:"red"}}>{this.state.errorMes}</div>
                        </div>
                    </div>
                    <div id="inputDateTime">
                        <div id="inputDate">
                            <label>Date</label>
                            <input
                                type="date"
                                name="dateDep"
                                value={this.state.date}
                                onChange={this.handleChange}
                            />
                            <div style={{fontSize:12, color:"red"}}>{this.state.errorMes}</div>
                        </div>
                        <div id="inputTime">
                            <label>Time</label>
                            <input
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
                <button type="submit">submit</button>
            </form>
        );
    }
}