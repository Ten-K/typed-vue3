<template>
  <div ref="typedRef">
    <slot><span class="typing" /></slot>
  </div>
</template>

<script setup lang="ts">
import Typed, { type TypedOptions } from "typed.js";
import { ref, onMounted, onBeforeUnmount } from "vue";

defineOptions({
  name: "TypedComponent"
});

const props = defineProps<{
  options: TypedOptions;
}>();

const typedRef = ref<Element | null>(null);
let typedInstance: Typed | null = null;

onMounted(() => {
  try {
    typedInstance = new Typed(
      typedRef.value!.querySelector(".typing")!,
      props.options
    );
  } catch (error) {
    console.error("Failed to create Typed instance:", error);
  }
});

onBeforeUnmount(() => {
  typedInstance?.destroy();
});

defineExpose({ typedRef, typedInstance });
</script>
