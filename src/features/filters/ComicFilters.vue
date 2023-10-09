<script setup>
defineProps({
  genres: Array,
  completions: Array,
  contentRatings: Array,
  audioAvailabilities: Array
})

const emit = defineEmits([
  'onGenresShow',
  'onCompletionsShow',
  'onContentRatingsShow',
  'onAudioAvailabilitiesShow'
])
</script>

<template>
  <div class="dropdowns row-middle gap-x-[20px]">
    <!-- Genres -->
    <div class="p-1">
      <v-dropdown class="dropdown" placement="bottom-start">
        <button class="select-button primary" @click="emit('onGenresShow')">
          <span>Genre</span>
          <i class="icon icon-cheveron-down icon--s24"></i>
        </button>
        <template #popper>
          <div class="dropdown-popper min-w-[221px]">
            <div class="body-1 font-bold">Genre</div>
            <div
              v-if="genres.length > 0"
              v-for="(genre, index) in genres"
              :key="index"
              class="dropdown-item"
            >
              <div class="row-middle justify-between w-full">
                <div class="row-middle gap-x-3">
                  <i class="icon icon-box icon--s14"></i>
                  <span class="body-2">{{ genre }}</span>
                </div>
                <span class="body-2">123</span>
              </div>
            </div>
          </div>
        </template>
      </v-dropdown>
    </div>

    <!-- Completion -->
    <div class="p-1">
      <v-dropdown class="dropdown" placement="bottom-start">
        <button class="select-button primary" @click="emit('onCompletionsShow')">
          <span>Completion</span>
          <i class="icon icon-cheveron-down icon--s24"></i>
        </button>
        <template #popper>
          <div class="dropdown-popper min-w-[221px]">
            <div class="body-1 font-bold">Completion</div>
            <div
              v-if="completions.length > 0"
              v-for="(completion, index) in completions"
              :key="index"
              class="dropdown-item"
            >
              <div class="row-middle justify-between w-full">
                <div class="row-middle gap-x-3">
                  <i class="icon icon-box icon--s14"></i>
                  <span class="body-2">{{ completion }}</span>
                </div>
                <span class="body-2">123</span>
              </div>
            </div>
          </div>
        </template>
      </v-dropdown>
    </div>

    <!-- Content Rating -->
    <div class="p-1">
      <v-dropdown class="dropdown" placement="bottom-start">
        <button class="select-button primary" @click="emit('onContentRatingsShow')">
          <span>Content Rating</span>
          <i class="icon icon-cheveron-down icon--s24"></i>
        </button>
        <template #popper>
          <div class="dropdown-popper min-w-[221px]">
            <div class="body-1 font-bold">Content Rating</div>
            <div
              v-if="contentRatings.length > 0"
              v-for="(contentRating, index) in contentRatings"
              :key="index"
              class="dropdown-item"
            >
              <div class="row-middle justify-between w-full">
                <div class="row-middle gap-x-3">
                  <i class="icon icon-box icon--s14"></i>
                  <span class="body-2">{{ contentRating }}</span>
                </div>
                <span class="body-2">123</span>
              </div>
            </div>
          </div>
        </template>
      </v-dropdown>
    </div>

    <!-- Audio Availability -->
    <div class="p-1">
      <v-dropdown class="dropdown" placement="bottom-start">
        <button class="select-button primary" @click="emit('onAudioAvailabilitiesShow')">
          <span>Audio Availability</span>
          <i class="icon icon-cheveron-down icon--s24"></i>
        </button>
        <template #popper>
          <div class="dropdown-popper min-w-[221px]">
            <div class="body-1 font-bold">Audio Availability</div>
            <div
              v-if="audioAvailabilities.length > 0"
              v-for="(audioAvailability, index) in audioAvailabilities"
              :key="index"
              class="dropdown-item"
            >
              <div class="row-middle justify-between w-full">
                <div class="row-middle gap-x-3">
                  <i class="icon icon-box icon--s14"></i>
                  <span class="body-2">{{ audioAvailability }}</span>
                </div>
                <span class="body-2">123</span>
              </div>
            </div>
          </div>
        </template>
      </v-dropdown>
    </div>
  </div>
</template>
