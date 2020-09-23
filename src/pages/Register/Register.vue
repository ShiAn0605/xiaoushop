<template>
    <div class="register">
        <div>
            <h3>注册</h3>
        <span>用户名:</span><input type="text" v-model="nickname"><br>
        <span>手机号:</span><input type="text" v-model="phone"><br>
        <span>密 码 :</span><input type="password" style="margin-left:.16rem" v-model="password"><br>
        <button @click="register">注册</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                nickname: '',
                phone:'',
                password:'',
            }
        },
        methods: {
            register(){
                this.$http.post('/register',{nickname:this.nickname,phone:this.phone,password:this.password}).then(res=>{
                    console.log(res);
                    if(res.data.code == 200){
                        
                        this.$router.push('/login')
                    }
                   
                })
            }
        },
    }
</script>

<style lang="stylus" scoped>
.register
    width 100%
    height 100%
    background-image: linear-gradient(180deg, color, orange);
    text-align center
    div
         input 
            width 4rem
            height .6rem
            background-color #f1f1f1
            margin .3rem 0
        button
            width 1rem
            height .6rem
            background red
</style>