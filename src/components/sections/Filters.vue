<script setup>
import 'floating-vue/dist/style.css'
import { Dropdown } from '@components/dropdowns'
</script>

<template>
  <div class="filter-container w-full px-10 py-2.5">
    <div class="inner row-middle justify-between">
      <div class="dropdowns row-middle gap-x-[20px]">
        <div class="p-1">
          <Dropdown id="genre-dropdown" label="Genre">
            <template #dropdown>
              <div class="dropdown-popper">
                <div class="body-1 font-bold">Genre</div>
                <div class="dropdown-item">
                  <div class="row-middle justify-between w-full">
                    <div class="row-middle gap-x-3">
                      <i class="icon icon-box icon--s14"></i>
                      <span class="body-2">Action</span>
                    </div>
                    <span class="body-2">12</span>
                  </div>
                </div>
              </div>
            </template>
          </Dropdown>
        </div>
        <div class="p-1">
          <Dropdown id="completion-dropdown" label="Completion">
            <template #dropdown>
              <div class="dropdown-popper">
                <div class="body-1 font-bold">Completion</div>
                <div class="dropdown-item">
                  <div class="row-middle justify-between w-full">
                    <div class="row-middle gap-x-3">
                      <i class="icon icon-box icon--s14"></i>
                      <span class="body-2">All</span>
                    </div>
                    <span class="body-2">123</span>
                  </div>
                </div>
              </div>
            </template>
          </Dropdown>
        </div>
        <div class="p-1">
          <Dropdown id="content-rating-dropdown" label="Content Rating">
            <template #dropdown>
              <div class="dropdown-popper">
                <div class="body-1 font-bold">Content Rating</div>
                <div class="dropdown-item">
                  <div class="row-middle justify-between w-full">
                    <div class="row-middle gap-x-3">
                      <i class="icon icon-box icon--s14"></i>
                      <span class="body-2">All</span>
                    </div>
                    <span class="body-2">123</span>
                  </div>
                </div>
              </div>
            </template>
          </Dropdown>
        </div>
        <div class="p-1">
          <Dropdown id="audio-availability-dropdown" label="Audio Availability">
            <template #dropdown>
              <div class="dropdown-popper">
                <div class="body-1 font-bold">Audio Availability</div>
                <div class="dropdown-item">
                  <div class="row-middle justify-between w-full">
                    <div class="row-middle gap-x-3">
                      <i class="icon icon-box icon--s14"></i>
                      <span class="body-2">All</span>
                    </div>
                    <span class="body-2">123</span>
                  </div>
                </div>
              </div>
            </template>
          </Dropdown>
        </div>
      </div>
      <div class="">
        <button class="btn md-equal trans-black-inline">Clear All Filters</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-container {
  background: #eae1c5;
  box-shadow: 0px 0px 8px 0px rgba(12, 11, 11, 0.2);
}
</style>
