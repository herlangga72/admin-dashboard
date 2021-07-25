<script>
    //setting page name
    import { goto, metatags } from '@roxi/routify'
    import { name,IsLogin } from './../../store.js'
    metatags.title = 'Login'

    let Email,Password
    function mod_login(){
        let ToServer={
            method: "post",
            headers: {
                'Accept': "application/json",
                'Content-type': "application/json"
            },
            body: JSON.stringify({
                uname: Email,
                pass: Password
            })
        }
        var fromServer = fetch('http://localhost:2000/login', ToServer)
        .then(function(response){
            if( !response.ok){
                //add error password / user error here
                throw Error (response.statusText);
            }
        })
        .then(function(response) {
            $name=Email
            $IsLogin=1
            $goto('./../dashboard')
        })
        // this will catch the error if it thrown in line 19
        .catch(error => console.log("there was an error --> " + error));            
    }
</script>
<div>
    <div>Login</div>
    <div></div>
</div>
<div>
    <div>Email</div><input bind:value={Email} type=text>
    <div>Password</div><input bind:value={Password} type=password>
    <button on:click={mod_login} >Login</button>
</div>
