<template>
    <div
        class="v-dropdown-container"
        :class="containerClass"
        :id="`app-dropdown${key}`"
    >
        <v-dropdown
            v-bind="$attrs"
            class="dropdown"
            :key="`v-dropdown${key}`"
            :container="container || `#app-dropdown${key}`"
            :class="[origin, size, theme]"
        >
            <slot>
                <button class="trigger" :disabled="$attrs.disabled">
                    <span>
                        <slot name="text" />
                    </span>
                    <i class="icon icon-arrow-drop-down icon--s24"></i>
                </button>
            </slot>
            <template #popper>
                <div
                    class="v-popper-dropdown dropdown"
                    :class="[origin, size, theme, popperClass]"
                >
                    <slot name="dropdown" />
                </div>
            </template>
        </v-dropdown>
    </div>
</template>

<script setup>
import { computed } from "vue";

defineProps({
    origin: {
        type: String,
        default: "be",
        validator(value) {
            return ["fe", "be"].includes(value);
        },
    },
    size: {
        type: String,
        default: "md",
        validator(value) {
            return ["md slim", "md", "lg"].includes(value);
        },
    },
    theme: {
        type: String,
        default: "primary",
    },
    container: String,
    containerClass: String,
    popperClass: String,
});

const key = computed(() => {
    return Math.floor(Math.random() * 1000);
});
</script>
