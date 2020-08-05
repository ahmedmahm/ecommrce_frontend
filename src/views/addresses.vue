<template>

    <div>
         <sidebar/>
        <div class="address">
            <h2>Add An Address</h2>
            <div class="form-group" >
                <input type="street"
                       class="form-control"
                       id="street"
                       name="street"
                       v-model="form.street"
                       placeholder="Street">

                <input type="city"
                       class="form-control"
                       id="inputCity"
                       name="city"
                       v-model="form.city"
                       placeholder="City">

                <input type="state"
                       class="form-control"
                       id="state"
                       name="state"
                       v-model="form.state"
                       placeholder="State">

                <input type="zip"
                       class="form-control"
                       id="inputZip"
                       name="plz"
                       v-model="form.plz"
                       placeholder="Zip">

                <input type="country"
                       class="form-control"
                       id="inputCounty"
                       name="country"
                       v-model="form.country"
                       placeholder="County">

                <b-button type="submit" @click.prevent="submit" v-bind:class="submit">Add Address</b-button>
            </div>

        </div>
        <div class="your_address" v-for="address in addresses" :key="address">
            <li>{{address.street}},  {{address.plz}}</li>
            <li>{{address.city}}, {{address.country}}</li>

        </div>
    </div>
</template>

<script>
    import sidebar from "@/components/sidebar.vue";
    import axios from 'axios'

    export default {
        name: "addresses",
        components: {
            sidebar,
        },data() {
            return {
                form: {
                    street: "",
                    city: "",
                    plz: "",
                    state:"",
                    country:"",
                    type: "1"
                },addresses : null

            };
        }
        ,
        methods:{
            submit: function () {
              return  axios.post('addresses',this.form)
            }
        },mounted() {
            axios.get('addresses').then(response => (this.addresses = response.data))
        }
    }
</script>
<style lang="css">
    .address{
        margin-left: 300px;
    }
    input, label {
        margin: 5px 5px;
    }

    .form-group {
        margin: 30px auto;
        width: 450px;
    }

    .form-control {
        float: left;
    }

    #inputStreet {
        width: 100%;
    }

    #inputCity {
        width: 50%;
    }

    #inputState {
        width: 15%;
    }

    #inputZip {
        width: 28%;
    }

    #inputCounty {
        width: 45%;
    }

    #inputCountry {
        width: 50%;
    }
    .your_address{
        margin-top: 200px;
        margin-left: 300px;
    }

</style>