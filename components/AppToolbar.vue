<template>
  <footer class="toolbar">
    <div class="contaner">
      <div class="row">
        <div v-for="item in tools" :key="item.name" class="col-3">
          <div class="toolbar__box">
            <fa-icon :icon="item.icon" class="toolbar__icon"></fa-icon>
            <span class="toolbar__name">{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppToolbar',

  data: () => ({
    tools: [
      { icon: ['fas', 'home'], name: '首頁' },
      { icon: ['fab', 'hotjar'], name: '發燒影片' },
      { icon: ['fas', 'hdd'], name: '訂閱內容' },
      { icon: ['far', 'play-circle'], name: '媒體庫' }
    ]
  })
}
</script>

<style lang="scss" scoped>
.toolbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 48px;
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.102);

  &__box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 48px;
    padding: 12px;
    cursor: pointer;
  }

  &__icon {
    font-size: 18px;
  }

  &__name {
    font-size: 12px
  }
}
</style>
