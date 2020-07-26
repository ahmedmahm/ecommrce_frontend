<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
      fixed="top"
      sticky="false"
    >
      <b-container>
        <b-navbar-brand href="#">Tra Monte</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">About</b-nav-item>
            <b-nav-item href="#">Contact</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto" v-if="authenticated">
            <b-navbar-nav>
              <b-nav-item-dropdown text="My Account" right>
                <b-dropdown-item :to="{ name: 'account' }"
                  >Account Overview</b-dropdown-item
                >
                <b-dropdown-item href="#">Settings</b-dropdown-item>
                <b-dropdown-item :to="{ name: 'Home' }" @click.prevent="signOut"
                  >Logout</b-dropdown-item
                >
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto" v-else>
            <b-navbar-nav>
              <b-nav-item :to="{ name: 'signin' }">
                Sign In
              </b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
    }),
    signOut() {
      this.signOutAction();
    },
  },
};
</script>
