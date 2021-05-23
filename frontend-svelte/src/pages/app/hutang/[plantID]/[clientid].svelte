<script>
  import {DataTable, Tab, Tabs, TabContent} from "carbon-components-svelte";
  import {Button} from 'carbon-components-svelte';
  import DatePicker from "carbon-components-svelte/src/DatePicker/DatePicker.svelte";
  import DatePickerInput from "carbon-components-svelte/src/DatePicker/DatePickerInput.svelte";
  import {Content,Grid,Row,Column} from "carbon-components-svelte"
  import Tile from "carbon-components-svelte/src/Tile/Tile.svelte";
  export let clientid;
  let startDate;
  let endDate;
  let data=JSON.parse('[{"Id": 1,"Nplant": "BP NGASEM","Sa": 0,"Debet": 2000,"Kredit": 24444,"Saldo": -22444}]')
  function test() {
    console.log(startDate,endDate);
  }
</script>
<Content>
  <Grid>
    <Row class="text-sm">
      <Column>
        <DatePicker short size='sm' datePickerType="single">
          <DatePickerInput value={startDate} labelText="Tanggal Mulai" placeholder="dd/mm/yyyy" />
        </DatePicker>
      </Column>
      <Column>
        <DatePicker  size='sm' datePickerType="single">
          <DatePickerInput bind:value={endDate} labelText="Tanggal Akhir" placeholder="dd/mm/yyyy" />
        </DatePicker>
      </Column>      
      <Column class="">
        <Button size="small" class="m-auto" on:click={test}>Search</Button>
      </Column>
    </Row>
  </Grid>
</Content>
<Tile>
  Detail Plant ID {clientid}
  <!-- <Tabs size='small' type='container'>
    <Tab label='Tabel' />
    <Tab label='Graph' />
    <div slot='content'>
      <TabContent> -->
        <DataTable class='overflow-x-auto'
            size="short"
            sortable
            headers={
                [
                  { key: 'Id', value: 'No' }, 
                  { key: 'Nplant', value: 'Nomer Plant' }, 
                  { key: 'Sa', value: 'Saldo Awal' }, 
                  { key: 'Debet', value: 'Debet' },
                  { key: 'Kredit', value: 'Kredit' },
                  { key: 'Saldo', value: 'Saldo Akhir' },
                  { key: "overflow", empty: true }
                ]
              }
            rows= {data}>
            <span slot="cell" let:cell>
              {#if cell.key === 'overflow'}
                <Button kind="ghost" size='small'>Details</Button>
              {:else}
                {cell.value}
              {/if}
            </span>
          </DataTable>
      <!-- </TabContent>
      <TabContent>

      </TabContent>
    </div>
  </Tabs> -->
</Tile>