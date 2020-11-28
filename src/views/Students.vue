<template>
  <div class="container">
    <div class="page__title">Поиск студентов</div>
    <div class="page__description">
      Поиск студентов/групп студентов для подработки, стажировки и т.д.
    </div>

    <div class="content">
      <div class="content__posts">
        <student-group-post />
      </div>
      <filters />
    </div>

  </div>
</template>

<style lang="scss" scoped>

.page__title {
  font-size: 36px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  margin-top: 24px;
  margin-left: 45px;
}

.page__description {
  font-size: 18px;
  margin-top: 12px;
  margin-left: 45px;
}

.content {
  display: flex;
  margin-left: 45px;
}

.content__posts {
  width: 705px;
  margin-right: 60px;
}

</style>

<script>
import Filters from '../components/Filters.vue';
import StudentGroupPost from '../components/StudentGroupPost.vue';

export default {
  components: {
    Filters,
    StudentGroupPost,
  },
};
</script>
