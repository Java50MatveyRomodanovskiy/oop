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
    // async startPlayer(){
    //     try{
    //     await this.#videoElement.play();
    //     } catch(e){
    //         alert(`wrong ${e}`)
    //     }
    // }

    startPlayer(){
        this.#videoElement.play().catch(e => (alert(`wrong ${e}`)));
    }
    stopPlayer(){
        this.#videoElement.pause();
        this.#videoElement.currentTime = 0;
        this.#videoElement.src = '';
    }

}