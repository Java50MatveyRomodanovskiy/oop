export function getRandomNumber(min, max){
    return min + Math.trunc(Math.trunc(Math.random() * (max - min)));
}