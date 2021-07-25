<script>
    //setting page name
    import { goto,metatags } from '@roxi/routify'
    import { IsLogin, name } from './../../store.js'
    
    metatags.title = 'Dashboard'
    
    function logoff(){
        $IsLogin=0
        $name=null
        $goto('./../login')
    }

	const links = [
		['/index', 'home'],
		['/about', 'about'],
		['/admin', 'admin'],
	]

</script>
<div>
    Dashboard <br>
    username {$name}<br>
    
    <button on:click={logoff}>LogOff</button><br>


<nav>
	<div />
	<div>
		{#each links as [path, name]}
			<a href={'./dashboard'+path}>{name}</a> <br>
		{/each}
	</div>
</div>
