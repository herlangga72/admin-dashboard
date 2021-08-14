<script>
    import { 
		DataTable, 
		Button, 
		OverflowMenu, 
		OverflowMenuItem,
		Toolbar,
		ToolbarContent,
		ToolbarSearch,
		ToolbarMenu,
		Loading
    } from "carbon-components-svelte";
	// setting up variable data for table search valu and response from server
  	let data = []
	let search_value
	let static_data
	let target='uname'
	// Get the data by using async and await
	getData()
	async function getData() {
		data = await fetch('http://localhost:2000/getdata',{method:'POST'}).then((response) => response.json()).then((datas) => {return datas})
		loading = 0
		static_data = data
	}
	// Function the search bar used
    function search() {
		data = static_data
		if (search_value != ""){
			data = static_data.filter( data => data[target].includes(search_value.toLowerCase()))
		}
    }
    let HeaderCol=[
        { key: "id", value: 'Index' }, 
        { key: "uname", value: 'Nama' }, 
        { key: "accessLevel", value: 'Level Akses' },
        { key: "overflow", value:'Options' },
    ]
	let loading=1
</script>
{#if loading}
	<Loading />
{:else}
	<DataTable
		size="short"
		title='User Manager'
		sortable
		batchSelection
		selectable
		headers={HeaderCol}
		rows={data}
		sizes='small' >
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
{/if}