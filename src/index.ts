import './set-public-path'
import { createApp, h } from 'vue'
import singleSpaVue from 'single-spa-vue'
import App from './App.vue'

const lifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render: () => h(App, {
      name: this.name,
      mountParcel: this.mountParcel,
      singleSpa: this.singleSpa
    })
  }
})

export const { bootstrap, mount, unmount } = lifecycles