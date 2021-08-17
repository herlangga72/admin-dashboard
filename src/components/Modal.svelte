<script>
  import {
    Button,
    ComposedModal,
    ModalHeader,
    ModalBody,
    ModalFooter,
	FormGroup,
	TextInput
  } from "carbon-components-svelte"
  export let open = false
  export let uname = undefined
  let placeholder
</script>
<ComposedModal bind:open on:submit={() => (open = false)}>
	<ModalHeader label={uname} title="Edit User" />
	<ModalBody>
		<FormGroup legendText='Test'>
			<TextInput inline labelText="User name" placeholder="Enter user name..." bind:value={placeholder} required />
			<TextInput inline labelText="Password" placeholder="Enter user name..." bind:value={placeholder} required />
			<TextInput inline labelText="Level Akses" placeholder="Enter user name..." bind:value={placeholder} required />
		</FormGroup>
	</ModalBody>
	<ModalFooter
		primaryButtonText="Proceed"
		secondaryButtons={[{ text: 'Cancel' }, { text: 'Review' }]}
		on:click:button--secondary={({ detail }) => {
		if (detail.text === 'Cancel') open = false;
		if (detail.text === 'Review') console.log('Review');
		}}
	/>
</ComposedModal>