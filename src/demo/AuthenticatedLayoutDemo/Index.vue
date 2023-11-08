<script setup>
import { AuthenticatedLayout } from '@layouts'
import { TitleCardAuth } from '@components/cards'
import { AppTab, AppTabItem } from '@components/tabs'
import { title } from '@stores/sample'
</script>

<template>
  <AuthenticatedLayout>
    <div class="hidden sm:row-middle justify-between mb-[33px]">
      <AppTab class="gap-x-[30px]">
        <AppTabItem title="Published" :badge-content="5" :active="true" />
        <AppTabItem title="Draft" :badge-content="8" />
        <AppTabItem title="Archived" :badge-content="9" />
      </AppTab>
      <div class="row-middle gap-x-5">
        <button class="btn btn-md btn-primary">Create Title</button>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-[30px]">
      <TitleCardAuth
        v-for="n in 12"
        :id="`auth${n}`"
        :image="`${title.image}${n}`"
        :title="title.title"
        :genres="n == 2 ? null : title.genres"
        :views="title.views"
        :likes="title.likes"
        :books="title.books"
        :chapters="title.chapters"
        :pages="title.pages"
        :firstStep="100"
        :secondStep="60"
        :thirdStep="20"
        :key="n"
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
                  View Preview
                </div>
                <div class="dropdown-item">
                  <i class="icon icon-edit icon--s16"></i>
                  Edit Title
                </div>
                <div class="dropdown-item">
                  <i class="icon icon-settings icon--s16"></i>
                  Manage Episodes
                </div>
                <div class="divider"></div>
                <div class="dropdown-item">
                  <i class="icon icon-block icon--s16"></i>
                  Unpublish
                </div>
                <div class="dropdown-item">
                  <i class="icon icon-delete icon--s16"></i>
                  Archive
                </div>
              </div>
            </template>
          </v-dropdown>
        </template>
      </TitleCardAuth>
    </div>
  </AuthenticatedLayout>
</template>

<style lang="scss">
body {
  @apply bg-[#F5F1E5] #{!important};
}
</style>
