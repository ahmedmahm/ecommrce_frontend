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
            <li>
                <a href=""> {{ user.name }}</a>

            </li>
        <li>
            <router-link
                    :to="{name:'dashboard'}"
            >
                dashboard
            </router-link>
        </li>
        <li>
            <a href="#" @click.prevent="signOut">Sign Out</a>
        </li>
        </template>
        <template v-else class="else">
            <li class="right">
                <router-link
                        :to="{name:'register'}"
                >
                    Register
                </router-link>
            </li>
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

    .else right{
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
