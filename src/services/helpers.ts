export const retriveLocalStorage = <T>(key:string)=>{
// Trying to get data from LS by key. If no key returning ''
    const object = (localStorage.getItem(key) || '');
// if no object return {} as T
    if(!object){
        return {} as T
    }

    // parse the data
    return JSON.parse(object) as T;
}