<template>
    <div class="category">
        <header>
            <p class="iconfont icon-fanhui"></p>
            <h3>商品分类</h3>
            <p class="iconfont icon-gengduo"></p>
        </header> 
        <main>
            <div class="categoryleft">
                <ul>
                    <li v-for="(item,index) in category" :key="item.id" :class="{active: index == ind}" @click="changeCategory(index)">
                        {{item.catename}}
                    </li>
                </ul>
            </div>
            <div class="categoryright">
                <ul v-if="category.length > 0">
                    <li v-for="(item,index) in category[ind].children" :key="item.id">
                        <img :src="'http://localhost:3000'+item.img" alt="">
                        <p>
                            {{item.catename}}
                        </p>
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        //children
        data() {
            return {
                category:[],
                ind:0
            }
        },
        mounted() {
          this.getCategroy()
        },
        methods: {
            changeCategory(i){
                this.ind = i
            },
            getCategroy(){
                  this.$http.get('/getcatetree').then(res =>{
                    this.category = res.data.list
                    console.log(this.category);
            })
            }
        },
    }
</script>

<style lang="stylus" scoped>
.category
    width 100%
    height 100%
    header 
        display flex
        height .88rem
        background-color color
        line-height .88rem
        color #ffffff
        justify-content space-between
        padding 0 .3rem
    main
        width 100%
        height 100%
        display flex
        .categoryleft
            width 1.6rem
            height 100%
            border-right .01rem solid #d9d9d9
            li
                height .5rem
                border-left  .06rem solid transparent
                margin .4rem 0
                text-align center
                &.active
                    border-left  .06rem solid color
                    color  color
        .categoryright    
            flex 1
            padding 0 .3rem
            ul
                display flex
                justify-content space-between
                margin .3rem 0
                li
                    width 30%
                    text-align center
                    
            
</style>