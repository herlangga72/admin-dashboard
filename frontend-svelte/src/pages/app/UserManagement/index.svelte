<script>
  // UI
  import 
    {
      DataTable,
      OverflowMenu,
      OverflowMenuItem,
      Toolbar,
      ToolbarContent,
      Button,
      Tile,
      TextInput,
    } from "carbon-components-svelte";
  import { 
    UserAvatar16,
    Settings16 
    } from "carbon-icons-svelte";
    
  import { onMount } from 'svelte';

    let username='Herlangga'
  let LevelAccess='User'
  // let LevelAccess='Admin'
  let toggleChangePassword=false
  function changePassword() {
    toggleChangePassword=!toggleChangePassword
  }
</script>
<div>
  <Tile class='m-2'>
    <h1 class="md:text-xl text-lg font-extrabold"> Current Account Info </h1>
    <div class="flex justify-between flex-col md:flex-row-reverse">
      <div class='align-middle justify-center'>
        <Button size="small" icon={Settings16} on:click={changePassword}>Change Password</Button>
      </div>
      <Tile class="md:w-1/2">
        <div>
          <span class='font-bold'>Name :</span> {username}
        </div>
        <div>
          <span class='font-bold'>Level Akses :</span>  {LevelAccess} 
        </div>
        {#if toggleChangePassword==true}
          <div>
            <hr class='my-2'>
            <h1 class='font-bold' >Change Password</h1>
            <div class="flex flex-col space-y-3 mt-3">
              <TextInput inline labelText='Password' type="password" />
              <TextInput inline labelText='Retype Password' type="password" />
            </div>
          </div>
          <Button kind='secondary' size='small' icon={Settings16} class="w-52 text-sm mt-2">Change Password</Button>
        {/if}
      </Tile>
    </div>
  </Tile>
  {#if LevelAccess=='Admin'}
  <Tile class='m-2'>
    <h1 class="md:text-xl text-lg font-extrabold"> User Management Menu </h1>
    <DataTable class="overflow-x-auto"
      size='short'
      sortable
      headers=
      {
        [
          { key: 'nama', value: 'Nama' }, 
          { key: 'accesslevel', value: 'Level Akses' }, 
          { key: 'id', empty: true },
        ]
      }
      rows=
      {
        [
          { id: 'a', nama: 'User1', accesslevel:'Admin' }, 
          { id: 'b', nama: 'User2', accesslevel:'User' }, 
          { id: 'c', nama: 'User3', accesslevel:'Admin' }, 
          { id: 'd', nama: 'User4', accesslevel:'User' }, 
          { id: 'e', nama: 'User5', accesslevel:'Admin' }, 
          { id: 'f', nama: 'User6', accesslevel:'User' }
        ]
      }
    >
      <Toolbar size='sm'>
        <ToolbarContent>
          <Button icon={UserAvatar16} size='small' href='/app/UserManagement/addUser'>Create New User</Button>
        </ToolbarContent>
      </Toolbar>
      <span slot="cell" let:cell>
        {#if cell.key === 'id'}
        <OverflowMenu flipped>
          <OverflowMenuItem text="Edit" href='/app/UserManagement/{cell.value}'/>
          <OverflowMenuItem danger text="Delete"/>
        </OverflowMenu>
        {:else}
          {cell.value}
        {/if}
      </span>
    </DataTable>
  </Tile>
  {/if}
</div>
  