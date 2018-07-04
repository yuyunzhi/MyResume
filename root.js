
const app = new Vue({

    data:{
        displayresume:{
            info:{
                name:'余韵之',
                job:'前端工程师',
                school:'苏州科技大学',
                telephone:'18964022629',
                email:'635429583@qq.com',
                wechat:'lambert1129',
                age:'25',
            },
            projects:[
                {
                    name:'《网易云音乐》',
                    useSkill:'jQuery、响应式布局 、MVC、Observer设计模式、七牛&LeanCloud数据库、Swiper',
                    imgLink:'./img/1.jpg',
                    sourceLink:'https://link.zhihu.com/?target=https%3A//github.com/yuyunzhi/music-2018-06',
                    previewLink:'https://yuyunzhi.github.io/music-2018-06/src/index.html',
                    blogLink:'https://zhuanlan.zhihu.com/p/38099257',
                    describe:'移动端播放歌曲、切换、暂停、搜索等功能，PC 端歌曲上传、删除、修改等功能。使用 jQuery、MVC，以及七牛、LeanCloud牛等作为数据库实现。使用vConsole进行调试。'
                },
                {
                    name:'《Vue在线简历编辑器》',
                    useSkill:'vue.js、vue-router.js、keep-alive、组件通信、LeanCloud、媒体查询',
                    imgLink:'./img/2.jpg',
                    sourceLink:'https://github.com/yuyunzhi/Vue-resume-2018-06',
                    previewLink:'https://yuyunzhi.github.io/Vue-resume-2018-06/src/index.html',
                    blogLink:'https://zhuanlan.zhihu.com/p/38302712',
                    describe:'Vue简历编辑器，通过Vue-router实现路由切换功能，使用兄弟组件通信及keep-alive进行数据的传递和页面缓存，使用leanCloud完成用户的登录、注册、登出的功能，使用v-model实现了数据的编辑和保存双向绑定，通过获取url的id来区分用户登录和分享的状态，通过媒体查询切换print的CSS样式。'
                },
                {
                    name:'《自定义导航网页》',
                    useSkill:'原生JavaScript、locationStorage、JSON、favicon、onerror、图床、CSS Gradient Generator',
                    imgLink:'./img/3.jpg',
                    sourceLink:'https://link.zhihu.com/?target=https%3A//github.com/yuyunzhi/navigation-demo',
                    previewLink:'https://link.zhihu.com/?target=https%3A//yuyunzhi.github.io/navigation-demo/index.html',
                    blogLink:'https://zhuanlan.zhihu.com/p/37339023',
                    describe:'该项目使用原生JS实现一个键盘导航，该导航支持百度、谷歌搜索，键盘字母绑定自定义的网站。协议+域名+/favicon 作为 URL，请求成功后能够获取到网站的图标，用CSS Gradient Generator 实现了键盘颜色的渐变，用locationStorage实现了用户输入url保存到本地的功能。'
                },
                {
                    name:'《我是一只大白》',
                    useSkill:'JavaScript、jQuery、Prism.js、Rem响应式页面',
                    imgLink:'./img/4.jpg',
                    sourceLink:'https://github.com/yuyunzhi/baymax',
                    previewLink:'https://yuyunzhi.github.io/baymax/index.html',
                    blogLink:'https://zhuanlan.zhihu.com/p/37428081',
                    describe:'动态向<style>标签和<pre>标签添加文本，绘制出大白的过程。用css3实现动画的效果，用prism.js实现代码高亮的效果，用rem实现响应式布局，用sass进行编译。'
                },
                {
                    name:'《无缝轮播》',
                    useSkill:'JavaScript、jQuery',
                    imgLink:'./img/5.jpg',
                    sourceLink:'https://link.zhihu.com/?target=https%3A//github.com/yuyunzhi/slides-demo-3',
                    previewLink:'https://link.zhihu.com/?target=https%3A//yuyunzhi.github.io/slides-demo-3/slidesdemo.html',
                    blogLink:'https://zhuanlan.zhihu.com/p/37493742',
                    describe:'该无缝轮播能够自动播放、点击前后按钮切换图片、点击第N个灰色按钮切换到第N张图片。通过百分比布局实现更改图片尺寸不影响无缝轮播效果，通过jQuery动态生成与img数量相等的button，通过jQuery动态增删class来激活button的状态。'
                },
                {
                    name:'《Canvas画板》',
                    useSkill:'原生JavaScript、Canvas、移动端、SVG、特性检测',
                    imgLink:'./img/6.jpg',
                    sourceLink:'https://github.com/yuyunzhi/drawingBoard',
                    previewLink:'https://yuyunzhi.github.io/drawingBoard/drawing-canvas/canvas.html',
                    blogLink:'https://zhuanlan.zhihu.com/p/37321285',
                    describe:'该项目使用原生JS实现，主要调用 Canvas API，实现了线粗、调色、橡皮擦、保存等功能。用 context.clearRect()实现了 橡皮檫和清屏的功能，用 className切换实现了笔的线粗、颜色切换的功能，用meta:vp、特性检测、ontouch事件实现了触屏设备与web端兼容。'
                },
                {
                    name:'《2048-Game》',
                    useSkill:'JavaScript、jQuery',
                    imgLink:'./img/7.jpg',
                    sourceLink:'https://github.com/yuyunzhi/2048-game',
                    previewLink:'https://yuyunzhi.github.io/2048-game/index.html',
                    blogLink:'https://zhuanlan.zhihu.com/p/38485186',
                    describe:'使用jQuery动态生成元素，动态更改CSS样式，动态更改分值，伪协议初始化游戏。'
                },
                
                
            ],
            skills:[
                {
                    name:'HTML 5',
                    describe:'能够根据HTML5标准书写结构良好，并且符合语义化的html代码。如标签<header>、<main>、<section>、<footer> 等'
                },   
                {
                    name:'DIV+CSS布局与居中',
                    describe:'能够使用flex、float+清除浮动布局，能够用多种方式进行水平居中、垂直居中。'
                },   
                {
                    name:'Canvas、SVG',
                    describe:'能够使用Canvas的部分API进行画图，并用Canvas做了《Canvas画板》写了相关的博客。了解Canvas与SVG的区别。'
                }, 
                {
                    name:'原生JavaScript',
                    describe:'能够使用原生JS进行 DOM 元素的操作，事件的监听等。用原生JS做了《自定义导航网页》。'
                }, 
                {
                    name:'响应式布局、移动端适配',
                    describe:'能够使用meta:viewport、媒体查询、动态rem、vw/vh进行响应式布局，用媒体查询做了该简历，用rem做了《我是一只大白》。'
                },  
                {
                    name:'jQuery',
                    describe:'能够使用 jQuery 进行 DOM 操作，使用常见的API完成需求。'
                },    
                {
                    name:'Vue.js',
                    describe:'能够使用Vue.js完成需求，了解Vue.js的数据双向绑定、父子兄弟组件间的通信原理，能够使用Vue-Router制作前端路由，能够使用keep-alive进行缓存。'
                }, 
                {
                    name:'MVC、Observer设计模式',
                    describe:'了解 MVC、Observer 设计模式，能够运用到实际的开发中。'
                }, 
                {
                    name:'new、this、闭包、原型链、作用域',
                    describe:'了解 new 的过程，了解 this、闭包、原型链、作用域的基本概念，并能够熟练使用，写了相应博客。'
                },    
                {
                    name:'继承',
                    describe:'了解 ES5 中原型链继承和 ES6 中 class 继承的方法。'
                }, 
                {
                    name:'DOM事件模型、事件委托',
                    describe:'了解 DOM 事件模型，捕获、冒泡、处理三个阶段以及如何阻止事件的传递，并做了一个按钮 demo 。'
                },   
                {
                    name:'命令行',
                    describe:'了解命令行，能够使用命令行进行常用的操作。'
                },    
                {
                    name:'HTTP',
                    describe:'了解 HTTP 基础知识，了解常见状态码含义，能够根据请求查看响应。'
                }, 
                {
                    name:'JSONP',
                    describe:'了解JSONP的概念，并写了相应的博客。'
                },    
                {
                    name:'AJAX、Promise',
                    describe:'了解AJAX、promise 的概念，并写了相应的博客。'
                }, 
                {
                    name:'Cookie和Session',
                    describe:'了解客户端缓存、Cookie、session 等知识，并写了相应博客。'
                },    
                {
                    name:'LocalStorage、Cache-Control、Etag',
                    describe:'了解 LocalStorage、Cache-Control、Etag、Expires 等知识，了解几者之间的区别，并写了相应博客。'
                }, 
                {
                    name:'Web性能优化',
                    describe:'了解常见的web性能优化方案，并写了相应的博客。'
                },    
                {
                    name:'同源策略、跨域',
                    describe:'了解同源策略，以及常用的跨域方法。'
                }, 
            ],
            statement:{
                content:'2017年6月毕业于苏州科技大学，在大学期间做个三年的公益教育并在大四担任青年行苏州区域项目负责人，独立负责14万项目运营经费，团队规模70人，半年超额完成公司业绩同时完成团队的传承。毕业后来到上海一家公司做运营，工作四个月接触了前端，发现自己热爱技术。至今为止脱产自学前端半年，热爱写代码，享受通过各种代码组合做出想要成果的过程，享受解决bug的过程，享受创造的过程。'
            },
        },
        line:{
            information:'信息 / INFORMATION',
            projects:'作品 / PROJECTS',
            skills:'技能 / SKILLS',
            stateself:'经历 / EXPERIENCE',
        },

    },

}).$mount('#app')