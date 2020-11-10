module.exports = {
    title: 'dying-ui文档', // 设置网站标题
    description: 'dying-ui组件库', // 描述
    dest: './build', // 设置输出目录
    port: 8888, // 端口
    themeConfig: {   // 主题配置
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
            '/zh/guide/': getGuideSidebar('安装', '快速上手'),
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
                'basic-config',
            ]
        }
    ]
}
function getComponentSidebar(groupA, introductionA) {
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