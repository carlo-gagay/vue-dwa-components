<script setup>
import 'floating-vue/dist/style.css'
import { AuthenticatedLayout } from '@components/layouts'
import { TitleCardAuth } from '@components/cards'
import { AppTab, AppTabItem } from '@components/tabs'
import { IconDelete, IconEdit, IconSettings, IconVisibility } from '@components/svgs'

const title = {
  image: 'https://picsum.photos/20',
  title: 'Title name goes right here and in 2nd line too but not more than that okokokokokoko...',
  genres: {
    data: ['Comedy', 'Drama']
  },
  views: '105k',
  likes: '100k',
  books: 20,
  chapters: 129,
  pages: 1100
}
</script>

<template>
  <AuthenticatedLayout>
    <div class="hidden sm:row-middle justify-between mb-[33px]">
      <AppTab>
        <AppTabItem title="Published" :badge-content="5" :active="true" />
        <AppTabItem title="Draft" :badge-content="8" />
        <AppTabItem title="Archived" :badge-content="9" />
      </AppTab>
      <div class="row-middle gap-x-5">
        <button class="btn primary md">Create Title</button>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-[30px]">
      <TitleCardAuth
        v-for="n in 12"
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
            <button class="btn opac round">
              <i class="icon icon-dots-horizontal-triple"></i>
            </button>
            <template #popper>
              <div class="dropdown-popper">
                <div class="dropdown-item">
                  <IconVisibility class="text-[#BDB9B4] w-4 h-4" />
                  View Preview
                </div>
                <div class="dropdown-item">
                  <IconEdit class="text-[#BDB9B4] w-4 h-4" />
                  Edit Title
                </div>
                <div class="dropdown-item">
                  <IconSettings class="text-[#BDB9B4] w-4 h-4" />
                  Manage Episodes
                </div>
                <div class="divider"></div>
                <div class="dropdown-item">
                  <IconDelete class="text-[#BDB9B4] w-4 h-4" />
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
