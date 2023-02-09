import { DataForm } from "./ui/input-data-form.js";
import { VideoPlayer } from "./ui/video-player.js";
import { sleep } from "./utils/sleep.js";
const inputForm = new DataForm('form-section');
const video = new VideoPlayer("video-section")

 async function startFunction(playData){
    video.getUrl(playData);
    video.startPlayer();
    await sleep(playData[0]*1000);
    video.stopPlayer();
}
inputForm.addFormHandler(startFunction);