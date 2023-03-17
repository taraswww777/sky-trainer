<template>
  <div :class="bem()">
    <div :class="bem('title')">Анализ голоса</div>

    <div :class="bem('items')">
      <div :class="bem('item')">
        <div :class="bem('item-top _flex')">
          <div :class="bem('item-val')">Эмоциональный</div>
          <div :class="bem('item-val')">Монотонный</div>
        </div>

        <div :class="bem('progress')">
          <div :class="bem('progress-line')">
            <span style="width: 80%;" />
          </div>

          <div :class="bem('progress-bot _flex')">
            <div :class="bem('progress-number')">82%</div>
            <div :class="bem('progress-number')">18%</div>
          </div>
        </div>
      </div>
      <div :class="bem('item')">
        <div :class="bem('item-top _flex')">
          <div :class="bem('item-val')">Внятный</div>
        <!-- <div :class="bem('item-val')">Монотонный</div> -->
        </div>

        <div :class="bem('progress')">
          <div :class="bem('progress-line')">
            <span style="width: 100%;" />
          </div>

          <div :class="bem('progress-bot _flex')">
            <div :class="bem('progress-number')">100%</div>
          <!-- <div :class="bem('progress-number')">18%</div> -->
          </div>
        </div>
      </div>
      <div :class="bem('item')">
        <div :class="bem('item-top _flex')">
          <div :class="bem('item-val')">Медленный</div>
          <div :class="bem('item-val', 'center')">Нормальный</div>
          <div :class="bem('item-val')">Быстрый</div>
        </div>

        <div :class="bem('progress')">
          <div :class="bem('progress-line', 'center')">
            <span style="width: 29%;" />
          </div>

          <div :class="bem('progress-bot _flex')">
            <div :class="bem('progress-number')">42%</div>
            <div :class="bem('progress-number', 'center')">29%</div>
            <div :class="bem('progress-number')">29%</div>
          </div>
        </div>
      </div>
      <div :class="bem('item')">
        <div :class="bem('item-top _flex')">
          <div :class="bem('item-val')">Уверенный</div>
          <div :class="bem('item-val')">Неуверенный</div>
        </div>

        <div :class="bem('progress')">
          <div :class="bem('progress-line')">
            <span style="width: 4%;" />
          </div>

          <div :class="bem('progress-bot _flex')">
            <div :class="bem('progress-number')">4%</div>
            <div :class="bem('progress-number')">96%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import useBem from 'vue3-bem';

const name = 'VoiceAnalysis';
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

.voice-analysis {
  padding: 22px 24px;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.075);
  border-radius: 8px;

  &__title{
    font-weight: 600;
    font-size: 14px;
    line-height: 1.43;
    color: #1C1C1C;
    margin-bottom: 20px;
  }

  &__item + &__item{
    margin-top: 10px;
  }

  &__item-top{
    justify-content: space-between;
    position: relative;
  }

  &__item-val{
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: #1C1C1C;
    margin-bottom: 6px;

    &--center{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &__progress-bot{
    justify-content: space-between;
    position: relative;
  }

  &__progress-line{
    height: 4px;
    border-radius: 50px;
    background: #EBEBEB;
    position: relative;

    span{
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background: #A770F5;
      display: block;
      border-radius: 50px;
    }

    &--center{
      span{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  &__progress-number{
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: #1C1C1C;
    margin-top: 6px;

    &--center{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (min-width: $mb_middle) {
    padding: 24px;
  }
}
</style>
