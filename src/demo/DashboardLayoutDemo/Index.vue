<script setup>
import { AuthenticatedLayout } from '@layouts'
import { TotalQuantityCard } from '@components/cards'
import { AppTab, AppTabItem } from '@components/tabs'
import { title } from '@stores/sample'
</script>

<template>
  <AuthenticatedLayout>
    <div class="hidden sm:row-middle justify-between mb-[19px]">
      <div class="title-wrap">
        <div class="text-sub-heading-1">Welcome, Sasha!</div>
      </div>
      <div class="row-middle gap-x-5">
        <button class="btn btn-md btn-primary">Create Title</button>
      </div>
    </div>
    <div class="container-flex">
      <div class="flex flex-row gap-x-8">
        <div class="analytics-sum-section">
          <div class="section-header">ANALYTICS</div>
          <div class="summary-section">
            <TotalQuantityCard header="Total Viewers" value="0" width="306" />
            <TotalQuantityCard header="Total Subscribers" value="0" width="306" />
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style lang="scss">
body {
  @apply bg-[#F5F1E5] #{!important};
}

.analytics-sum-section {
  & .section-header {
    @apply text-[12px] leading-[20px] uppercase mb-[11px] text-neutral-02;
  }

  .summary-section {
    @apply flex flex-col gap-y-5;
  }
}
</style>
