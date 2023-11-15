<script setup>
defineProps({
  alt: String,
  author: String,
  books: [Number, String],
  brandName: String,
  chapters: [Number, String],
  completion: String,
  contentRating: String,
  description: String,
  descriptionEllipsisEnabled: {
    type: Boolean,
    default: true
  },
  genres: Array,
  hasAudio: Boolean,
  id: {
    type: String,
    required: true
  },
  imgSrc: String,
  isAudioPlaying: Boolean,
  issues: [Number, String],
  likes: [Number, String],
  rating: [Number, String],
  title: String,
  showGenresInSubtitle: {
    type: Boolean,
    default: true
  },
  url: String
})

const emit = defineEmits(['onAuthorClick', 'onBookmark', 'onLike', 'onPlayAudio', 'onStartReading'])
</script>

<template>
  <div class="title-banner">
    <figure v-lazyload class="full-image">
      <img fetchpriority="high" src="/images/placeholder.png" :alt="alt" :data-url="imgSrc" />
    </figure>
    <div class="opac"></div>
    <div class="content column-middle">
      <div class="block">
        <div v-if="title" class="card-title title-banner-texts">{{ title }}</div>
        <div class="row-middle gap-x-2 sm:gap-x-4 mt-1 max-w-[430px]">
          <button
            v-if="author"
            class="card-sub-titles title-banner-texts"
            @click="emit('onAuthorClick')"
          >
            {{ author }}
          </button>
          <template v-if="showGenresInSubtitle">
            <i class="icon icon-ellipse-33 icon--s8 hideable-hidden title-banner-texts"></i>
            <div class="card-sub-titles title-banner-texts">
              <span v-for="(genre, index) in genres" :key="index">
                {{ genre }}
                <span v-if="index < genres.length - 1">,&#32;</span>
              </span>
            </div>
          </template>
          <template v-if="brandName">
            <i class="icon icon-ellipse-33 icon--s8 hideable-hidden title-banner-texts"></i>
            <span class="card-sub-titles title-banner-texts">{{ brandName }}</span>
            <i class="icon icon-information-outline icon--s20 text-neutral-02"></i>
          </template>
        </div>
        <div class="badges row-middle gap-x-[10px] mt-4 max-w-[430px]">
          <div v-if="likes" class="row-middle gap-x-[4.5px]">
            <i class="icon icon-favorite icon--s12 title-banner-texts" />
            <div class="text-caption title-banner-texts">{{ likes }}</div>
          </div>
          <div v-if="rating" class="badge badge-rate">
            <i class="icon icon-star icon--s12" />
            <div class="text-caption">{{ rating }}</div>
          </div>
          <div v-if="contentRating" class="badge badge-content-rating">
            <div class="text-caption">{{ contentRating }}</div>
          </div>
          <div v-if="hasAudio" class="badge badge-audio" @click="emit('onPlayAudio')">
            <i class="icon icon-volume-up icon--s12" />
            <div class="text-caption">Audio Available</div>
          </div>
          <div v-if="books" class="stat-item stat-item-xs title-banner-texts">
            <i class="icon icon-menu-book icon--s12" />
            <span>Books: {{ books }}</span>
          </div>
          <div v-if="chapters" class="stat-item stat-item-xs title-banner-texts">
            <i class="icon icon-auto-stories icon--s12" />
            <span>Chapters: {{ chapters }}</span>
          </div>
          <div v-if="issues" class="stat-item stat-item-xs title-banner-texts">
            <i class="icon icon-description icon--s12" />
            <span>Issues: {{ issues }}</span>
          </div>
          <div v-if="completion" class="badge badge-genre">
            <div v-if="genres" class="row-middle gap-x-1">
              <div v-for="(genre, index) in genres" :key="index">
                <div class="text-caption">{{ genre }}</div>
              </div>
            </div>
            <span class="text-caption">| </span>
            <div class="text-caption">{{ completion }}</div>
          </div>
        </div>
        <div
          v-if="description"
          class="description title-banner-texts ellipsable max-w-[430px]"
          :class="{ disabled: !descriptionEllipsisEnabled }"
        >
          <input :id="id" type="checkbox" />
          <span class="text-body-2 text">{{ description }}</span>
          <label :for="id" class="primary">See More</label>
        </div>
        <div class="mt-6 row-middle gap-x-6 max-w-[430px]">
          <button
            v-if="url"
            :href="url"
            class="btn btn-md action-buttons"
            role="button"
            @click="emit('onStartReading')"
          >
            Start Reading
          </button>
          <button class="icon-only action-buttons" role="button" @click="emit('onLike')">
            <i class="icon icon-favorite-border icon--s40"></i>
          </button>
          <button class="icon-only action-buttons" role="button" @click="emit('onBookmark')">
            <i class="icon icon-bookmark-border icon--s40"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
