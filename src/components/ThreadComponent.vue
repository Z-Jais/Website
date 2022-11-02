<template>
  <div class="thread">
    <slot></slot>
  </div>
</template>

<style>
.thread {
  margin: 20px auto 0;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.thread-container {
  flex: 1;
  margin: 0 20px;
  line-height: var(--line-height);
  font-size: 17px;
  width: 100%;
  text-align: justify;
}

img {
  border-radius: 5px;
  width: 100%;
  border: 1px solid var(--light);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .thread {
    flex-direction: column;
    margin: 0;
  }

  .thread-container {
    margin: 20px 0 0
  }
}
</style>