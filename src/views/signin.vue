<template>

  <b-container fluid="sm" class="head">
    <b-row align-v="stretch">
      <b-col cols="5">
        <div>
          <b-form @submit.prevent="submit">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="email"
                v-model="form.email"
                name="email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>
            <div>
              <b-form @submit.stop.prevent>
                <b-col cols="0">
                  <label for="text-password">Password:</label>
                </b-col>
                <b-input
                  type="password"
                  name="password"
                  id="text-password"
                  v-model="form.password"
                  aria-describedby="password-help-block"
                  placeholder="Enter Password"
                  required
                ></b-input>
                <b-form-text id="password-help-block">
                  Your password must be at least 8 characters long.
                </b-form-text>
              </b-form>
            </div>

            <b-form-group id="input-group-4">
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                <b-co cols="4">
                  <label>New Customer? </label>
                  <router-link :to="{ name: 'register' }">
                    Register</router-link
                  >
                </b-co>
                <!-- <b-form-checkbox value="me"> Remember me</b-form-checkbox> -->
              </b-form-checkbox-group>
            </b-form-group>

            <b-button type="submit" variant="primary">Login</b-button>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "signin",
  components: {
    //
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      signin: "auth/signIn",
    }),
    submit() {
      this.signin(this.form).then(() => {
        this.$router.replace({
          name: "dashboard",
        });
      });
    },
  },
};
</script>
<style lang="css">
.head {
  float: center;
}
</style>
