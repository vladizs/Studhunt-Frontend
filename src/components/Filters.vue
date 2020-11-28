<template>
  <div class="content__filters">

        <div class="filters__region">
          <div class="filter_title">
            Регион
          </div>

          <div class="filter_filters">
            <div class="filter filter_region">
              <div class="region_name name">Алматы</div>
              <div class="region_results results">84</div>
            </div>
            <div class="filter filter_region">
              <div class="region_name name">Нур-Султан</div>
              <div class="region_results results">22</div>
            </div>
            <div class="filter filter_region">
              <div class="region_name name">Шымкент</div>
              <div class="region_results results">19</div>
            </div>
            <div class="filter show_more">
              Еще 15
            </div>
          </div>

        </div>

        <div class="filters__worktype">
          <div class="filter_title">
            Тип работы
          </div>

          <div class="filter_filters">
            <div class="filter filter_worktype">
              <div class="worktype_name name">Подработка</div>
              <div class="worktype_results results">77</div>
            </div>
            <div class="filter filter_worktype">
              <div class="worktype_name name">Стажировка</div>
              <div class="worktype_results results">23</div>
            </div>
            <div class="filter show_more">
              Еще 11
            </div>
          </div>
        </div>

        <div class="filters__employment">
          <div class="filter_title">
            Тип занятости
          </div>
        </div>
        <div class="filters__schedule">
          <div class="filter_title">
            График работы
          </div>
        </div>
      </div>
</template>

<style lang="scss" scoped>

.content__filters {
  width: 210px;
  box-shadow: .3px .3px 1px 1px rgba(0, 0, 0, .25);
  padding: 12px;
  border-radius: 12px;
}

.filter_title {
  font-weight: 500;
}

.filter_filters > .filter{
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  margin-left: 6px;
}

.filter_title {
  margin-top: 12px;
}

.filters__region .filter_title {
  margin-top: 0;
}

.filter .name {
  color: #66717E;
}

.filter .results {
  color: #8994A1;
}

.filter.show_more {
  color: #8994A1;
}

.filter {
  cursor: pointer;
}

</style>
