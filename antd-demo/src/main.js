import { createApp } from 'vue'
import App from './App.vue'
import antd from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
createApp(App).use(antd).mount('#app')
