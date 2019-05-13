<script>
  export default {
    name: 'modal',
    props: {
      modalname: String,
      color: String
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            {{ modalname }}
            
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            footer

            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
              Close me!
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #111629;
    /*display: flex;*/
    justify-content: center;
    align-items: center;
  }
  .modal {
    /*background: rgb(135, 186, 215);*/
    /*box-shadow: 2px 2px 20px 1px;*/
    overflow-x: auto;
    /*display: flex;
    flex-direction: column;*/
    width: 1000px;
    height: 600px;
    font-family: "Chivo";
    font-size: 130%;

  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: rgb(235, 247, 245);
    justify-content: space-between;
  }
  .btn-close {
    border: none;
    font-size: 40px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #111629;
    background: transparent;
    font-size: 130%;
  }
</style>