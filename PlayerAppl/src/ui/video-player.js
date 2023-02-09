//import { videoConfig } from "../config.js";

export class VideoPlayer {
    #videoElement

    constructor(idParentForm) {
        const parentFormElement = document.getElementById(idParentForm);
        if (!parentFormElement) {
            throw `wrong parent id ${idParentForm}`;
        }
        this.#videoElement = document.getElementById("video");
    }
    getUrl(playData){
        this.#videoElement.src = playData[1];
    }
    startPlayer(){
        this.#videoElement.play();
    }
    stopPlayer(){
        this.#videoElement.pause();
        this.#videoElement.currentTime = 0;
        this.#videoElement.src = '';
    }

}