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

/**
 * 输出错误信息
 * @param message 错误信息
 */
function throwError(message: string) {
  throw new TypeError(message);
}

/**
 * 获取浏览器默认语言
 */
function getBrowserLanguage() {
  return navigator.language;
}

function initTypedJS() {
  try {
    const $typed = typedRef.value!.querySelector(".typing");
    if (!$typed) {
      const errorMsg =
        getBrowserLanguage() === "zh-CN"
          ? "请确保有且只有一个具有class属性为 'typing' 的元素"
          : "Please make sure that there is only one element with a Class attribute with 'Typing'";
      throwError(errorMsg);
    }

    typedInstance = new Typed($typed, props.options);
  } catch (error) {
    console.error("Failed to create Typed instance:", error);
  }
}

onMounted(() => {
  initTypedJS();
});

onBeforeUnmount(() => {
  typedInstance?.destroy();
});

defineExpose({ typedRef, typedInstance });
</script>
