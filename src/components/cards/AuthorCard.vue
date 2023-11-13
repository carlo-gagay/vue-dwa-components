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
      <div class="text-heading-2 name">{{ name }}</div>
      <div class="column-middle addresses">
        <div class="address">
          <i class="icon icon-location-on icon--s16"></i>
          <div class="text-caption">{{ address }}</div>
        </div>
        <div class="website">
          <i class="icon icon-link icon--s16"></i>
          <a href="#" class="text-link">{{ website }}</a>
        </div>
      </div>
      <div class="description text-body-2">
        {{ description }}
      </div>
      <div class="statistics">
        <div class="item">
          <i class="icon icon-preview icon--s24"></i>
          <div class="text-sub-heading-1">{{ readers }}</div>
          <div class="text-caption">Comic Readers</div>
        </div>
        <div class="item">
          <i class="icon icon-favorite-border icon--s24"></i>
          <div class="text-sub-heading-1">{{ likes }}</div>
          <div class="text-caption">Likes</div>
        </div>
        <div class="item">
          <i class="icon icon-person-add-alt icon--s24"></i>
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
