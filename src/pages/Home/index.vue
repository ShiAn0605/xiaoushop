<template>
    <div class="index" >
       <div class="index-home" v-if="!id">
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
            <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in swiperlist" :key="item.id">
                    <img :src="'http://localhost:3000'+item.img" alt="1">
                </div>
            </div>
            </div>
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
            <router-link to="/category" tag="div">
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
            <div class="goods-list">
                <span :class="{active : index == ind}" v-for="(item,index) in navlist" :key="index" @click="changelist(index)">{{item}}</span>
                <span style=" border-right:1px solid #d0d0d0">热门商品</span> 
                </div>          
        </div>
        <Goodslist v-if="goodslist.length > 0" :goodslist="goodslist[ind].content" />
        <div class="bot">

        </div>
       </div>
       <div class="index-goods" v-if="id">
           <header>
               <i class="iconfont icon-fanhui" @click="back"></i>
               <div class="img-box"><img src="../../assets/logo.jpg" alt=""></div>
               <i class="iconfont icon-gengduo"></i>
           </header>
           <nav>
               <input type="text" placeholder="搜寻商品">
               <i class="iconfont icon-icon-"></i>
           </nav>
           <div class="goodslist">
               <ul>
                   <li v-for="item in category" :key="item.id" @click="jump(item.id)">
                       <div class="left">
                           <img :src="'http://localhost:3000'+item.img" alt="1">
                       </div>
                       <div class="right">
                           <h3>{{item.goodsname}}</h3>
                           <p>￥:{{item.price}}</p>
                       </div>
                   </li>
               </ul>
           </div>
       </div>
    </div>
    
</template>

<script>
    import Swiper from 'swiper'
    import Goodslist from '@/components/Goodslist'
    export default {
        data() {
            return {
                swiperlist:[],
                navlist:["最热商品", "最新商品", "全部商品"],
                ind:0,
                goodslist:[],
                id:'',
                category:[],
            }
        },
        components:{
            Goodslist,
        },
        mounted() {
            this.$http.get('/bannerlist').then(res =>{
                // console.log(res);
                this.swiperlist = res.data.list
                this.$nextTick(()=>{
                    let myswiper = new Swiper('.swiper-container',{
                     autoplay:true
                  })
                })
            })
            this.getGoodslist()
            this.id = this.$route.query.id
            this.$http.get('/getgoods',{fid:this.id}).then(res=>{
                console.log(res);
                this.category = res.data.list
            })
            
        },
        // watch: {
        //     $route(newval){
        //         this.id = newval.query.id
        //     }
        // },
        beforeRouteUpdate(to,from,next) {
            this.id=to.query.id
            next()
        },
        methods: {
            back(){
                this.$router.back()
            },
            jump(id){
                this.$router.push('/detail?id='+id)
            },
            changelist(i){
                this.ind = i
            },
            getGoodslist(){
                this.$http.get('/getindexgoods').then(res =>{
                this.goodslist = res.data.list
                // console.log(this.goodslist);
            })
            }
        },

    }
</script>

<style lang="stylus" scoped>
.index-home
    width 100%
    height 100%
    header 
        height .88rem
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
            padding 0 .3rem
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
        .swiper-container
            width 100%
            height 100%    
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
        width 100%
        justify-content center
        padding .4rem .3rem
        .goods-list
            width 100%
            display flex
            span 
                flex 1
                height .7rem
                border 1px solid #d0d0d0 
                border-right none  
                text-align center  
                line-height .7rem
                &.active
                    background-color color
                    color #fff
.index-goods
    width 100%
    height 100%
    header
        height .88rem 
        display flex
        justify-content space-between
        line-height .88rem
        padding 0 .3rem
        div
            width 1.55rem
            height .4rem
            margin-top .3rem
    nav 
        width 100%
        text-align center
        margin .3rem auto
        position relative
        input 
            width 6.2rem
            height .77rem
            background-color color
            border-radius .33rem
            text-align center
            &::-webkit-input-placeholder
                color #fff
        i   
            display block
            position absolute
            top 28%
            left 38%
            color #fff    
    .goodslist
        padding 0 .3rem
        li
            display flex
            margin .3rem auto
            border-bottom .01rem solid #cccccc
            padding .3rem 0
            .left
                width 1.55rem
                height 1.55rem
            .right
                margin .2rem .5rem
                p
                    margin-top .2rem
                    color color    
        


</style>