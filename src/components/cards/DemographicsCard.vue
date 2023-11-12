<script setup>
import { computed, onBeforeMount } from 'vue'
import AnalyticsCardBase from './base/AnalyticsCardBase.vue'
import { Chart as ChartJS, ArcElement, Colors, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  },
  header: String
})

onBeforeMount(() => ChartJS.register(ArcElement, Colors, Tooltip, Legend))

const hasData = computed(() => props.data || props.data?.length > 0)

const data = {
  labels: props.data?.map((item) => item.name) ?? [],
  datasets: [
    {
      label: 'Demographic',
      data: props.data?.map((item) => item.value) ?? [],
      backgroundColor: props.data?.map((item) => item.color) ?? [],
      hoverOffset: 4
    }
  ]
}

const options = {
  aspectRatio: 1,
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 6,
        boxHeight: 6,
        borderRadius: 3
      }
    }
  }
}
</script>

<template>
  <AnalyticsCardBase wrapperClasses="demographic" :header="header">
    <template #slot-expand>
      <button class="cta">
        <i class="icon icon-arrow-forward icon--s24"></i>
      </button>
    </template>
    <div class="card-contents">
      <Doughnut
        v-if="hasData"
        :data="data"
        :options="options"
        style="width: 180px; height: 180px"
      />
      <div v-else class="doughnut-no-data">
        <div class="doughnut"></div>
        <div class="label">
          <div class="ellipse"></div>
          <div class="text-small-text">No Data</div>
        </div>
      </div>
    </div>
  </AnalyticsCardBase>
</template>
