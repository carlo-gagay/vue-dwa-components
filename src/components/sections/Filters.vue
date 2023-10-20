<script setup>
defineProps({
  genres: Array,
  completions: Array,
  contentRatings: Array,
  audioAvailabilities: Array
})

const emit = defineEmits([
  'selectAudioAvailability',
  'selectCompletion',
  'selectContentRating',
  'selectGenre'
])
</script>

<template>
  <div class="filter-container w-full px-10 py-2.5">
    <div class="inner row-middle justify-between">
      <div class="dropdowns row-middle gap-x-[20px]">
        <div class="p-1">
          <v-dropdown class="dropdown" placement="bottom-start" :id="1">
            <button class="select-button primary" role="button">
              <span>Genre</span>
              <i class="icon icon-cheveron-down icon--s24"></i>
            </button>
            <template #popper>
              <div class="dropdown-popper min-w-[221px]">
                <div class="text-body-1 font-bold">Genre</div>
                <div class="dropdown-item">
                  <div class="row-middle justify-between w-full">
                    <div class="row-middle gap-x-3">
                      <i class="icon icon-box icon--s14"></i>
                      <span class="text-body-2">Action</span>
                    </div>
                    <span class="text-body-2">123</span>
                  </div>
                </div>
              </div>
            </template>
          </v-dropdown>
        </div>
        <div class="p-1">
          <v-dropdown class="dropdown" placement="bottom-start" :id="2">
            <button class="select-button primary" role="button">
              <span>Completion</span>
              <i class="icon icon-cheveron-down icon--s24"></i>
            </button>
            <template #popper>
              <div class="dropdown-popper min-w-[221px]">
                <div class="text-body-1 font-bold">Completion</div>
                <div class="dropdown-item">
                  <div class="row-middle justify-between w-full">
                    <div class="row-middle gap-x-3">
                      <i class="icon icon-box icon--s14"></i>
                      <span class="text-body-2">All</span>
                    </div>
                    <span class="text-body-2">123</span>
                  </div>
                </div>
              </div>
            </template>
          </v-dropdown>
        </div>
        <div class="p-1">
          <v-dropdown class="dropdown" placement="bottom-start" :id="3">
            <button class="select-button primary" role="button">
              <span>Content Rating</span>
              <i class="icon icon-cheveron-down icon--s24"></i>
            </button>
            <template #popper>
              <div class="dropdown-popper min-w-[221px]">
                <div class="text-body-1 font-bold">Content Rating</div>
                <div class="dropdown-item">
                  <div class="row-middle justify-between w-full">
                    <div class="row-middle gap-x-3">
                      <i class="icon icon-box icon--s14"></i>
                      <span class="text-body-2">Everyone</span>
                    </div>
                    <span class="text-body-2">123</span>
                  </div>
                </div>
              </div>
            </template>
          </v-dropdown>
        </div>
        <div class="p-1">
          <v-dropdown class="dropdown" placement="bottom-start" :id="4">
            <button class="select-button primary" role="button">
              <span>Audio Availability</span>
              <i class="icon icon-cheveron-down icon--s24"></i>
            </button>
            <template #popper>
              <div class="dropdown-popper min-w-[221px]">
                <div class="text-body-1 font-bold">Audio Availability</div>
                <div class="dropdown-item">
                  <div class="row-middle justify-between w-full">
                    <div class="row-middle gap-x-3">
                      <i class="icon icon-box icon--s14"></i>
                      <span class="text-body-2">All</span>
                    </div>
                    <span class="text-body-2">123</span>
                  </div>
                </div>
              </div>
            </template>
          </v-dropdown>
        </div>
      </div>
      <div class="">
        <button class="btn btn-md-equal btn-trans-black-inline">Clear All Filters</button>
      </div>
    </div>
  </div>
</template>
