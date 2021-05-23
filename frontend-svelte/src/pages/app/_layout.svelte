<script>
  //UI
  import {
    SideNav,
    SideNavItems,
    SideNavLink,
    SideNavDivider,
    Content,
    Grid,
    Header,
    SkipToContent
  } from "carbon-components-svelte"; 
  //Icons
  import { 
    UserMultiple16, 
    Account16,
    Home16,
    Logout16
  } from "carbon-icons-svelte";
  //Variable
  let isSideNavOpen = false;
  function logout() {
    
  }

</script>

<Header company={import.meta.env.VITE_APP_NAME} platformName="Online Systems" href='/app' bind:isSideNavOpen>
  <div slot="skip-to-content">
    <SkipToContent />
  </div>
</Header>
<SideNav bind:isOpen={isSideNavOpen} class="h-full">
  <SideNavItems>
    <SideNavLink text="Home" href='/app' icon={Home16}/>
    <SideNavDivider />
    <SideNavLink text="Hutang" href='/app/hutang/' icon={Account16}/>
    <SideNavDivider />
    <SideNavLink text="User Management" href="/app/UserManagement/" icon={UserMultiple16} />
    <SideNavDivider />
    <SideNavLink text="Logout" on:click={logout} icon={Logout16} />
  </SideNavItems>
</SideNav>
<Content>
  <Grid>
    <slot>
    </slot>
  </Grid>
</Content>

