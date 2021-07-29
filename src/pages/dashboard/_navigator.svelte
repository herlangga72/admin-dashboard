<script>
    //setting page name
    import { goto,metatags } from '@roxi/routify'
    import { AccessLevel, IsLogin, name } from './../../store.js'
    
    metatags.title = 'Dashboard'
    
    function logoff(){
        IsLogin.SetValue(0)
        name.SetValue('')
        $goto('./../login')
    }

	const links = [
		['', 'home' , 0 ],
		['about', 'about', 0 ],
		['Settings', 'setting', 0 ],
	]

</script>
<div>
    Dashboard
    {name.value}
    <button on:click={logoff}>LogOff</button><br>
</div>

<nav>
	<div>
		{#each links as [path, name, Level]}
            {#if AccessLevel.GetValue() >= Level}
                <a href={'http://localhost:3000/dashboard/'+path}> 
                    {name} 
                </a> <br/>
            {/if}
		{/each}
	</div>
</nav>

