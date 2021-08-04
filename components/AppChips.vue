<template>
  <div class="chips">
    <div class="chips__chip chips__chip--active">All</div>
    <div v-for="(item, idx) in tags" :key="idx" class="chips__chip">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTags',

  data: () => ({
    tags: [
      'Music',
      'One Piece',
      'Anime',
      'Love songs',
      'Music',
      'One Piece',
      'Anime',
      'Love songs',
      'Music',
      'One Piece',
      'Anime',
      'Love songs',
      'Music',
      'One Piece',
      'Anime',
      'Love songs'
    ]
  })
}
</script>

<style lang="scss" scoped>
.chips {
  display: flex;
  white-space: nowrap;
  padding: 16px;
  overflow-x: auto;

  &__chip {
    background-color: #f2f2f2;
    border: 1px solid rgba(0, 0, 0, 0.102);
    border-radius: 20px;
    padding: 4px 12px;
    margin-right: 8px;
    user-select: none;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &--active {
      background-color: #555;
      color: white;
    }
  }
}
</style>
