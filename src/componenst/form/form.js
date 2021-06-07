import React from "react";

const initialState={
    link: '',
    from: '',
    to: '',
    date: '',
    time: '',

    error:''
};

export default class InputForm extends React.Component
{
    state = initialState;

    handleChange = event =>
    {
        const isCheckBox = event.target.type === "checkbox";
        this.setState({
                [event.target.name]: isCheckBox
                ? event.target.checked
                : event.target.value
            });
    };

    validate = () =>{
        let error = "";

        if(!this.state.link || !this.state.from || !this.state.to ||
            !this.state.date || !this.state.time){
                error = "Input is Required";
                return false;
            }
        return true;
    };

    handleSubmit = event => {
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
                <div className="nsLink">
                    <h1>NS Link</h1>
                    <label>NS Link:</label>
                    <input
                        type="text"
                        value={this.state.link}
                        onChange={this.handleChange}/>
                    {/*<div style={{fontSize: 12, color: "red"}}>*/}
                    {/*    {this.state.error}*/}
                    {/*</div>*/}
                </div>
                <div className="divInput">
                    <div className="inputToFrom">
                        <h2>Departure Information</h2>
                        <label>From</label>
                        <input
                            type="text"
                            id="depFromInput"
                            value={this.state.from}
                            onChange={this.handleChange}
                        />
                        <label>To</label>
                        <input
                            type="text"
                            id="desToInput"
                            value={this.state.to}
                            onChange={this.handleChange}
                        />
                        <div style={{fontSize: 12, color: "red"}}>
                            {this.state.error}
                        </div>
                    </div>

                    <div className="inputDateTime">
                        <label>Date</label>
                        <input
                            type="date"
                            id="depDateInput"
                            value={this.state.date}
                            onChange={this.handleChange}
                        />
                        <label>Time</label>
                        <input
                            type="time"
                            id="depTimeInput"
                            value={this.state.time}
                            onChange={this.handleChange}
                            min="00:00" max="23:59"
                        />
                        <div style={{fontSize: 12, color: "red"}}>
                            {this.state.error}
                        </div>
                    </div>
                </div>
                <button type="submit">submit</button>
            </form>
        );
    }
}