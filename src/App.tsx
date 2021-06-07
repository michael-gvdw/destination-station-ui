import React from 'react';
import logo from './logo.svg';
import './App.css';

//component
import Info from './componenst/info/Info'

//type
import { TrainOption } from './Types'

const testOptions: TrainOption[] = [
  {
    departureStation: 'Utrecht Centraal',
    destinationStation: 'Amsterdam Centraal',
    plannedDepartureTime: '2021-06-20',
    plannedArrivalTime: '2021-06-20',
    arrivalDelay: {
      predictedDelay: 4.5,
      lowerConfidenceBound: 2,
      upperConfidenceBound: 6,
      confidencelevel: 95,
    }
  },
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

function App() {
  return (
    <main className={`container py-5`}>

      <section>
        <h1>Form:</h1>
        <div></div>
      </section>

      <section>
        <h1>Options:</h1>
        <Info trainOptions={testOptions} />
      </section>
      
    </main>
  );
}

export default App;
