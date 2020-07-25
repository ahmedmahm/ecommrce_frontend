<template>
    <nav>
    <ul>
        <li>
            <router-link
                :to="{name:'Home'}"
            >
                Home
            </router-link>
        </li>
        <template v-if="authenticated">
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
        <template v-else>
            <li>
                <router-link
                        :to="{name:'register'}"
                >
                    Register
                </router-link>
            </li>
            <li>
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
<style lang="scss">
    nav{
        display: flex;
        justify-content: space-around;
        align-items: center;
        min-height: 8vh;
        background-color: black;
        margin-block-start: 0;
        margin-block-end: 0;
        padding-inline-start: 0;
        margin-top: 0;

        ul{

            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        li {
            float: left;
        }

        a {
            display: block;
            padding: 8px;
            color: white;

        }
    }
</style>
