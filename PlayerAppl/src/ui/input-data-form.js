import { videoConfig } from "../config/config.js";
import { checkTime } from "../service/checkTime.js";

export class DataForm {
    #formElement;
    #inputElement;
    #selectElement;
    constructor(idParentForm) {
        const parentFormElement = document.getElementById(idParentForm);
        if (!parentFormElement) {
            throw `wrong parent id ${idParentForm}`;
        }
        parentFormElement.innerHTML = `
        <form id="input-form">
            <div class="two-inputs">
            <input required type="text" id="playBackTime"placeholder="time from ${videoConfig.minTime} to ${videoConfig.maxTime} sec." class="form-input">
            <select required id="video-selector">
            </select>
            </div>
            <div class="form-buttons">
                <button type="submit">Start</button>
                <button type="reset">Reset</button>
            </div>
        </form> `
        this.#formElement = document.getElementById("input-form");
        this.#inputElement  = document.getElementById("playBackTime");
        this.#selectElement = document.getElementById("video-selector")
        let optionHtml = '<option value="">Choose option</option>' ;
         videoConfig.videoLinks.forEach((e,i) => {
            optionHtml += `<option value="${e}">Video${i+1}</option>`;
            return optionHtml;
        });
        this.#selectElement.innerHTML = optionHtml;
        this.#formElement.addEventListener('reset', (event) => {
            event.preventDefault();
            this.#formElement.reset();
            this.#inputElement.value ='';
            this.#selectElement.value = '';
        })
    }
   
addFormHandler(handlerFun) {
    this.#formElement.addEventListener('submit', (event) => {
    event.preventDefault(); //canceling default handler of "submit"
    if (checkTime(this.#inputElement.value) === ''){
        const playData = [];
        playData.push(this.#inputElement.value);
        playData.push(this.#selectElement.value);
        this.#formElement.reset();
        this.#inputElement.value ='';
        this.#selectElement.value = '';
        handlerFun(playData);
    }
    else {
        alert(checkTime(this.#inputElement.value));
    }
});

   

}

}

