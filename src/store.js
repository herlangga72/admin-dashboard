import { writable } from 'svelte/store';
class _LocalStorage{
    constructor( ValueName, value = null ){
        this.name  = ValueName;
        this.value = localStorage.getItem(ValueName) || value;
    }
    SetValue(value){
        localStorage.setItem(this.name,value)
        this.value = value;
    }
    GetValue(){
        return this.value;
    }
}
export const name = new _LocalStorage('name','')
export const AccessLevel = new _LocalStorage('AccessLevel', 0)
export const IsLogin = new _LocalStorage('IsLogin',0)
