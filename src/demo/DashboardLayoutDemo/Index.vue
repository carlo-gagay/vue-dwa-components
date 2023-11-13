<script setup>
import { AuthenticatedLayout } from '@layouts'
import {
  DemographicsCard,
  FinishSetupCard,
  MyComicsCard,
  TopComicsCard,
  TotalQuantityCard
} from '@components/cards'
import { demographic, myTitles, summary, topComics } from '@stores/sample'
</script>

<template>
  <AuthenticatedLayout>
    <div class="row-middle justify-between mb-[19px]">
      <div class="title-wrap">
        <div class="text-sub-heading-1">Welcome, Sasha!</div>
      </div>
      <div class="row-middle gap-x-5">
        <button class="btn btn-md btn-primary">Create Title</button>
      </div>
    </div>
    <div class="container-flex">
      <div
        class="grid grid-cols-1 lg:grid-cols-[166px_auto_auto] xl:grid-cols-[306px_296px_auto] gap-x-8 gap-y-5 overflow-x-auto"
      >
        <div class="analytics-sum-section">
          <div class="section-header">ANALYTICS</div>
          <div class="summary-section">
            <TotalQuantityCard header="Total Viewers" :value="summary.totalViewers" />
            <TotalQuantityCard header="Total Subscribers" :value="summary.totalSubscribers" />
          </div>
        </div>
        <DemographicsCard header="DEMOGRAPHIC" :data="demographic" />
        <TopComicsCard class="grow" header="TOP COMICS" :data="topComics" />
      </div>
    </div>
    <div class="container-flex mt-[31px]">
      <div
        class="grid grid-cols-1 gap-y-5"
        :class="{ 'lg:grid-cols-[auto_405px] gap-x-[30px]': !myTitles.length }"
      >
        <MyComicsCard header="MY COMICS" :data="myTitles" />
        <FinishSetupCard v-if="!myTitles.length" class="grow" header="FINISH SET UP" />
      </div>
    </div>
  </AuthenticatedLayout>
</template>
