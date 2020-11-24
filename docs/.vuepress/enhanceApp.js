import Vue from 'vue';
import Element from 'element-ui'; // 引入elementUi
import 'element-ui/lib/theme-chalk/index.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件

import dyUi from 'dying-ui'; // 要编写对应文档的包
import 'dying-ui/dist/dying-ui.css';
import icon from '../../icon.json';

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
Vue.prototype.$icon = icon;

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(Element);
  Vue.use(dyUi);
}
