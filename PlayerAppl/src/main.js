import { DataForm } from "./ui/input-data-form.js";
import { VideoPlayer } from "./ui/video-player.js";
import { sleep } from "./utils/sleep.js";
const inputForm = new DataForm('form-section');
const video = new VideoPlayer("video-section")

const TIMEOUT = 10000;
// const promise = sleep(TIMEOUT);
// promise.then(() => console.log(`after ${TIMEOUT/1000}  sec`));
// console.log(`waiting for ${TIMEOUT/1000} seconds`)

// const fun = async () => {
//     console.log(`waiting for ${TIMEOUT / 1000} seconds`);
//     await sleep(TIMEOUT);
//     console.log(`after ${TIMEOUT / 1000}  sec`);
// }
// fun();
 async function startFunction(playData){
    video.getUrl(playData);
    video.startPlayer();
    await sleep(playData[0]*1000);
    video.stopPlayer();
}
inputForm.addFormHandler(startFunction);