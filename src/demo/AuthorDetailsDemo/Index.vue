<script setup>
import { defineAsyncComponent } from 'vue'
import { ReadersLayout } from '@layouts'
import { AuthorCard } from '@components/cards'
import { author, title } from '@stores/sample'

const TitleCardBasic = defineAsyncComponent(() => import('@components/cards/TitleCardBasic.vue'))
</script>

<template>
  <ReadersLayout>
    <div class="container-flex relative">
      <div class="px-4 sm:pl-[112px] py-4 sm:py-[51px] sm:pr-[61px]">
        <div class="column-middle sm:row-start gap-x-[47px]">
          <div class="py-5">
            <AuthorCard
              :address="author.address"
              :description="author.description"
              :followers="author.followers"
              :image="author.image"
              :likes="author.likes"
              :name="author.name"
              :readers="author.readers"
              :website="author.website"
            />
          </div>
          <div class="container-flex mt-[20px] sm:mt-0">
            <div class="text-heading-2">Comic Series</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
              <template v-for="n of 9" :key="n">
                <TitleCardBasic
                  titleClasses="text-body-2"
                  :id="`title-${n}`"
                  :image="`${title.image}${n}`"
                  :liked="n == 1"
                  :likes="title.likes"
                  :title="`${title.title} #${n}`"
                  @on-click="() => $router.push('/comics')"
                />
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ReadersLayout>
</template>
