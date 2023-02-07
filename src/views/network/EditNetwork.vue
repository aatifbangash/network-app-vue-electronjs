<template>
  <div class="pane">
    <h1 class>Edit network</h1>
    <div class="form-container">
      <form @submit.prevent="submitNetwork">
        <div class="form-group">
          <label for="name">Network name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="currentNetwork.name"
            placeholder="Network name"
          />
        </div>
        <div class="form-group">
          <label for="culture">Culture</label>
          <select
            class="form-control"
            id="culture"
            v-model="currentNetwork.culture"
          >
            <option value="">Select culture</option>
            <option value="nl">NL</option>
            <option value="be">BE</option>
            <option value="it">IT</option>
            <option value="pt">PT</option>
            <option value="uk">UK</option>
            <option value="se">SE</option>
            <option value="es">ES</option>
            <option value="pl">PL</option>
            <option value="no">NO</option>
            <option value="de">DE</option>
            <option value="fi">FI</option>
            <option value="au">AU</option>
          </select>
        </div>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            v-model="currentNetwork.username"
            placeholder="Username"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="text"
            class="form-control"
            id="password"
            v-model="currentNetwork.password"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <label for="loginlink">Login page Link</label>
          <input
            type="text"
            class="form-control"
            id="loginlink"
            v-model="currentNetwork.loginlink"
            placeholder="Login page Link"
          />
        </div>
        <div class="form-actions">
          <button type="submit" class="btn btn-form btn-primary">
            Update Network
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "add-network",
  data() {
    return {
      id: 0,
      network: {}
    };
  },
  methods: {
    ...mapActions("Network", ["updateNetwork", "fetchNetwork"]),
    submitNetwork() {
      if (Object.keys(this.currentNetwork).length > 0) {
        this.updateNetwork({
          network: this.currentNetwork,
          id: this.id
        });
        this.$router.push("/");
      }
    }
  },
  computed: {
    ...mapGetters("Network", { currentNetwork: "getNetwork" })
  },
  created() {
    this.id = this.$route.params.id;
    this.fetchNetwork(this.$route.params.id);
  }
};
</script>
