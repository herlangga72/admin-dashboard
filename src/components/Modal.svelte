<script>
    import {
      ComposedModal,
      ModalHeader,
      ModalBody,
      ModalFooter,
    } from "carbon-components-svelte";
  
    let Modal,label,title,tombol
  </script>
  
  <ComposedModal open>
    <ModalHeader label={label} title={title} />
    <ModalBody>
        <slot name="body">

        </slot>
    </ModalBody>
    <ModalFooter primaryButtonText={tombol} />
  </ComposedModal>