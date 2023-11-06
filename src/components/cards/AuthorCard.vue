<script setup>
defineProps({
  address: String,
  description: String,
  followers: [Number, String],
  image: String,
  likes: [Number, String],
  name: String,
  readers: [Number, String],
  website: String
})
</script>

<template>
  <div id="author-card">
    <div class="container">
      <div class="card-image">
        <figure v-lazyload>
          <img src="/images/placeholder.png" :data-url="image" />
        </figure>
      </div>
      <div class="text-heading-2 font-bold name">{{ name }}</div>
      <div class="column-middle addresses">
        <div class="address">
          <div class="text-caption">{{ address }}</div>
        </div>
        <div class="website">
          <a href="#" class="link">{{ website }}</a>
        </div>
      </div>
      <div class="description text-body-2">
        {{ description }}
      </div>
      <div class="statistics">
        <div class="item">
          <div class="text-sub-heading-1">{{ readers }}</div>
          <div class="text-caption">Comic Readers</div>
        </div>
        <div class="item">
          <div class="text-sub-heading-1">{{ likes }}</div>
          <div class="text-caption">Likes</div>
        </div>
        <div class="item">
          <div class="text-sub-heading-1">{{ followers }}</div>
          <div class="text-caption">Followers</div>
        </div>
      </div>
      <div class="cta">
        <button class="btn btn-md btn-primary">Follow</button>
        <button class="btn btn-md btn-tertiary">Contact</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#author-card {
  @apply w-fit max-w-[448px];

  .container {
    @apply flex flex-col justify-center items-center py-[67px] px-[49px];

    .card-image figure img {
      @apply bg-cover bg-center rounded-[375px] w-[179px] h-[176px];
    }

    .name {
      @apply mt-9;
    }

    .addresses,
    .description {
      @apply mt-3;
    }

    .addresses {
      .address {
        @apply text-neutral-02;
      }

      .link {
        @apply text-sm text-yellow;
      }
    }

    .statistics {
      @apply row-middle gap-x-[48px] items-center bg-white py-[17px] px-[31px] mt-[31px];
      box-shadow: 0px 0px 4px 0px rgba(12, 11, 11, 0.2);

      .item {
        .text-sub-heading-1 {
          @apply text-orange;
        }
      }
    }

    .cta {
      @apply row-middle gap-x-6 mt-8;
    }
  }
}
</style>
