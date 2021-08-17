<script>
    import { 
		DataTable, 
		Button, 
		OverflowMenu, 
		OverflowMenuItem,
		Toolbar,
		ToolbarContent,
		ToolbarSearch,
		Checkbox,
		Loading,
		Pagination
    } from "carbon-components-svelte"
	import Modal from './Modal.svelte'
	// setting up variable data for table search valu and response from server
  	let rowData = []		// collect data 
	let searchValue = ''	// search bar value
	let staticData			// collect data local. reduce server fetch on search
	let searchKey = 'uname'	// dictionary key used on search change it according to usage
	let totalData 
	let pageSize = 5
	let page=1
	let loading=1
	let tableHeader
	let searchOnServer
	let open = false
	console.log(import.meta.env.VITE_SERVER)
	async function getTotalUser() {
		totalData = await fetch(import.meta.env.VITE_SERVER+'/User/TotalData',{method:'POST'})
		.then((response) => response.json()).then((datas) => {return datas[0]["Value"]})
	} 
	async function getData() {
		// edit this to contain current page information
		let calc=(page-1)*pageSize+1
		let ToServer={
            method: "post",
            headers: {
                'Accept': "application/json",
                'Content-type': "application/json"
            },
            body: JSON.stringify({
				id:calc,
				Size: pageSize
            })
        }
		rowData = await fetch(import.meta.env.VITE_SERVER+'/User/Data',ToServer)
		.then((response) => response.json()).then((datas) => {return datas})
		loading = 0
		staticData = rowData
		search()
	}
	// Function the search bar used
    function search() {
		//TODO add search on server
		// Require : Search result, totalSearch, Optional Feature is paging required?
		// console.log(searchOnServer)
		if (searchOnServer){
			//Set total result unknown, bump the pageSizes to 1000, get the data
		}
		rowData = staticData
		if (searchValue != ""){
			rowData = staticData.filter( data => data[searchKey].includes(searchValue.toLowerCase()))
		}
    }
    tableHeader=[
        { key: "id", value: 'Index' },
        { key: "uname", value: 'Nama' }, 
        { key: "accessLevel", value: 'Level Akses' },
        { key: "overflow", value:'Options' },
    ]
	//Initialize data
	getData()
	getTotalUser()
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
		headers={tableHeader}
		rows={rowData}
		sizes='compact' >
		<Toolbar size="sm">
			<ToolbarContent>
				<ToolbarSearch bind:value={searchValue} on:change={search}/>
				<div class="px-4">
					<Checkbox bind:checked={searchOnServer} labelText="Search on Server" />
				</div>
				<Button on:click={() => open=!open}>Create New User</Button>
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
	<Pagination 
		totalItems={totalData}
		pageSizes={[5, 10, 20, 30]} 
		bind:pageSize={pageSize} 
		bind:page={page} 
		on:update={getData}
	/>
	<Modal bind:open={open}/>
{/if}