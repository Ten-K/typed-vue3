import type { App } from "vue";
import typedComponent from "./Typed.vue";

export { type TypedOptions } from "typed.js";

export const TypedComponent = Object.assign(typedComponent, {
  install: (app: App) => {
    app.component(typedComponent.name!, typedComponent);
  }
});

export default TypedComponent;
