<template>
    <div>
        <input type="text" v-model="phone">
        <br>
        <input type="text" v-model="password">
        <br>
        <button @click="login">登陆</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
                phone:'',
                password:'',
            }
        },
        methods: {
            login(){
                this.$http.post('/login',{phone:this.phone,password:this.password}).then(res=>{
                    if(res.data.code ==200){
                        this.$store.commit('setuser',res.data.list)
                    }
                })
            }
        },
    }
</script>

<style lang="stylus" scoped>

</style>