<script>
    //setting page name
    import { goto,metatags } from '@roxi/routify'
    import { IsLogin, name } from './../../store.js'
    
    metatags.title = 'Dashboard'
    
    function logoff(){
        IsLogin.update(n => 0)
        $goto('./../login')
    }

    let NameValue;
	
    name.subscribe(value => {NameValue = value;});

	const links = [
		['index', 'home'],
		['about', 'about'],
		['./admin', 'admin'],
	]

</script>
<div>
    Dashboard <br>
    username {NameValue}<br>
    
    <button on:click={logoff}>LogOff</button><br>


<nav>
	<div />
	<div>
		{#each links as [path, name]}
			<a href={path}>{name}</a> <br>
		{/each}
	</div>
</div>
