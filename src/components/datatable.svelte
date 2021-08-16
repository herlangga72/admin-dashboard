<script>
    import { 
		DataTable, 
		Button, 
		OverflowMenu, 
		OverflowMenuItem,
		Toolbar,
		ToolbarContent,
		ToolbarSearch,
		Loading,
		Pagination
    } from "carbon-components-svelte";
	// setting up variable data for table search valu and response from server
  	let rowData = []
	let searchValue
	let staticData
	let searchKey = 'uname'
	let totalData 
	let pageSize = 5
	let page=1
	let loading=1
	let HeaderCol
	async function getTotalUser() {
		totalData = await fetch('http://localhost:2000/User/TotalData',{method:'POST'})
		.then((response) => response.json()).then((datas) => {return datas[0]["Value"]})
		console.log(totalData)
	} 
	getTotalUser()
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
		rowData = await fetch('http://localhost:2000/User/Data',ToServer)
		.then((response) => response.json()).then((datas) => {return datas})
		loading = 0
		staticData = rowData
		search()
	}
	// Function the search bar used
    function search() {
		rowData = staticData
		if (searchValue != ""){
			rowData = staticData.filter( data => data[searchKey].includes(searchValue.toLowerCase()))
		}
    }
	getData()
    HeaderCol=[
        { key: "id", value: 'Index' }, 
        { key: "uname", value: 'Nama' }, 
        { key: "accessLevel", value: 'Level Akses' },
        { key: "overflow", value:'Options' },
    ]
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
		rows={rowData}
		sizes='small' >
		<Toolbar size="sm">
			<ToolbarContent>
				<ToolbarSearch bind:value={searchValue} on:change={search}/>
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
	<Pagination totalItems={totalData} pageSizes={[5, 10, 20, 30]} bind:pageSize={pageSize} bind:page={page} on:update={getData}/>
{/if}