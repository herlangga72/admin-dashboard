<script>
  // UI
  import {
    Button,
    DatePicker,
    DatePickerInput,
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";
  import { onMount } from "svelte";

  let startDate, endDate;
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
            <DatePickerInput value={endDate} labelText="Tanggal Akhir" placeholder="dd/mm/yyyy" />
          </DatePicker>
        </Column>      
        <Column class="">
          <Button size="small" class="m-auto" on:click={test}>Search</Button>
        </Column>
      </Row>
    </Grid>
  </Content>
  <slot>

  </slot>