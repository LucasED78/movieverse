<template>
  <div class="loader"></div>
</template>

<style scoped>
  .loader {
    position: relative;
    width: 50px;
    height: 50px;
    border: .4rem solid rgba(109, 109, 249, 0.795);
    border-radius: 100%;
    margin: auto;
  }

  .loader::before {
    content: '';
    width: inherit;
    height: inherit;
    position: absolute;
    top: -6px;
    left: -6px;
    border: .4rem solid transparent;
    border-radius: 100%;
    border-top-color: rgba(109, 109, 249);
    animation: spinner 1s linear infinite;
  }

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>