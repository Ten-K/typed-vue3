<template>
  <TypedComponent :options="options">
    <span>李白白：</span><span class="typing" />
  </TypedComponent>
</template>

<script setup lang="ts">
import { TypedComponent, type TypedOptions } from "./components/index";

const options: TypedOptions = {
  strings: ["云想衣裳花想容，春风拂槛露华浓"],
  typeSpeed: 50,
  loop: true,
  onComplete(self) {
    console.log("onComplete", self);
  }
};
</script>
