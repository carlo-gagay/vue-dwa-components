<script setup>
import AnalyticsCardBase from './base/AnalyticsCardBase.vue'
import NoContentBase from './base/NoContentBase.vue'
import { TitleCardAuth } from '@components/cards'
import { AppTab, TabItem } from '@components/tabs'

defineProps({
  data: {
    type: Array,
    default: () => []
  },
  header: String
})
</script>

<template>
  <AnalyticsCardBase wrapperClasses="my-comics" :header="header">
    <template #slot-expand>
      <button class="cta">
        <i class="icon icon-arrow-forward icon--s24"></i>
      </button>
    </template>
    <div v-if="data.length > 0" class="card-contents">
      <AppTab gap="30">
        <TabItem title="Published" :active="true" :type="4" />
        <TabItem title="Drafts" :type="4" />
      </AppTab>
      <div class="title-list">
        <TitleCardAuth
          v-for="(title, index) in data"
          :id="`auth${index}`"
          :image="`${title.image}${index}`"
          :title="title.title"
          :genres="index == 2 ? null : title.genres"
          :views="title.views"
          :likes="title.likes"
          :books="title.books"
          :chapters="title.chapters"
          :pages="title.pages"
          :firstStep="100"
          :secondStep="60"
          :thirdStep="20"
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
      </div>
    </div>
    <NoContentBase v-else title="No Published Comics Yet" />
  </AnalyticsCardBase>
</template>
