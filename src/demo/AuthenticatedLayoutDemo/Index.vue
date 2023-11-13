<script setup>
import Grid from 'vue-virtual-scroll-grid'
import { AuthenticatedLayout } from '@layouts'
import { TitleCardAuth } from '@components/cards'
import { AppTab, TabItem } from '@components/tabs'
import { title } from '@stores/sample'

const pageProvider = async (pageNumber, pageSize) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(new Array(pageSize).fill(title)), 1000)
  })
}
</script>

<template>
  <AuthenticatedLayout>
    <div class="hidden sm:row-middle justify-between mb-[33px]">
      <AppTab class="gap-x-[30px]">
        <TabItem title="Published" :badge-content="5" :active="true" />
        <TabItem title="Draft" :badge-content="8" />
        <TabItem title="Archived" :badge-content="9" />
      </AppTab>
      <div class="row-middle gap-x-5">
        <button class="btn btn-md btn-primary">Create Title</button>
      </div>
    </div>
    <Grid
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-[30px]"
      :length="9"
      :page-provider="pageProvider"
      :page-size="6"
    >
      <template #probe="{ style }">
        <div :style="[style, { width: '326px', height: '234px' }]"></div>
      </template>
      <template #default="{ item, style, index }">
        <TitleCardAuth
          :id="`auth${index}`"
          :image="`${item.image}${index}`"
          :title="item.title"
          :genres="index == 2 ? null : item.genres"
          :views="item.views"
          :likes="item.likes"
          :books="item.books"
          :chapters="item.chapters"
          :pages="item.pages"
          :first-step="100"
          :second-step="60"
          :style="style"
          :third-step="20"
          :key="index"
        >
          <template #slot-card-image>
            <v-dropdown class="dropdown" placement="bottom-start">
              <button class="btn btn-opac btn-round">
                <i class="icon icon-more-vert icon--s20"></i>
              </button>
              <template #popper>
                <div class="dropdown-popper type-2">
                  <div class="dropdown-item">
                    <i class="icon icon-visibility icon--s16"></i>
                    <div class="text-body-2">View Preview</div>
                  </div>
                  <div class="dropdown-item">
                    <i class="icon icon-edit icon--s16"></i>
                    <div class="text-body-2">Edit Title</div>
                  </div>
                  <div class="dropdown-item">
                    <i class="icon icon-settings icon--s16"></i>
                    <div class="text-body-2">Manage Episodes</div>
                  </div>
                  <div class="divider"></div>
                  <div class="dropdown-item">
                    <i class="icon icon-block icon--s16"></i>
                    <div class="text-body-2">Unpublish</div>
                  </div>
                  <div class="dropdown-item">
                    <i class="icon icon-delete icon--s16"></i>
                    <div class="text-body-2">Archive</div>
                  </div>
                </div>
              </template>
            </v-dropdown>
          </template>
        </TitleCardAuth>
      </template>
    </Grid>
  </AuthenticatedLayout>
</template>
