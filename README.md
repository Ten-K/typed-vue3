# typed-vue

A Vue 3 component for creating typing animations using [Typed.js](https://github.com/mattboldt/typed.js).

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
  <TypedComponent :options="options" />
</template>

<script setup lang="ts">
import { TypedComponent, type TypedOptions } from "typed-vue";

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
import { TypedComponent, type TypedOptions } from "typed-vue";

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

Please check [Typed.js](https://github.com/mattboldt/typed.js)
