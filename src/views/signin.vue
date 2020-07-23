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
    </form>

</template>

<script>


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
            submit () {
                console.log('submitted');
            }
        }
    }
</script>
