<script>
  import Breadcrumb from "carbon-components-svelte/src/Breadcrumb/Breadcrumb.svelte";
  import BreadcrumbItem from "carbon-components-svelte/src/Breadcrumb/BreadcrumbItem.svelte";
import Tile from "carbon-components-svelte/src/Tile/Tile.svelte";
  let splitedLink=location.href.split("/").slice(4,)
  let links=""
  function makeLink(partititon) {
    links+="/"+partititon
    return links
  }
</script>
<Tile class="bg-gray-200 rounded-t-lg">
  <Breadcrumb noTrailingSlash>
    <BreadcrumbItem href="/app">Home</BreadcrumbItem>
    {#if splitedLink}
      {#each splitedLink as link}
      <BreadcrumbItem href={makeLink(link)}>{link}</BreadcrumbItem>
      {/each}
    {/if}
  </Breadcrumb>
</Tile>