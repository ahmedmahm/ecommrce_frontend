<template>
    <nav>
    <ul>
        <li class="left">
            <router-link
                :to="{name:'Home'}"
            >
                Home
            </router-link>
        </li>
        <template class="right" v-if="authenticated">

            <li class="right">
                <a href="#" @click.prevent="signOut">Sign Out</a>
            </li>
            <li class="right">
                <router-link
                    :to="{name:'account'}"
                >
                My Account
                </router-link>
            </li>
        </template>

        <template v-else class="else">
            <li class="right">
                <router-link
                        :to="{name:'signin'}"
                >
                    Sign in
                </router-link>
            </li>
        </template>

    </ul>
    </nav>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        computed:{
            ...mapGetters({
                authenticated : 'auth/authenticated',
                user : 'auth/user',

            })
        },
        methods: {
            ...mapActions({
                signOutAction: 'auth/signOut'
            }),
            signOut () {
                this.signOutAction()

            }
        }
    }
</script>
<style lang="css">
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }

    .left{
        float: left;
    }

     .right{
        float: right;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    /* Change the link color to #111 (black) on hover */
    li a:hover {
        background-color: #111;
    }

</style>
