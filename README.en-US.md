<h1 align="center">typed-vue3</h1>
<p align="center">A Vue 3 component for creating typing animations using Typed.js.</p>

[简体中文](./README.md) | English

## Installation

```bash
# npm
npm install typed-vue3
# pnpm
pnpm add typed-vue3
# npm
yarn add typed-vue3
```

## Usage

```vue
<template>
  <TypedComponent :options="options" />
</template>

<script setup lang="ts">
import { TypedComponent, type TypedOptions } from "typed-vue3";

const options: TypedOptions = {
  strings: ["云想衣裳花想容", "春风拂槛露华浓"]
};
</script>
```

```vue
<template>
  <TypedComponent :options="options">
    <span>李白白：</span><span class="typing" />
  </TypedComponent>
</template>

<script setup lang="ts">
import { TypedComponent, type TypedOptions } from "typed-vue3";

const options: TypedOptions = {
  strings: ["云想衣裳花想容，春风拂槛露华浓"],
  typeSpeed: 50,
  loop: true,
  onComplete(self) {
    console.log("onComplete", self);
  }
};
</script>
```

## options

I export `TypedOptions` from `Typed.js`

For details, please view [Typed.js](https://github.com/mattboldt/typed.js)
