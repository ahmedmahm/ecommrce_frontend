<template>
    <div class="wrapper">

        <ul class="sidebar">
            <h2>Sidebar</h2>
            <li><a href="#">Your Orders</a></li>
            <li><a href="#" v-bind:class="go_address" @click="go_address">Your Addresses</a></li>
            <li><a href="#">Return An Item</a></li>
            <li><a href="#">Help & FAQ</a></li>
        </ul>
        <div class="main_content">
            <div class="header">
                <h3>Hello {{user.name}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "account",
        components: {
            //
        } ,computed: {
            ...mapGetters({
                user: "auth/user",
            }),
        },methods:{
            go_address: function () {
                this.$router.replace({
                    name : 'addresses'
                })
            }
        }
    };
</script>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    .wrapper{
        display: flex;
        position: relative;
    }
    .wrapper .sidebar{
        position: fixed;
        width: 300px;
        height: 100%;
        background: #343a40;
        padding: 30px 0;
    }
    .wrapper .sidebar h2{
        text-transform: uppercase;
        text-align: center;
        color: white;
    }
    .wrapper .sidebar li{
        margin: 10px;
        text-align: center;
        margin-top: 30px;
    }
    .wrapper .sidebar li a{
        color: white;
    }
    .wrapper .main_content{
        margin-left: 320px;
        margin-top: 20px;
    }
</style>
