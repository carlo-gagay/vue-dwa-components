<script setup>
const props = defineProps({
  image: String,
  title: String,
  author: String,
  published: String,
  description: String,
  genres: Object,
  rating: String,
  likes: Number
})
</script>

<template>
  <div class="title-card">
    <div class="img-wrapper">
      <figure>
        <img :src="image" />
      </figure>
      <button class="playable audio-badge white">
        <i class="icon icon-volume-up icon--s12"></i>
        <div class="text">Audio Available</div>
      </button>
    </div>
    <div class="details-wrapper">
      <div class="main-details">
        <div v-if="title" class="title">{{ title }}</div>
        <div v-if="author || published" class="subtitle">
          <div v-if="author" class="text name">{{ author }}</div>
          <i class="icon icon-minus-solid icon--s4"></i>
          <div v-if="published" class="text date">{{ published }}</div>
        </div>
      </div>
      <div v-if="description" class="sub-details">
        <p class="description normally-hidden">
          {{ description }}
        </p>
        <div class="visual-data">
          <div v-if="genres" class="chips normally-hidden">
            <div v-for="(genre, index) in genres.genres" class="chip green" v-text="genre" />
          </div>
          <div class="counts">
            <div class="count-item">
              <i class="icon icon-heart icon--s12"></i>
              <span class="text">
                {{ likes }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// Title Card
.title-card {
  @apply rounded-t-[10px];

  .img-wrapper {
    @apply relative;

    figure,
    img {
      @apply m-0 w-full rounded-t-[10px];
    }

    img {
      @apply aspect-[306/190] object-cover object-center;
    }

    .playable {
      @apply absolute right-[10px] top-[10px];
    }
  }

  .details-wrapper {
    @apply flex flex-row justify-between gap-y-[5px] pt-[6px] px-[11px] pb-[13px];
    .main-details {
      @apply flex flex-col;
      .title {
        @apply text-sm font-bold;
      }
      .subtitle {
        @apply flex flex-row gap-x-[10px] items-center;
        & .text {
          @apply text-[10px] leading-[14px];
        }
      }
    }

    .sub-details {
      @apply flex flex-col gap-y-[10px];
      .description {
        @apply text-xs;
      }

      .visual-data {
        @apply flex flex-row justify-between items-center;

        .chips {
          @apply flex flex-row justify-start items-center gap-x-[11px];
        }

        .counts {
          @apply flex flex-row justify-start items-center;

          .count-item {
            @apply flex flex-row gap-x-1 items-center;

            & .text {
              @apply text-xs;
            }
          }
        }
      }
    }
  }
}
// End Title Card

// Title Card Hover Effect
.title-card:hover {
  @apply scale-110;
  box-shadow: 0px 0px 8px 0px rgba(12, 11, 11, 0.2);

  .details-wrapper {
    @apply flex-col;
  }

  .normally-hidden {
    display: inherit !important;
  }
}
// End Title Card Hover Effect

// Audio Badge
.audio-badge {
  @apply p-1 rounded-[2px] flex items-center gap-x-[2px];

  &.white {
    @apply bg-white text-neutral-900;
  }

  .text {
    @apply text-[10px] leading-[14px];
  }
}
// End Audio Badge

// Chips
.chip {
  @apply rounded-[2px] py-0.5 px-1 text-[10px] leading-[14px];

  &.green {
    @apply bg-green-800 text-white;
  }

  &.md {
    @apply py-0.5 px-1 text-[10px] leading-[14px];
  }
}
// End Chips

// Normally hidden
.normally-hidden {
  @apply hidden #{!important};
}
</style>
