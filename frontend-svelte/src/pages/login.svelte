<script>
  // Request
  import axios from 'axios';
  //Icons
  import { Login16 } from "carbon-icons-svelte";
  //UI Components
  import { 
    TextInput,
    PasswordInput,
    Button 
  } from "carbon-components-svelte";

  let username, password ;

  function handleLogin() {
    axios(
      {
        method: 'post',
        url: import.meta.env.VITE_API+'auth/login/',
        data: {
          username: username,
          password: password
        }
      }
    )
    .then(
      function (response) {
        console.log(response);
        if (response.status==200){
          window.location.href = import.meta.env.VITE_WEB+'app';
        }
      }
    )
  };
</script>  

<div class="font-sans min-h-screen antialiased bg-gray-400 pt-24 pb-5">
  <div class="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
    <h1 class="font-bold text-center text-4xl text-white">{import.meta.env.VITE_APP_NAME}</h1>
    <div class="flex flex-col bg-white p-10 rounded-lg shadow space-y-6">
      <h1 class="font-bold text-xl text-center">Sign in</h1>
      <TextInput labelText="Username" name=username bind:value={username} placeholder="Username"/>
      <PasswordInput labelText="Password" name=password bind:value={password} placeholder="Password"/>
      <div class="text-center">
        <Button kind="ghost" size='small' icon={Login16} class="bg-blue-400 text-white" on:click={handleLogin}>Login</Button>
      </div>
    </div>
  </div>
</div>