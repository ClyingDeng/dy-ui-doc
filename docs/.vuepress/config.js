module.exports = {
    title: 'dying-ui', // 设置网站标题
    description: 'dying-ui组件库', // 描述
    base: '/dy-ui-doc/',
    dest: './build',
    port: 8888, // 端口
    themeConfig: {   // 主题配置
        // repo: 'vuejs/vuepress',
        docsDir: 'docs',
        // extend: '@vuepress/theme-default',
        search: false,
        searchMaxSuggestions: 10,
        logo: '/logo.png',
        smoothScroll: true,
        nav: [
            {
                text: '主页',
                link: '/'
            },
            {
                text: '指南',
                link: '/zh/guide/',   // 导航条
            },
            {
                text: '组件',
                link: '/zh/components/',
            },
            { text: 'GitHub', link: 'https://github.com/ClyingDeng/Dy-UI' },
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            // '/zh/components/': [
            //     {
            //         title:'基础组件',
            //         collapsable: false,
            //         children:[
            //             '/zh/components/layout',
            //             '/zh/components/button',
            //             '/zh/components/icon',
            //             '/zh/components/progress',
            //         ],
                    
            //     },
            // ],
            '/zh/components/': getComponentSidebar('组件'),
            '/zh/guide/': getGuideSidebar('开发指南', '设计原则'),
        }

    },
}
function getGuideSidebar(groupA, groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'quickstart',
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'guide-design',
            ]
        }
    ]
}
function getComponentSidebar(groupA) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'container',
                'button',
                'icon',
                'progress',
                'upload',
                'popover',
                'datePicker',
                'carousel',
                'table',
                'pagination',
                'infiniteScroll'
            ]
        }
    ]
}