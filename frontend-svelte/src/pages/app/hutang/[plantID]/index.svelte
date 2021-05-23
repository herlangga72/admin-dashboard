<script>
import { DataTable,Tile,Button, DataTableSkeleton } from "carbon-components-svelte";
import { onMount } from "svelte";
export let plantID
let data,x
onMount(async () => {
		const res = await fetch(import.meta.env.VITE_API + "api/hutang/" + plantID + '?date_start=21/04/2020&date_end=21/04/2020' );
    const respon = await res.json();
//     
    console.log(data);
    data=respon;
    x = [{ id: 'a', name: 'Load Balancer 3', protocol: 'HTTP', port: 3000, rule: 'Round robin' }, { id: 'b', name: 'Load Balancer 1', protocol: 'HTTP', port: 443, rule: 'Round robin' }, { id: 'c', name: 'Load Balancer 2', protocol: 'HTTP', port: 80, rule: 'DNS delegation' }, { id: 'd', name: 'Load Balancer 6', protocol: 'HTTP', port: 3000, rule: 'Round robin' }, { id: 'e', name: 'Load Balancer 4', protocol: 'HTTP', port: 443, rule: 'Round robin' }, { id: 'f', name: 'Load Balancer 5', protocol: 'HTTP', port: 80, rule: 'DNS delegation' }]
    console.log(x)
    console.log(data);
	});
</script>
<Tile>
  <h1 class='text-lg'>Info Plant</h1>
  {#if data === undefined}
  <DataTableSkeleton></DataTableSkeleton>
  {:else}
  <DataTable
    size="short"
    sortable
    headers={
        [
          { key: 'Nplant', value: 'Nomer Plant' }, 
          { key: 'Sa', value: 'Saldo awal' }, 
          { key: 'Debet', value: 'Debet' },
          { key: 'Kredit', value: 'Kredit' },
          { key: 'Saldo', value: 'Saldo Akhir' },
          { key: 'Id', empty: true },
        ]
      }
    rows= {[data]} class='overflow-x-auto'>

    <span slot="cell" let:cell>
      {#if cell.key === 'Id'}
        <Button kind="ghost" size='small' href='/app/hutang/{cell.value}'>Details</Button>
      {:else if cell.value === null}
        0
      {:else}  
        {cell.value}
      {/if}
    </span>
  </DataTable>
  {/if}
</Tile>