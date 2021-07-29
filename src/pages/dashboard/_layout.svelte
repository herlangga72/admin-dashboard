<script>
    import { goto } from '@roxi/routify'
    import { IsLogin } from '../../store.js'
    function authenticate(){
        if (IsLogin.GetValue()==1){
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