import React from 'react'

//type 
import { TrainOption } from '../../Types'

type Props = {
    option: TrainOption;
}

const InfoCard: React.FC<Props> = ({ option }) => {
    return (
        <div className={`card w-100 mt-3`}>
            <div className={`card-body`}>
                <div className={`row`}>
                    <div className={`col`}>
                        <h5 className={`card-title`}>{option.departureStation} - {option.destinationStation}</h5>
                        <h5 className={`card-subtitle text-muted`}>Intercity</h5>
                    </div>
                </div>

                <span>Departure Time: {option.plannedDepartureTime} - Arrival Time: {option.plannedArrivalTime}</span>

                <ul className={`list-group list-group-flush mt-2`}>
                    <li className={`list-group-item`}>Expected Arrival Delay: {option.arrivalDelay.predictedDelay} min</li>
                    <li className={`list-group-item`}>Min Expected Arrival Delay: {option.arrivalDelay.lowerConfidenceBound} min</li>
                    <li className={`list-group-item`}>Max Expected Arrival Delay: {option.arrivalDelay.upperConfidenceBound} min</li>
                </ul>
            </div>
        </div>
    )
}

export default InfoCard;