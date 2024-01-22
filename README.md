# typed-vue
A Vue 3 component for creating typing animations using [Typed.js](https://mattboldt.com/demos/typed-js/).

## Installation
```bash
# npm
npm install typed-vue
# pnpm
pnpm add typed-vue
# npm
yarn add typed-vue
```

## Usage
```vue
<template>
  <TypedComponent :options="options">
    <h1 class="typing"></h1>
  </TypedComponent>
</template>

<script setup lang="ts">
import { TypedComponent, type TypedOptions } from "typed-vue";

const options: TypedOptions = {
  strings: ["Hello", "World", "This is typed-vue"],
  loop: true,
  typeSpeed: 30,
};
</script>
```

## options
I export TypedOptions from Typed.js

Please check [Typed.js](https://mattboldt.com/demos/typed-js/)
