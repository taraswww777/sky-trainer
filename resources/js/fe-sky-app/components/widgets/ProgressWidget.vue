<template>
  <div :class="bem()">
    <div :class="bem('title')">Прохождение курса</div>

    <div :class="bem('progress')">
      <div :class="bem('progress-top')">
        <div :class="bem('progress-number')">51%</div>

        <div :class="bem('items _flex')">
          <div :class="bem('item')">
            <div :class="bem('item-icon')">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.125 10.1665L6.91667 12.8748L13.9583 3.6665" />
              </svg>
            </div>

            <div :class="bem('item-number')">11</div>

            <div :class="bem('item-text')">Успешно завершенные</div>
          </div>
          <div :class="bem('item')">
            <div :class="bem('item-icon')">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.55273 11.9888L11.447 5.09448" />
                <path d="M11.4473 11.9888L4.55297 5.09448" />
              </svg>
            </div>

            <div :class="bem('item-number')">10</div>

            <div :class="bem('item-text')">Неуспешные / сброс</div>
          </div>
        </div>
      </div>

      <div :class="bem('progress-line')">
        <span style="width: 51%;" />
      </div>
    </div>
  </div>
</template>
<script>
import useBem from 'vue3-bem';

const name = 'CourseCompletion';
const bem = useBem(name);

export default {
  name,
  data: () => ({
    bem
  })
};
</script>
<style lang="scss" scoped>
@import "../../../../sass/media";

.course-completion {
  padding: 22px 22px 32px;
  background: linear-gradient(84.09deg, #D485F1 4.37%, #7156F8 94.11%);
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  &__title{
    font-weight: 600;
    font-size: 18px;
    line-height: 1.11;

    color: #FFFFFF;
    margin-bottom: 14px;
    width: 100%;
  }

  &__progress{
    margin-top: auto;
    width: 100%;
  }

  &__progress-number{
    font-weight: 700;
    font-size: 32px;
    line-height: 1.12;

    color: #FFFFFF;
    margin-bottom: 15px;
  }

  &__items{
    margin: -8px 0 0 -20px;
  }

  &__item{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: nowrap;
    margin: 8px 0 0 20px;

    width: calc(50% - 20px);
    min-width: 145px;
    flex-grow: 1;

    &-icon{
      width: 26px;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      flex-wrap: wrap;
      padding: 4px;
      border-radius: 50px;

      flex-shrink: 0;
      margin-right: 8px;
      border: 1px solid rgba(255, 255, 255, 0.25);

      svg{
        display: block;
        max-width: 100%;
        max-height: 100%;

        stroke: #fff;
      }
    }

    &-number{
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;

      color: #FFFFFF;
      flex-shrink: 0;
      margin-right: 8px;
      white-space: nowrap;
    }

    &-text{
      font-weight: 500;
      font-size: 12px;
      line-height: 1;
      align-self: center;

      color: #FFFFFF;
    }
  }

  &__progress-line{
    background: rgba(255, 255, 255, 0.25);
    display: block;
    height: 12px;
    border-radius: 50px;
    position: relative;
    margin-top: 21px;

    span{
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      border-radius: 50px;
      background: linear-gradient(90deg, #57F9B5 0%, rgba(0, 255, 240, 0.25) 100%);
    }
  }

  @media (min-width: $mb_small) {
    &__progress-top{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      align-content: flex-start;
      flex-wrap: nowrap;
    }

    &__progress-number{

      margin-bottom: 0;
      white-space: nowrap;
      margin-right: 20px;
    }

    &__items{
      width: 340px;
      align-self: center;
    }
  }

  @media (min-width: $mb_middle) {
    padding: 24px 24px 32px;

    &__progress-top{
      display: block;
    }

    &__progress-number{

      margin-bottom: 15px;
      margin-right: 0;
    }

    &__items{
      width: auto;
    }
  }

  @media (min-width: $mb_large) {
    &__progress-top{
      display: flex;
    }

    &__progress-number{

      margin-bottom: 0;
      margin-right: 20px;
    }

    &__items{
      width: 340px;
    }
  }
}
</style>
