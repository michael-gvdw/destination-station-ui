import axios from 'axios';

//endpoint
import { BASE_URI, ENDPOINTS } from './Endpoints'

//type
import { DelayParams } from '../Types'


export const fetchDelays = async (params: DelayParams)=> {
    return await axios.get(`${BASE_URI}${ENDPOINTS.delay}`, { params: params})
}