
const app = new Vue({
    data:{
        displayresume:{
            info:{
                name:'余韵之',
                job:'前端工程师',
                live:'上海嘉定',
                telephone:'18964022629',
                email:'lambert1129@foxmail.com',
                wechat:'lambert1129',
                age:'25',
            },
            statement:{
                content:'我是来自山东的张三，大家所看到的我的内在就像我的外表一样，敦厚和实在是我对自己最好的概括。专业扎实，看书是我最大的享受，钻研电脑让我感觉其乐无穷。给我一个机会，我会给您一个惊喜。'
            },
            projects:[
                {
                    name:'无缝轮播',
                    useSkill:'JavaScript、jQuery、响应式布局 、MVC、eventHub（发布/订阅模式）、七牛&LeanCloud数据库、Swiper、移动端',
                    imgLink:'',
                    sourceLink:'https://link.zhihu.com/?target=https%3A//github.com/yuyunzhi/music-2018-06',
                    previewLink:'https://yuyunzhi.github.io/music-2018-06/src/index.html',
                    blogLink:'https://zhuanlan.zhihu.com/p/38099257',
                    describe:'移动端播放歌曲、切换、暂停、搜索等功能，PC 端歌曲上传、删除、修改等功能。使用 jQuery、MVC，以及 LeanCloud、七牛等作为数据库实现。使用vConsole进行调试'
                },
                
                
            ],
            skills:[
                {name:'Html、CSS、javascript',describe:'完美还原设计稿完美还原设计稿完美还原设计稿完美还计稿完美还原设计原设计设计稿完美还原设计稿完美。'},
                {name:'jQuery',describe:'完美还原设计稿'}, 
                {name:'jQuery',describe:'完美还原设计稿'},
                {name:'jQuery',describe:'完美还原设计稿'},
                {name:'jQuery',describe:'完美还原设计稿'}, 
                {name:'jQuery',describe:'完美还原设计稿'},
                {name:'jQuery',describe:'完美还原设计稿'},
                {name:'jQuery',describe:'完美还原设计稿'}, 
                {name:'jQuery',describe:'完美还原设计稿'},
                {name:'jQuery',describe:'完美还原设计稿'},
                {name:'jQuery',describe:'完美还原设计稿'}, 
                {name:'jQuery',describe:'完美还原设计稿'},
                {name:'jQuery',describe:'完美还原设计稿'},
                {name:'jQuery',describe:'完美还原设计稿'}, 
                {name:'jQuery',describe:'完美还原设计稿'},
                {name:'jQuery',describe:'完美还原设计稿'},               
            ],
        },
        line:{
            stateself:'自我介绍 / STATEMENT',
            projects:'项目经历 / PROJECT EXPERIENCE',
            skills:'技能 / SKILLS',
        },
    },

}).$mount('#app')