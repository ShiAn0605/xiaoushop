<template>
    <div class="home">
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <router-link to="/home/index" tag="div">
            
            <i class="iconfont icon-shouye"></i>
            <p>首页</p>
            </router-link>
            <router-link to="/home/cart" tag="div"><i class="iconfont icon-gouwuche"></i>
            <p>购物车</p></router-link>
            <router-link to="/home/my" tag="div"><i class="iconfont icon-wode"></i>
            <p>我的</p></router-link>
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
.home
    width 100%
    height 100%
    display flex
    flex-direction column
    position relative
    main
        flex 1
    footer 
        height 1rem
        display flex
        border-top 1px solid #cccccc
        padding-top 7px
        position fixed
        width 100%
        left 0
        bottom 0
        background-color #fff
        div
            flex 1
            text-align center
            &.router-link-active
                color color


</style>