<template>
    <div class="cart">
        <header>
            <i class="iconfont icon-fanhui"></i>
            <h3>购物车</h3>
            <i class="iconfont icon-gengduo"></i>
        </header>
        <main>
            <ul>
                <li v-for="(item,index) in goodslist" :key="item.id" @touchstart="start" @touchend="end(index, $event)" ref="lis" >
                    <i class="iconfont icon-duoxuan" :class="{active: item.isChecked}" @click="changeChecked(index)"></i>
                    <div class="img-box"><img :src="'http://localhost:3000'+item.img "  alt=""></div>
                    <div class="content">
                        <h3>{{item.goodsname}}</h3>
                        <p>{{item.price}}</p>
                    </div>
                    <div class="btn">
                        <button>-</button>
                        <span>{{item.num}}</span>
                        <button>+</button>
                    </div>
                    <button class="del" @click="del(item.id)">删除</button>
                </li>
            </ul>
        </main>
        <footer>
            <div class="all" @click="changeall">
                <i class="iconfont icon-duoxuan" :class="{changeall:isChecked}" ></i>
                <span>全选</span>
            </div>
            <div class="right">
                <p>总计：{{totalPrice}}</p>
                <p class="pdd">去结算({{totalCount}}件)</p>
            </div>
        </footer>
    </div>
</template>

<script>
import { SwipeCell } from 'vant';
    export default {
        methods: {
            getlist(){
                 this.$http.get('/cartlist',{uid:this.$store.state.user.uid}).then(res=>{
                console.log(res);
                this.goodslist = res.data.list.map(item=>{
                    return {...item,isChecked:false}
                })
                console.log(this.goodslist);
            })
            },
            del(id){
                this.$http.post('/cartdelete',{id}).then(res =>{
                    console.log(res);
                    this.getlist()
                })
                
            },

            start(e){
                console.log(e);
                this.startX = e.touches[0].clientX
            },
            end(i,e){
                let endx = e.changedTouches[0].clientX
                if(this.startX - endx >15){
                    this.$refs.lis[i].style.transform = "translateX(-1rem)"
                }
                if(this.startX - endx <15){
                    this.$refs.lis[i].style.transform = "translateX(0rem)"
                }
            },

            changeChecked(i){
                this.goodslist[i].isChecked = !this.goodslist[i].isChecked
            },
            changeall(){
                this.isChecked = !this.isChecked
                this.goodslist.forEach(item =>{
                    item.isChecked = this.isChecked
                })
            }
        },
        watch: {
            goodslist:{
                deep:true,
                handler(newVal){
                    this.isChecked = newVal.every(item =>{
                        return item.isChecked
                    });
                    let arr = newVal.filter(item=>{
                        return item.isChecked
                    })
                    this.totalCount = arr.length
                    this.totalPrice =0
                    arr.forEach(item =>{
                        this.totalPrice += item.num * item.price
                    })
                   
                }
            }
        },
        data() {
            return {
                goodslist: [],
                isChecked:false,
                totalCount:'',
                totalPrice:'',
                startX:''
            }
        },
        mounted() {
           this.getlist()
        },  
    }
</script>

<style lang="stylus" scoped>
.cart
    width 100%
    height 100%
    display flex
    flex-direction column
    header 
        height .88rem
        display flex
        justify-content space-between
        padding 0 .3rem
        line-height .88rem
        color #fff
        background-color color
    main 
        flex 1
        overflow auto
        ul
            overflow hidden
            li
                display flex
                height 1.75rem
                width 100%
                align-items: center;
                justify-content space-between
                position relative
                transition all 1s
                .active
                    color color
                .img-box
                    width 1.3rem
                .btn
                    button
                        width .66rem
                        height .6rem   
                        background-color #f1f1f1
                .del
                    width 1rem
                    height 100%
                    position absolute
                    right -1rem
                    background-color #e43a3d
                    color #fff         

    footer 
        height 1rem
        margin-bottom 1rem 
        display flex
        text-align center
        line-height 1rem
        .all
            width 2rem
            .changeall
                color color
        .right
            flex 1
            display flex            
            p
                flex 1
                &.pdd
                    background-color color
                    color #fff           
</style>