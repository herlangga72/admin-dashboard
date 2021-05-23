<script>
  //UI
  import {
    Row,
    Column,
    Tile,
    AspectRatio,
  } from "carbon-components-svelte";
  
  //Variable
  let user="Herlangga";
</script> 
<Row>
  <Column>
    <AspectRatio ratio='4x3'>
      <Tile class="h-full">
        <Tile>
          <h1>Selamat Datang, {user}</h1>
        </Tile>
      </Tile>
    </AspectRatio>
  </Column>
</Row>
