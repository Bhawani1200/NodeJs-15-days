import {format, formatDate} from 'date-fns'
const customDateFormat=(date,patter)=>{
    return formatDate(date,patter);

};
export default  customDateFormat;