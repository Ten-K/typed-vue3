<h1 align="center">typed-vue3</h1>
<p align="center">Vue 3组件，基于 Typed.js 创建打字动画。</p>
<p align="center">
<a href="https://www.npmjs.com/package/typed-vue3" target="__blank"><img src="https://img.shields.io/npm/v/typed-vue3?color=a1b858&label=" alt="NPM version"></a>
</p>

简体中文 | [English](./README.en-US.md)

<img src="https://cdn.jsdelivr.net/gh/Ten-K/picgo/img/2024-02-02-17-22-28.gif" alt="pure-admin-cli" width="380" />

## 安装

```bash
# npm
npm install typed-vue3
# pnpm
pnpm add typed-vue3
# npm
yarn add typed-vue3
```

## 使用

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

## 配置

详细配置请查看 [Typed.js](https://github.com/mattboldt/typed.js)
