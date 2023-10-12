<template>
  <header aria-label="Header" class="header">
    <slot>
      <div class="header-inner space-between">
        <div class="row-middle">
          <slot name="slot-brand"></slot>
          <slot name="slot-nav-links"></slot>
        </div>
        <slot name="slot-cta-buttons"></slot>
      </div>
    </slot>
  </header>
</template>
