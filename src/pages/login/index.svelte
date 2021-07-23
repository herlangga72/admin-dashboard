<script>
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
        console.log(Email,Password)
        var fromServer = fetch('http://localhost:2000/', ToServer)
        .then(function(response){
            if( !response.ok){
                throw Error (response.statusText);
            }
            return response.json();
        })
        .then(function(response) {
            console.log(response);
        })
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
