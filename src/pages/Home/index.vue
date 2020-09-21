<template>
    <div class="index">
        <header>
            <router-link to="/home/index" tag="div">
            <img src="../../assets/logo.jpg" alt="1">
            </router-link>
            <div>
                <input type="text" placeholder="搜寻商品">
            </div>
            <div>
                <span class="iconfont icon-gengduo"></span>
            </div>
        </header>

        <nav>
            <div class="navLeft">推荐</div>
            <div class="navMid"><ul>
                <li>女装</li>
                <li>鞋包</li>
                <li>居家</li>
                <li>母婴儿童</li>
                <li>美食</li>
                </ul></div>
            <div class="iconfont icon-xiala"></div>
        </nav>
        <div class="banner">

        </div>
        <div class="listnav">
            <router-link to="/#" tag="div">
            <img src="../../assets/icon_1.jpg" alt="1">
            <p>限时抢购</p>
            </router-link>
            <router-link to="/#" tag="div">
            <img src="../../assets/icon_2.jpg" alt="">
            <p>积分商城</p>
            </router-link>
            <router-link to="/#" tag="div">
            <img src="../../assets/icon_3.jpg" alt="">
            <p>联系我们</p>
            </router-link>
            <router-link to="/#" tag="div">
            <img src="../../assets/icon_4.jpg" alt="">
            <p>商品分类</p>
            </router-link>
        </div>
        <div class="bar">

        </div>
        <div>
            <img src="../../assets/首页_02.jpg" alt="">
        </div>
        <div class="goods">
            <p>全部商品</p>
            <p>最新推荐</p>
            <p>热门商品</p>
            <p style=" border-right:1px solid #d0d0d0">热门商品</p>
        </div>
        <div class="bot">

        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
.index
    width 100%
    height 100%
    header 
        height 1.1rem
        display flex
        div
            flex 1
            text-align center
            img 
                width 1.55rem
                height .4rem
                margin: .3rem 0px 0px .2rem;
            input 
                width 3rem
                height .4rem
                background-color #eeeeee
                text-align center   
                margin: .3rem 0px 0px .2rem;
                border-radius 5px
            span 
                margin: .3rem 0px 0px .2rem;
                display block  
nav 
        height .5rem
        display flex
        line-height .5rem
        border-bottom 1px solid #e4e4e4
        font-size .14rem
        .navLeft
            width .7rem
            text-indent 3px
            color red
        .navMid
            flex 1
            ul
                display flex
                li
                    flex 1
                    text-align center
        .iconfont
            width .7rem    
.banner
    height 3rem
    background-color pink    
.listnav
    height 1.8rem
    display flex
    div
        flex 1
        text-align center
        img 
            width .64rem
            height .64rem
            margin: .3rem 0px 0px .6rem;  
.bar
    height .3rem
    background-color #f1f1f1 
.bot
    height 1rem
.goods
    display flex
    justify-content center
    padding .4rem 0
    p
        width 1.7rem
        height .7rem
        border 1px solid #d0d0d0 
        border-right none  
        text-align center  
        line-height .7rem
                      
</style>