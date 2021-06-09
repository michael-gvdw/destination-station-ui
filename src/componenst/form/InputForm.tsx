import React from "react";

// stations
import { Stations } from '../../Stations'

// visual
import { Alert } from '../visual/visual'



type Props = {
    handleSubmit: () => void;
    handleSelectChange: (event: React.FormEvent<HTMLSelectElement>) => void;
    handleInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
    fromStation: string;
    toStation: string;
    dateDeparture: string;
    timeDeparture: string;
    error: string
}

const InputForm: React.FC<Props> = ({ handleSubmit, handleInputChange, handleSelectChange,fromStation, 
                                        toStation, dateDeparture, timeDeparture, error }) => {

    return(
        <form>
            {error.length > 0 && <Alert role={`alert-danger`} message={error} />}

            <div className="form-group row mt-2">
                <label className="col-sm-2 col-form-label">From</label>
                <div className="col-sm-10">
                    <select className="form-select" name={`fromStation`} aria-label="Default select example" value={fromStation} onChange={handleSelectChange}>
                        { Stations.map(station => <option value={station.code}>{ station.name }</option>) }
                    </select>
                </div>
            </div>

            <div className="form-group row row mt-2">
                <label className="col-sm-2 col-form-label">To</label>
                <div className="col-sm-10">
                    <select className="form-select" name={`toStation`} aria-label="Default select example" value={toStation} onChange={handleSelectChange}>
                        { Stations.map(station => <option value={station.code}>{ station.name }</option>) }
                    </select>
                </div>
            </div>

            <div className="form-group row mt-2">
                <label className="col-sm-2 col-form-label">Date</label>
                <div className="col-sm-10">
                    <input
                        className="form-control"
                        type="date"
                        name="dateDeparture"
                        value={dateDeparture}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className="form-group row mt-2">
                <label className="col-sm-2 col-form-label">Time</label>
                <div className="col-sm-10">
                    <input
                        className="form-control"
                        type="time"
                        name="timeDeparture"
                        value={timeDeparture}
                        onChange={handleInputChange}
                        min="00:00" max="23:59"
                    />
                </div>
            </div>
                
            <button type="button" className="btn btn-primary mt-2" onClick={handleSubmit}>Submit</button>
        </form>
    ) 

}


export default InputForm

// export default class InputForm extends React.Component{
//     state = initialState;

//     handleChange = event => {
//         const isCheckBox = event.target.type === "checkbox";
//         this.setState({
//             [event.target.name]: isCheckBox
//             ? event.target.checked
//             : event.target.value
//         });
//     };

//     validate = () =>{
//         let errorMes = "";
//         if(!this.state.fromDep || !this.state.toDes ||
//             !this.state.dateDep || !this.state.timeDep){
//             errorMes = "Input is Required";
//             return false;
//         }
//         return true;
//     };

//     handleSubmit = event=>{
//         event.preventDefault();
//         const isValid = this.validate();
//         if(isValid){
//             console.log(this.state);
//             this.setState(initialState);
//         }
//     };

//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 {/* <div class="form-row">
//                     <div class="form-group col-md-100">
//                         <label>NS Link</label>
//                         <input
//                             class = "form-control"
//                             type="text"
//                             name="linkNS"
//                             placeholder="NS Link"
//                             value={this.state.link}
//                             onChange={this.handleChange}
//                         />
//                     </div>
//                 </div> */}

//                 <h2>Departure Information</h2>
//                 <div class="form-group row mt-2">
//                     <label class="col-sm-2 col-form-label">From</label>
//                     <div class="col-sm-10">
//                         <input
//                             class="form-control"
//                             type="text"
//                             name="fromDep"
//                             placeholder="Depart From"
//                             value={this.state.from}
//                             onChange={this.handleChange}
//                         />
//                         <div style={{fontSize: 12, color: "red"}}>{this.state.errorMes}</div>
//                     </div>
//                 </div>

//                 <div class="form-group row row mt-2">
//                     <label class="col-sm-2 col-form-label">To</label>
//                     <div class="col-sm-10">
//                         <input
//                             class="form-control"
//                             type="text"
//                             name="toDes"
//                             placeholder="To Destination"
//                             value={this.state.to}
//                             onChange={this.handleChange}
//                         />
//                     </div>
//                     <div style={{fontSize:12, color:"red"}}>{this.state.errorMes}</div>
//                 </div>

//                 <div class="form-group row mt-2">
//                     <label class="col-sm-2 col-form-label">Date</label>
//                     <div class="col-sm-10">
//                         <input
//                             class="form-control"
//                             type="date"
//                             name="dateDep"
//                             value={this.state.date}
//                             onChange={this.handleChange}
//                         />
//                         <div style={{fontSize:12, color:"red"}}>{this.state.errorMes}</div>
//                     </div>
//                 </div>

//                 <div class="form-group row mt-2">
//                     <label class="col-sm-2 col-form-label">Time</label>
//                     <div class="col-sm-10">
//                         <input
//                             class="form-control"
//                             type="time"
//                             name="timeDep"
//                             value={this.state.time}
//                             onChange={this.handleChange}
//                             min="00:00" max="23:59"
//                         />
//                         <div style={{fontSize: 12, color:"red"}}>{this.state.errorMes}</div>
//                     </div>
//                 </div>
                    
//                 <button type="submit" class="btn btn-primary mt-2">submit</button>
//             </form>
//         );
//     }
// }