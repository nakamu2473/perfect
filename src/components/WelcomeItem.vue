<template>
  <div class="details">
    <h3>
      <slot name="heading"></slot>
    </h3>
    <slot></slot>
  </div>
</template>

<style scoped>

.details {
  flex: 1;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  margin-bottom:  1rem;
  background: rgb(255, 241, 241);
  border-radius: 20% 60% 20% 50%/50% 50% 70% 60%;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

</style>