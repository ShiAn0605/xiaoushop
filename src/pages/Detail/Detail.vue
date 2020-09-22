<template>
    <div class="detail">
        <header>
            <i class="iconfont icon-fanhui"></i>
            <h3>商品详情</h3>
            <i class="iconfont icon-gengduo"></i>
        </header>
        <main>
            <header>
                <img :src="'http://localhost:3000'+ goods.img" alt="">
            </header>
            <div class="title">
                <h3>{{goods.goodsname}}</h3>
                <p>{{goods.price}}</p>
            </div>
            <div class="num">
                <p>购买数量</p>
                <div class="but">
                    <button @click="del">-</button>
                    <span>{{num}}</span>
                    <button @click="add">+</button>
                </div>
            </div>
            <div class="specs">
                <p>商品属性</p>
                <div>
                    <p class="specsname">
                        {{goods.specsname}}
                    </p>
                    <p class="specsattr" v-for="(item,index) in specslist" :key="index" :class="{active : index == ind}" @click="changespecs(index)">
                        {{item}}
                    </p>
                </div>
            </div>
        </main>
        <footer>
            <div class="cart">
                <i class="iconfont icon-gouwuche"></i>
                <p>购物车</p>
            </div>
            <button class="addcart">加入购物车</button>
            <button class="buy">立即购买</button>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                goods:{},
                specslist:[],
                ind:0,
                num:0
            }
        },
        mounted() {
            this.$http.get('/getgoodsinfo',{id:this.$route.query.id}).then(res=>{
                console.log(res);
                this.goods = res.data.list[0]
                this.specslist = this.goods.specsattr.split(',')
            })
        },
        methods: {
            changespecs(i){
                this.ind = i
            },
            add(){
                this.num++
            },
            del(){
                if(this.num != 0){
                    this.num--
                }
            }
        },
    }
</script>

<style lang="stylus" scoped>
.detail
    width 100%
    height 100%
    display flex
    flex-direction column
    position relative
    header
        width 100%
        height .88rem
        display flex
        justify-content space-between
        padding 0 .3rem
        line-height .88rem
        background-color color
        color #fff
    main
        flex 1
        header
            height 7.5rem
            width 100%
            padding 0px
        .title
            padding 0 .3rem
            border-bottom .01rem solid #ccc
            background-color #f1f1f1
            p
                color color
                margin .2rem 0
        .num
            display flex
            padding .3rem .3rem
            justify-content space-between
            .but
                button
                    width .6rem
                    height .6rem
                    margin 0 .1rem
        .specs
            padding 0 .3rem
            div
                display flex
                margin .3rem 0
                .specsname
                    margin-right 1rem
                    color #b6b6b6
                .specsattr
                    width 1.5rem
                    height .6rem
                    background-color #e1e1e3
                    margin-right .5rem
                    border-radius .05rem
                    text-align center
                    line-height .6rem
                    color #fff
                    &.active
                        background-color #e43a3d    
                
    footer 
        height 1rem
        width 100%
        display flex
        position absolute
        bottom 0
        left 0
        .cart
            width 2rem
            height 100%
            text-align center
            padding-top .1rem
        button
            flex 1
            color #fff
            &.addcart
                background-color  color
            &.buy
                background-color #e43a3d        
        
</style>