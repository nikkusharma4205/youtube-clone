export const API_KEY = 'AIzaSyCvB4WGMqTxO3gJt2q1v9xC7sgp_pwaqGU';

export const value_convertor = (value) => {
    if (value>=1000000) 
        {
            return Math.floor(value/1000000)+"M";
        }
    else if (value>=1000)
        {
                return Math.floor(value/1000)+"K";
        }
    else {
        return value;
     }   
}
