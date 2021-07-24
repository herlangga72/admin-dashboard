<script>
import { goto } from '@roxi/routify';
;
    import { IsLogin } from '../../store.js'
    let loginAuth;
	IsLogin.subscribe( value => {loginAuth = value;} );
    function authenticate(){
        if (loginAuth==1){
            return true;
        }
        else{
            return false;
        }
    }
</script>
{#if authenticate() }
    <slot />
{:else}
    {$goto('./../login')}
{/if}