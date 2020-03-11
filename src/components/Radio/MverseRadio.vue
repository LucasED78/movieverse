<template>
  <div>
    <input class="radio" :id="identifier" type="radio" :name="name">
    <label :for="identifier" @click="radioClickedHandler">
      {{ content }}
    </label>
  </div>
</template>

<script>
  export default {
    props: {
      content: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      identifier: {
        type: String,
        required: true
      },
      radioClickedHandler: {
        type: Function,
        default: () => {}
      }
    }
  }
</script>

<style scoped>
  .radio { opacity: 0; }

  label {
    content: '';
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #6D6EF9;
    border-radius: 100px;
    font-size: .9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.5s;
    cursor: pointer;
  }

  .radio:checked + label {
    border-color: transparent;
    color: white;
    background-color: #6D6EF9;
  }

  *:not(:first-of-type) { margin: 0 20px; }
</style>