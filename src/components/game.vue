<template>
    <div class="lunbo">
    <!-- Vue 的过渡系统是内置的，在元素从 DOM 中插入或移除时自动应用过渡效果。 -->
        <div class="slide">
            <div class="slideshow">
                <ul>
                <transition-group tag="ul" name="image">
                   <li v-for="(img, index) in imgArray" v-show="index === mark" :key="index">
                       <img :src="img" alt="">
                   </li>
                </transition-group>
                </ul>
            </div>
            <div class="bar">
               <span v-for="(item, index) in imgArray" :class="{'active': index === mark}" :key="index"></span>
            </div>
        </div>
        <swiper v-ref="swiper" direction="horizontal" :mousewheel-control="true" :performance-mode="false" :pagination-visible="true" :pagination-clickable="true" :loop="ture" @slide-change-start="onSlideChangeStart" @slide-change-end="onSlideChangeEnd">
            <div>Page1</div>
            <div>Page2</div>
            <div>Page3</div>
        </swiper>
        <br/>  
        <h1>轮播2</h1> 
        <div class="carousel-wrap" id="carousel">
            <!-- 轮播图列表上面通过 v-for 渲染了 li 列表，并在其中插入了包含可点击跳转的图片，接下来看看如何实现轮播，轮播图的样式直接在后面给出大家 sass 代码，父元素 ul 设置 position: relative;overflow: hidden 后，li 大小设为和父元素相同，absolute 定位固定在父元素中，要让 li 按照顺序显示，需要用到 v-show 或 v-if 处理，通过 index 值来改变当前显示的 li ，本例 v-show 绑定条件 index===currentIndex，用定时器改变 currentIndex 实现轮播 -->
            <ul>
                <transition-group class="slide-ul" name="list">
                    <li v-for="(list,index) in slideList" :key="index" v-show="index === currentIndex" @mouseenter="stop" @mouseleave="go">
                        <a :href="list.clickUrl">
                            <img :src="list.image" :alt="list.desc">
                        </a>
                    </li>
                </transition-group>
            </ul>
        </div>
        <br/> 
        <h3>轮播图</h3>
        <div class="swiper-wrapper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="str in listImg" :style="{backgroundImage: 'url(' + str.url + ')'}"></div>
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
        </div> 
    </div>
</template>
<script>
    import Swiper from 'swiper';
    export default {
        name: 'game',
        props: ['listImg'],
        data () {
            return {
                mark: 0, //对比图片索引的变量
                imgArray: [
                    'https://gw.alicdn.com/tfs/TB1uPzBeH_I8KJjy1XaXXbsxpXa-800-406.jpg',
                    'https://gw.alicdn.com/tfs/TB1dnBIeLDH8KJjy1XcXXcpdXXa-750-346.jpg',
                    'https://gw.alicdn.com/tfs/TB1wqGxciqAXuNjy1XdXXaYcVXa-750-350.jpg',
                    'https://gw.alicdn.com/tfs/TB1KHzzevDH8KJjy1XcXXcpdXXa-750-493.jpg'
                ],
                slideList: [
                    {
                        'clickUrl': '#',
                        'desc': 'nhwc',
                        'image':'http://dummyimage.com/1745x492/fid65b'
                    },
                    {
                        'clickUrl': '#',
                        'desc': 'hxrj',
                        'image':'http://dummyimage.com/1745x492/40b7ea'
                    },
                    {
                        'clickUrl': '#',
                        'desc': 'rsdh',
                        'image':'http://dummyimage.com/1745x492/e3c933'
                    }
                ],
                currentIndex: 0,
                timer: ''
            };
        },
        methods: {
            play () {
                setInterval(this.autoPlay, 2500);
            },
            // change(i){
            //     this.mark = i;
            // },
            onSlideChangeStart () {

            },
            onSlideChangeEnd () {

            },
            // 第二个轮播
            go () {
                clearInterval(this.timer);
                this.timer = null;
            },
            stop () {
                clearInterval(this.timer);
                this.timer = null;
            },
            change (index) {
                this.currentIndex = index;
            },
            autoPlay () {
                //第一个轮播
                this.mark ++;
                if (this.mark === 4){ //当遍历到最后一张图片置0
                    this.mark = 0;
                }
                // 第二个轮播
                this.currentIndex ++;
                if (this.currentIndex > this.slideList.length - 1){
                    this.currentIndex = 0;
                }
            }
        },
        created () {
            this.play();
            //在DOM加载完成后，下个tick中开始轮播
            this.$nextTick(() => {
                this.timer = setInterval(() => {
                    this.autoPlay();
                }, 4000);
            });
        },
        mounted () {
            // console.log('mounted', this);
            const swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: 4000,
                onTouchEnd: function() {
                    this.swiper.startAutoplay();
                }
            });
        }
    };
</script>
<style>
    .slide {
        width: 1024px;
        height: 320px;
        margin: 0 auto;
        margin-top: 50px;
        overflow: hidden;
        position: relative;
    }
    .slideshow {
        width: 1024px;
        height: 320px;
    }
    li {
        position: absolute;
    }
    img {
        width: 1024px;
        height: 320px;
    }
    .bar {
        position: absolute;
        width: 100%;
        bottom: 10px;
        margin: 0 auto;
        z-index: 10;
        text-align: center;
    }
    .bar span {
        width: 20px;
        height: 5px;
        border: 1px solid;
        background: #fff;
        display: inline-block;
        margin-right: 10px;
    }
    .active {
        background: red !important;
    }
    .carousel-wrap {
  position: relative;
  height: 453px;
  width: 100%;
  overflow: hidden;
  // 删除
  background-color: #fff;
}

.slide-ul {
  width: 100%;
  height: 100%;
  li {
    position: absolute;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 380px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
  span {
    display: inline-block;
    height: 6px;
    width: 30px;
    margin: 0 3px;
    background-color: #b2b2b2;
    cursor: pointer;
  }
  .active {
    background-color: $btn-color;
  }
}
.list-enter-active {
    transition: all 1s ease;
    transform: translateX(0);
}
list-leave-active {
    transition: all 1s ease;
    transform: translateX(-100%);
}
.list-enter {
    transform: translateX(100%);
}
.list-leave {
    transform: translateX(0);
}
</style>  