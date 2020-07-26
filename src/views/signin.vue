<template>
    <form @submit.prevent="submit">
        <div>
            <label for="email">Email</label>
            <input type="text" name="email" id="email" v-model="form.email">
        </div>
       <div>
           <label for="password">Password</label>
           <input type="password" name="password" id="password" v-model="form.password">
       </div>

        <div>
            <button type="submit">
                Sign in
            </button>
        </div>
        <div>
            <label>New Customer?   </label>
            <router-link
            :to="{name:'register'}">Register</router-link>
        </div>
    </form>

</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: 'signin',
        components: {
            //
        },
        data () {
            return {
                form: {
                    email: '',
                    password: '',
                }
            }
        },
        methods:{
            ...mapActions({
                signin : 'auth/signIn'
            }),
           submit () {
                this.signin(this.form).then(() => {
                    this.$router.replace({
                        name: 'dashboard'
                    })
                })
            }
        }
    }
</script>
