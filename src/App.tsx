import React from 'react';
import logo from './logo.svg';
import './App.css';

//api
import { fetchDelays } from './api/Api'

//component
import Info from './componenst/info/Info'
import InputForm from './componenst/form/InputForm'

//type
import { TrainOption, DelayParams } from './Types'
import { type } from 'os';
import { time } from 'console';

//visual
import { Spinner } from './componenst/visual/visual'

const testOptions: TrainOption[] = [
  // {
  //   departureStation: 'Utrecht Centraal',
  //   destinationStation: 'Amsterdam Centraal',
  //   plannedDepartureTime: '2021-06-20',
  //   plannedArrivalTime: '2021-06-20',
  //   arrivalDelay: {
  //     predictedDelay: 4.5,
  //     lowerConfidenceBound: 2,
  //     upperConfidenceBound: 6,
  //     confidencelevel: 95,
  //   }
  // },
  // {
  //   departureStation: 'Amsterdam Centraal',
  //   destinationStation: 'Utrecht Centraal',
  //   plannedDepartureTime: '2021-06-21',
  //   plannedArrivalTime: '2021-06-21',
  //   arrivalDelay: {
  //     predictedDelay: 5,
  //     lowerConfidenceBound: 3,
  //     upperConfidenceBound: 7,
  //     confidencelevel: 95,
  //   }
  // }
]

type AppProps = {}

type AppState = {
  isLoading: boolean;
  form: {
    fromStation: string;
    toStation: string;
    dateDeparture: string;
    timeDeparture: string;
    error: string;
  };
  api: TrainOption[]

}


class App extends React.Component<AppProps, AppState> {

  state: AppState = {
    isLoading: false,
    form: {
      fromStation: "UT",
      toStation: "AMS",
      dateDeparture: new Date().toISOString().substring(0, 10),
      timeDeparture: `${new Date().getHours()}:${new Date().getMinutes()}`,
      error: ""
    },
    api: [
      {
        departureStation: 'Amsterdam Centraal',
        destinationStation: 'Utrecht Centraal',
        plannedDepartureTime: '2021-06-21',
        plannedArrivalTime: '2021-06-21',
        arrivalDelay: {
          predictedDelay: 5,
          lowerConfidenceBound: 3,
          upperConfidenceBound: 7,
          confidencelevel: 95,
        }
      }
    ]
  }

  validate = () => {
    if (!this.state.form.fromStation || !this.state.form.toStation || !this.state.form.dateDeparture || !this.state.form.timeDeparture) {
      this.setState((prevState) => ({
        ...prevState,
        form: {
          ...prevState.form,
          error: "All fields are required!"
        }
      }))
      return false;
    }
    return true;
  }

  handleSelectChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const { name, value } = event.currentTarget

    this.setState((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [name]: value
      }
    }))
  }

  handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget

    this.setState((prevState) =>  ({
      ...prevState,
      form: {
        ...prevState.form,
        [name]: value
      }
      
    }))
  }

  handleSubmit = () => {
    if (this.validate()) {
      // get necessary information
      const { fromStation, toStation, dateDeparture, timeDeparture } = this.state.form

      // create iso time stamp
      const datetime = new Date(parseInt(dateDeparture.substring(0, 4)), 
                                parseInt(dateDeparture.substring(5, 6)),  
                                parseInt(dateDeparture.substring(7, 9)),
                                parseInt(timeDeparture.substring(0, 2)),
                                parseInt(timeDeparture.substring(3))
                              ).toISOString()

      // create param object for api call
      const params: DelayParams = {
        departureStation: fromStation,
        destinationSataion: toStation,
        rideTime: datetime
      }

      // set loading state to true
      this.setState((prevState) => ({
        ...prevState,
        isLoading: true
      }))

      // fetch data
      fetchDelays(params)
        .then(response => {
          this.setState((prevState) => ({
            ...prevState,
            isLoading: false,
            form: {
              ...prevState.form,
              error: ""
            }
          }))
        })
        .catch(error => {
          this.setState((prevState) => ({
            ...prevState,
            isLoading: false,
            form: {
              ...prevState.form,
              error: "Something went worng!"
            }
          }))
        })
    }
  }
  
  render() {
    return (
      <main className={`container py-5`}>
  
        <section>
          <h1>Departure Information:</h1>
          <InputForm
            handleSelectChange={this.handleSelectChange}
            handleInputChange={this.handleInputChange} 
            handleSubmit={this.handleSubmit} 
            fromStation={this.state.form.fromStation} 
            toStation={this.state.form.toStation} 
            dateDeparture={this.state.form.dateDeparture} 
            timeDeparture={this.state.form.timeDeparture} 
            error={this.state.form.error}
          />
        </section>
  
        <section className={`mt-5`}>
          <h1>Options:</h1>
          {
            !this.state.isLoading ?
            <Info trainOptions={this.state.api} /> :
            <Spinner role={``}/>
          }          
        </section>
        
      </main>
    );
  }
}

export default App;
