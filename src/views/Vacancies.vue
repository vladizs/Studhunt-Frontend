<template>
  <div class="container">
    <div class="page__title">Поиск работы</div>
    <div class="page__description">
      Поиск вакансий, проектов, разработок и т.д.
    </div>

    <div class="content">
      <div class="content__posts">
        <vacancy-post />
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
import VacancyPost from '../components/VacancyPost.vue';

export default {
  components: {
    Filters,
    VacancyPost,
  },
};
</script>
