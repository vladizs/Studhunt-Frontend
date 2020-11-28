<template>
  <div class="vacancy_post">
    <div class="vacancy_post__header">
      <div class="header__main_info">
        <div class="group_info">
          <i class="student-group"></i>
          <span class="group_members">{{ `Для работы необходимо ${member_count}` }}</span>
        </div>
        <div class="vacancy_post__title">{{ title }}</div>
      </div>
      <div class="header__price">{{ formattedPrice }}</div>
    </div>
    <div class="vacancy_post__description">{{ description }}</div>
    <div class="vacancy_post__data">
      <div class="data__date">{{ date }}</div>
      <div class="data__region">{{ region }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.vacancy_post {
  padding: 12px 24px;
  width: 705px;
  box-shadow: .3px .3px 1px 1px rgba(0, 0, 0, .25);
  border-radius: 12px;
  box-sizing: border-box;
  margin-top: 24px;
}

.vacancy_post__header {
  display: flex;
  justify-content: space-between;
}

i.student-group {
  display: block;
  width: 20px;
  height: 20px;
  background-image: url('../assets/icons/group.svg');
}

.vacancy_post__header {
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: #136995;
}

.group_info {
  display: flex;
}

.header__price {
  font-size: 24px;
  font-weight: 500;
}

span.group_members {
  margin-left: 6px;
  margin-top: 4px;
}

.vacancy_post__title {
  font-weight: 500;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  margin-top: 3px;
  color: #0F1A27;
}

.vacancy_post__education {
  color: #66717E;
  margin-top: 3px;
}

.vacancy_post__description {
  color: #353C44;
  margin-top: 6px;
}

.vacancy_post__data {
  color: #66717E;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
}

</style>

<script>
export default {
  name: 'VacancyPost',
  props: {
    member_count: {
      type: String,
      default: '7 человек',
    },
    title: {
      type: String,
      default: null,
    },
    education: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    date: {
      type: String,
      default: null,
    },
    region: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      default: 1500000,
    },
  },
  computed: {
    formattedPrice() {
      return Intl.NumberFormat('kz-KZ').format(this.price).concat(' ₸');
    },
  },
};
</script>
