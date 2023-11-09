<script setup>
import { AuthenticatedLayout } from '@layouts'
import { DemographicsCard, TopComicsCard, TotalQuantityCard } from '@components/cards'
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
      <div class="flex flex-col lg:flex-row gap-x-8 gap-y-5 overflow-x-auto">
        <div class="analytics-sum-section">
          <div class="section-header">ANALYTICS</div>
          <div class="summary-section">
            <TotalQuantityCard header="Total Viewers" value="0" width="306" />
            <TotalQuantityCard header="Total Subscribers" value="0" width="306" />
          </div>
        </div>
        <DemographicsCard width="296" />
        <TopComicsCard width="296" />
      </div>
    </div>
  </AuthenticatedLayout>
</template>
