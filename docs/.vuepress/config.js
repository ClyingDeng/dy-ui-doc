module.exports = {
    title: 'dying-ui文档', // 设置网站标题
    description: 'dying-ui组件库', // 描述
    base:'/dy-ui-doc/',
    port: 8888, // 端口
    themeConfig: {   // 主题配置
        // extend: '@vuepress/theme-default',
        logo: '/logo.png',
        smoothScroll: true,
        nav: [
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
            sidebarDepth: 2,
            children: [
                '',
                'button',
                'icon'
            ]
        }
    ]
}