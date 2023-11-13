<script setup>
import AnalyticsCardBase from './base/AnalyticsCardBase.vue'
import NoContentBase from './base/NoContentBase.vue'
import { TitleCardAuth } from '@components/cards'
import { AppTab, TabItem } from '@components/tabs'
import { ContentSlider } from '@components/sliders'

defineProps({
  data: {
    type: Array,
    default: () => []
  },
  header: String
})

const breakpoints = {
  '(min-width: 640px)': {
    slides: { perView: 2, spacing: 24 }
  },
  '(min-width: 1024px)': {
    slides: { perView: 3, spacing: 24 }
  }
}
</script>

<template>
  <AnalyticsCardBase wrapper-classes="my-comics" :header="header">
    <template #slot-expand>
      <button class="cta">
        <i class="icon icon-arrow-forward icon--s24"></i>
      </button>
    </template>
    <div v-if="data.length > 0" class="card-contents">
      <AppTab :type="4">
        <TabItem title="Published" :active="true" />
        <TabItem title="Drafts" />
      </AppTab>
      <div class="title-list">
        <ContentSlider
          slider-item-classes="padded-4"
          :breakpoints="breakpoints"
          :data="data"
          :drag="true"
          :preview="1"
          :spacing="24"
        >
          <template #default="{ item, index }">
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
        </ContentSlider>
      </div>
    </div>
    <NoContentBase v-else title="No Published Comics Yet" />
  </AnalyticsCardBase>
</template>
