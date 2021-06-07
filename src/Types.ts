// delay info
export type ArrivalDelay = {
    predictedDelay: number;
    lowerConfidenceBound: number;
    upperConfidenceBound: number;
    confidencelevel: number;
}

// train option
export type TrainOption = {
    departureStation: string;
    destinationStation: string;
    plannedDepartureTime: string,
    plannedArrivalTime: string,
    arrivalDelay: ArrivalDelay;
}

// fetch delay params
export type DelayParams = {
    departureStation:string;
    destinationSataion:string;
    rideTime:string;
}