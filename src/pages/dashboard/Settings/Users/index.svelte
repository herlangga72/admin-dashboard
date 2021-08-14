<script>
    // import { Button, TextInput } from "carbon-components-svelte";
    // let pass,popout
    // function click() {
    //     console.log(pass)
    // }
    // function toggle_popout() {
    //     popout=!popout
    // }
    import Tabel from "../../../../components/datatable.svelte";
    // import Modal from "../../../../components/Modal.svelte"    
</script>
<!-- <div class="flex flex-row">
    {#if popout}
        <TextInput hideLabel labelText="search" bind:value={pass} on:change={click} placeholder="Search" />
    {:else}
        <Button size='small' on:click={toggle_popout}>Search</Button>
    {/if}
</div> -->
<Tabel></Tabel>