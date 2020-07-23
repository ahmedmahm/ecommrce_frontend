<template>
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
            Hello {{user.name}}
        </li>
        <li>
            <router-link
                    :to="{name:'dashboard'}"
            >
                dashboard
            </router-link>
        </li>
        <li>
            <a href="#">Sign Out</a>
        </li>
        </template>
        <template v-else>
            <li>
                <router-link
                        :to="{name:'signin'}"
                >
                    Sign in
                </router-link>
            </li>
        </template>
    </ul>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed:{
            ...mapGetters({
                authenticated : 'auth/authenticated',
                user : 'auth/user',
            })
        }
    }
</script>