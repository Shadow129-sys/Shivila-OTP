export function getLocalStorage(strParam) {
    return JSON.parse(localStorage.getItem(strParam));
}