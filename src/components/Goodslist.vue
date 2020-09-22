<template>
    <div class="goodslist">
        <ul>
            <li v-for="item in goodslist" :key="item.id">
                <div class="img-box"><img :src="'http://localhost:3000'+item.img" alt=""></div>
                <div class="listcontent">
                    <h3>{{item.goodsname}}</h3>
                    <p>￥{{item.price}}</p>
                    <button>立即抢购</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
       props: {
            goodslist: {
                required: true,
                type: Array,
                default: function() {
                    return []
                }
            }
        }
        
    }
</script>

<style lang="stylus" scoped>
.goodslist
    width 100%
    padding 0 .3rem
    li
        display flex
        box-shadow: 0px 0px 6px -4px
        margin-bottom .3rem
        .img-box
            width 2.9rem
            img 
                width 80%
                margin auto
        .listcontent
            flex 1
            padding .2rem 0 0 .6rem
            p
                color red
                margin .2rem 0
            button
                width 2rem
                height .6rem
                border-radius .06rem
                background-color color
                color #fff
</style>