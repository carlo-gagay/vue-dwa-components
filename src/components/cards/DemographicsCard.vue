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

const hasData = computed(() => props.data && props.data?.length > 0)

const data = {
  labels: hasData.value ? props.data.map((item) => item.name) : ['No Data'],
  datasets: [
    {
      label: 'Demographic',
      data: hasData.value ? props.data.map((item) => item.value) : [1],
      backgroundColor: hasData.value ? props.data.map((item) => item.color) : ['#EDEAE7']
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
        borderRadius: 6
      }
    }
  },
  borderWidth: 0,
  radius: '80%'
}
</script>

<template>
  <AnalyticsCardBase wrapper-classes="demographic" :header="header">
    <template #slot-expand>
      <button class="cta">
        <i class="icon icon-arrow-forward icon--s24"></i>
      </button>
    </template>
    <div class="card-contents">
      <Doughnut :data="data" :options="options" style="width: 180px; height: 180px" />
    </div>
  </AnalyticsCardBase>
</template>
