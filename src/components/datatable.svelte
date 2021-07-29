<script lang=typescript>
    import { DataTable, DataTableSkeleton, Toolbar, ToolbarContent, ToolbarSearch } from "carbon-components-svelte";
    let tabel    
    //Make Class Builder for easy editing and configuring, if this continously need manual maybe it too hard to be readed 
    async function getData() {
        return await fetch('http://localhost:2000/getdata',{method:'POST'})
            .then((response) => response.json())
            .then((datas) => {return datas});
        }
    
    
    let HeaderCol=[
        { key: "id", value: 'Index' }, 
        { key: "uname", value: 'Nama' }, 
        { key: "accessLevel", value: 'Level Akses' }
    ]
    // let a
    // function Filter(data) {
    //     console.log('data masuk',a);
    //     data.filter(function (entry) {
    //     return entry.uname === 'herlangga';})
    //     tabel.rows=data
    // }
  </script>
    {#await getData()}
    <DataTableSkeleton 
    headers={HeaderCol}
    />
    {:then data}
        <DataTable
          size="short"
          sortable
          title="User Manajeman"
          description="Search Active User"
          headers={HeaderCol}
          rows={data}
          sizes='small'
          bind:this={tabel}
        >
        <!-- <Toolbar size="sm">
            <ToolbarContent>
              <ToolbarSearch persistent tabindex='1' bind:value={a} on:change={() => Filter(data)}/>
            </ToolbarContent>
          </Toolbar> -->
        </DataTable>
    {/await}  
        
  <!-- {/await} -->