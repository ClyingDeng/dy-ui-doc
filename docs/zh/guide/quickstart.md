## 快速上手

本节将介绍如何在项目中使用 dying-ui。

### 使用 vue-cli@3

基于 vue-cli 做了相应的适配功能，你可以用它们快速地搭建一个基于 dying-ui 的项目。

### 引入 dying-ui

你可以引入整个 dying，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 dying。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from "vue";
import dyUi from "dying-ui";
import "dying-ui/dist/dying-ui.css";
import App from "./App.vue";

Vue.use(dyUi);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```

以上代码便完成了 dying-ui 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "dying-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from "vue";
import { DyButton, DyIcon } from "dying-ui";
import App from "./App.vue";

Vue.component(DyButton.name, DyButton);
Vue.component(DyIcon.name, DyIcon);
/* 或写为
 * Vue.use(DyButton)
 * Vue.use(DyButton)
 */

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```

完整组件列表和引入方式（完整组件列表以 [components.json](https://github.com/ElemeFE/dying/blob/master/components.json) 为准）

```javascript
import Vue from "vue";
import {
  DyButton,
  DyIcon,
  DyButtonGroup,
  DyCol,
  DyRow,
  DyAside,
  DyContainer,
  DyFooter,
  DyHeader,
  DyMain,
  DyInput,
  DyUpload,
  DyProgress,
} from "dying-ui";
Vue.use(DyButton);
Vue.use(DyIcon);
Vue.use(DyButtonGroup);
vue.use(DyCol);
vue.use(DyRow);
vue.use(DyAside);
vue.use(DyContainer);
vue.use(DyFooter);
vue.use(DyHeader);
vue.use(DyMain);
vue.use(DyInput);
vue.use(DyUpload);
vue.use(DyProgress);
```

### 开始使用

至此，一个基于 Vue 和 dying-ui 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。

