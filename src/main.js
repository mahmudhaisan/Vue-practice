import { createApp } from "vue";
import NewApp from './App.vue';
import ProfileInfo from './ProfileInfo.vue';



const app = createApp(NewApp);
app.component('profile-info', ProfileInfo);

app.mount("#app");