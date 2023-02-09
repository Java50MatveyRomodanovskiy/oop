import { videoConfig } from "../config/config.js"

export function checkTime(time){
    let message = (`playpack time should be from ${videoConfig.minTime} to ${videoConfig.maxTime} sec.`);
    if (time >= videoConfig.minTime && time <= videoConfig.maxTime) 
    { 
        message = '';
    }
    return message;
}