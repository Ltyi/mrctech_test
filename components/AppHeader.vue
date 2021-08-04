<template>
  <header class="header">
    <!-- LOGO -->
    <app-logo></app-logo>

    <!-- Search/Avatar -->
    <div class="header__right">
      <fa-icon :icon="['fas', 'search']" class="header__search"></fa-icon>
      <div class="header__avatar">S</div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 0 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: white;
  z-index: 10;

  &__right {
    display: flex;
    align-items: center;
  }

  &__search {
    margin-right: 20px;
    color: #747474;
    cursor: pointer;
  }

  &__avatar {
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border-radius: 50%;
    color: white;
    background-color: #826358;
    cursor: pointer;
  }
}
</style>
