import React from 'react'

//component
import InfoCard from './InfoCard' 

//type 
import { TrainOption } from '../../Types'

type Props = {
    trainOptions: TrainOption[];
}

const Info: React.FC<Props> = ({ trainOptions }) => {
    return (
        <section>
            <div className={`list-group`}>
                
                { trainOptions.length == 0 && "No Options"}
                { trainOptions.length > 0 &&  trainOptions.map((option, index) => <InfoCard key={index} option={option} />) }

            </div>
        </section>
    )
}

export default Info;