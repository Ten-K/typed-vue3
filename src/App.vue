<template>
  <TypedComponent :options="options">
    <span>李白白：</span>
  </TypedComponent>
</template>

<script setup lang="ts">
import { TypedComponent, type TypedOptions } from "./components/index";

const options: TypedOptions = {
  strings: ["云想衣裳花想容，春风拂槛露华浓"],
  typeSpeed: 50,
  onComplete(self) {
    console.log("onComplete", self);
  }
};
</script>
