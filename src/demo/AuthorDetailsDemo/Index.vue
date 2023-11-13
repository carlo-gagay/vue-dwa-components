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
      <div class="pl-[112px] py-[51px] pr-[61px]">
        <div class="row-start gap-x-[47px]">
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
          <div class="container-flex">
            <div class="text-heading-2">Comic Series</div>
            <div class="grid grid-cols-2 gap-6 mt-5">
              <template v-for="n of 9" :key="n">
                <TitleCardBasic
                  titleClasses="text-body-2"
                  :id="`title-${n}`"
                  :image="`${title.image}${n}`"
                  :liked="n == 1"
                  :likes="title.likes"
                  :title="`${title.title} #${n}`"
                  @onClick="() => $router.push('/comics')"
                />
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ReadersLayout>
</template>
