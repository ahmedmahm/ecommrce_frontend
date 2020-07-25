<template>
    <form @submit.prevent="submit">
        <div>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" v-model="form.name">
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="form.email">
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password"  id="password" v-model="form.password">
        </div>

        <div>
            <label for="password_confirmation">Password</label>
            <input type="password"  id="password_confirmation" v-model="form.password_confirmation">
        </div>

        <div>
            <button type="submit">
                Sign in
            </button>
        </div>
    </form>

</template>

<script>

    import { mapActions } from 'vuex'
    export default {
        name: 'register',
        components: {
            //
        },
        data () {
            return {
                form: {
                    name : '',
                    email: '',
                    password: '',
                    password_confirmation : '',
                }
            }
        },
        methods:{
            ...mapActions({
                register : 'auth/register'
            }),
            submit () {
                this.register(this.form).then(() => {
                    this.$router.replace({
                        name: 'dashboard'
                    })
                })
            }
        }
    }
</script>
