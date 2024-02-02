<template>
  <TypedComponent :options="options" />
</template>

<script setup lang="ts">
import { TypedComponent, type TypedOptions } from "typed-vue3";

const options: TypedOptions = {
  strings: ["云想衣裳花想容", "春风拂槛露华浓"]
};
</script>
