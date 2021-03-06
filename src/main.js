import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./components/base/_globals";
import installElementPlus from "./plugins/element";
import "./styles/styles.scss";
const app = createApp(App);
installElementPlus(app);
app
  .use(store)
  .use(router)
  .mount("#app");
