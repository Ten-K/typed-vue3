<template>
  <TypedComponent :options="options" />
</template>

<script setup lang="ts">
import { TypedComponent, type TypedOptions } from "../../src/index";

const options: TypedOptions = {
  strings: ["云想衣裳花想容, 春风拂槛露华浓"],
  typeSpeed: 100,
  loop: true
};
</script>
