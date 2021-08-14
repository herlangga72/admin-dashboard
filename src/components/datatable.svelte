<script>
    import { 
		TextInput, 
		DataTable, 
		Button, 
		DataTableSkeleton, 
		OverflowMenu, 
		OverflowMenuItem,
		Toolbar,
		ToolbarContent,
		ToolbarSearch,
		ToolbarMenu,
    } from "carbon-components-svelte";
    async function getData() {
        return await fetch('http://localhost:2000/getdata',{method:'POST'})
            .then((response) => response.json())
            .then((datas) => {return datas});
        }
	let search_value , const_data
    function search() {
		if (search_value === "") { data = const_data }
		else {
			data = const_data.filter(function(data){return data.uname == search_value})
			data = data
		}
    }
    let HeaderCol=[
        { key: "id", value: 'Index' }, 
        { key: "uname", value: 'Nama' }, 
        { key: "accessLevel", value: 'Level Akses' },
        { key: "overflow", value:'Options' },
    ]
    let data = [
		{ id: 1, uname: 'herlangga', accessLevel: 1 },
		{ id: 2, uname: '2', accessLevel: 2 }
    ]
	const_data = data
  </script>
<DataTable
  size="short"
  title='User Manager'
  description=""
  sortable
  batchSelection
  selectable
  headers={HeaderCol}
  rows={data}
  sizes='small'
>
<Toolbar size="sm">
  <ToolbarContent>
    <ToolbarSearch bind:value={search_value} on:change={search}/>
    <Button>Create New User</Button>
  </ToolbarContent>
</Toolbar>
  <span slot="cell" let:cell>
    {#if cell.key === 'overflow'}
      <OverflowMenu flipped>
        <OverflowMenuItem text="More Info" />
        <OverflowMenuItem
          href="https://cloud.ibm.com/docs/loadbalancer-service"
          text="Change Info"
        />
        <OverflowMenuItem danger text="Delete User" />
      </OverflowMenu>
    {:else}{cell.value}{/if}
  </span>
</DataTable>
  <!-- {/await} -->