<script>
// herlangga pass:1
    import { goto, metatags } from '@roxi/routify'
    import { name,IsLogin } from './../../store.js'
    metatags.title = 'Login'
    if (IsLogin.GetValue()==1){
        $goto('./../dashboard')
    }
    let Username,Password
    function mod_login(){
        let ToServer={
            method: "post",
            headers: {
                'Accept': "application/json",
                'Content-type': "application/json"
            },
            body: JSON.stringify({
                uname: Username,
                pass: Password
            })
        }
        fetch(import.meta.env.VITE_SERVER+'/login', ToServer)
        .then(function(response){
            if( !response.ok){
                //add error password / user error here
                throw Error (response.statusText)
            }
            else{
                name.SetValue(Username)
                IsLogin.SetValue(1)
                $goto('./../dashboard')
            }
        })
        // this will catch the error if it thrown in line 19
        .catch(error => console.log("there was an error --> " + error))         
    }
</script>
<div>
    <div>Login</div>
</div>
<div>
    <div>Username</div>
    <input bind:value={Username} type=text>
    <div>Password</div>
    <input bind:value={Password} type=password>
    <br>
    <button on:click={mod_login} >Login</button>
</div>
