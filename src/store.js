class _LocalStorage{
    constructor( VarName, value = null ){
        // set class name for getting correct value on Local storage
        this.name  = VarName
        // https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector/Local_Storage_Session_Storage
        // getvalue on local storage or set default number
        this.value = localStorage.getItem(this.name) || value
    }
    SetValue(value){
        localStorage.setItem(this.name,value)
        this.value = value
    }
    GetValue(){
        return this.value
    }
}
export const name = new _LocalStorage('name','')
export const AccessLevel = new _LocalStorage('AccessLevel', 0)
export const IsLogin = new _LocalStorage('IsLogin',0)
