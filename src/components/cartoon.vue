<template>
    <div class="cartoon">
       <h1>{{ fadeInOut }}</h1>
       <el-button @click="show = !show">Click Me</el-button>
       <div style="display: flex; margin-top: 20px; height: 100px;">
           <transition name="el-fade-in-linear">
                <div v-show="show" class="transition-box">.el-fade-in-linear</div>
           </transition>
           <transition name="el-fade-in">
               <div v-show="show" class="transition-box">.el-fade-in</div>
           </transition>
            <transition name="el-fade-in">
               <div v-show="show" class="transition-box">.el-fade-in</div>
           </transition>
            <transition name="el-fade-in">
               <div v-show="show" class="transition-box">.el-fade-in</div>
           </transition>
       </div>
       <br>
       <hr>
       <br>
       <h1>{{ zoom }}</h1>
       <el-button @click="show2 = !show2">Click Me</el-button>
       <div style="display:flex; margin-top: 20px; height: 100px;">
            <transition name="el-zoom-in-center">
                <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
            </transition>
            <transition name="el-zoom-in-top">
                <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
            </transition>
            <transition name="el-zoom-in-bottom">
                <div v-show="show2" class="transition-box">.el-zoom-in-center</div>
            </transition>
       </div>
       <br>
       <hr>
       <br>
       <h1>{{ collapse }}</h1>
       <el-button @click="show3 = !show3">Click Me</el-button>
       <div style="margin-top: 20px; height: 200px;">
         <el-collapse-transition>
            <div v-show="show3">
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
            </div>
         </el-collapse-transition>
       </div>
       <br>
       <hr>
       <br>
    </div>
</template>
<script>
export default {
    name: 'cartoon',
    data () {
        return {
            fadeInOut: '内置过渡动画',
            show: true,
            zoom: 'zoom 缩放',
            show2: true,
            collapse: 'collapse 展开折叠',
            show3: true
        };
    }
};

</script>
<style scoped lang="less">
    h1 {
        font-weight: normal;
        margin-bottom: 20px;
        margin-top: 20px;
        color: blue;
    }
    .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: #409eff;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
</style>
