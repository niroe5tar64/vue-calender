<template>
  <section class="contents-container">
    <header>
      <slot name="title">
        <!-- ここにコンテンツタイトルが挿入される -->
      </slot>
    </header>

    <main>
      <div class="calender">
        <slot>
          <!-- ここにカレンダーメインが挿入される -->
        </slot>
      </div>
      <div class="side-contents">
        <slot name="side-contents">
          <!-- ここにサイドコンテンツが挿入される -->
        </slot>
      </div>
    </main>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section.contents-container {
  display: block;
  width: 280px;
  margin: 0 auto;
}
</style>
