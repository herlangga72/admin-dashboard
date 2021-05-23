<script>
  // UI
  import {
Button,
FluidForm,
PasswordInput,
Select,
SelectItem,
TextInput,
    Tile
  } from 'carbon-components-svelte';

  import { 
  Save16
  } from "carbon-icons-svelte";

  export let userID;
  let AccessLevel="0"
  let Username
  let Password
</script>
<Tile class='space-y-2 h-full'>
  <h1 class='text-lg'>Add User</h1>
  <TextInput size='sm' labelText='Username' />
  <PasswordInput size='sm' labelText='Password' />
  <PasswordInput size='sm' labelText='Retype Password' />
  <Select size='sm' selected={AccessLevel}>
    <SelectItem value="0" text="Pilih Level Otoritas" disabled hidden />
    <SelectItem value='User' text='User'/>
    <SelectItem value='Admin' text='Admin'/>
  </Select>
  <Button size='small' icon={Save16}>Save</Button>
</Tile>