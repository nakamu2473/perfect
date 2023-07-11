<template>
    <div class="item">
      <i>
        <slot name="icon"></slot>
      </i>
      <div class="details">
        <h3>
          <slot name="title"></slot>
        </h3>
        <slot name="heading"></slot>
      </div>
    </div>
  </template>
  
  <style scoped>
  
  .details {
    flex: 1;
    /* margin-left: 1rem; */
  }
  .item {
    position: relative;
    margin-top: 1;
    margin-bottom: 1;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
}
  
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
  }
  
  i {
      /* top: calc(50% - 25px); */
      left: 0px;
      position: absolute;
      /* border: 1px solid var(--color-border); */
      background: var(--color-background);
      /* border-radius: 8px; */
      /* width: 10px; */
      /* height: 10px; */
  }
  
  
  
  </style>