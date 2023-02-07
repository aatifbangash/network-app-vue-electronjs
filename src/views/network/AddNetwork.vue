<template>
  <div class="pane">
    <h1 class>Add network</h1>
    <div class="form-container">
      <form @submit.prevent="submitNetwork">
        <div class="form-group">
          <label for="name">Network name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="network.name"
            placeholder="Network name"
          />
        </div>
        <div class="form-group">
          <label for="culture">Culture</label>
          <select class="form-control" id="culture" v-model="network.culture">
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
            v-model="network.username"
            placeholder="Username"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="text"
            class="form-control"
            id="password"
            v-model="network.password"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <label for="loginlink">Login page Link</label>
          <input
            type="text"
            class="form-control"
            id="loginlink"
            v-model="network.loginlink"
            placeholder="Login page Link"
          />
        </div>
        <div class="form-actions">
          <button type="submit" class="btn btn-form btn-primary">
            Add Network
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "add-network",
  data() {
    return {
      network: {
        culture: ""
      }
    };
  },
  methods: {
    ...mapActions("Network", ["addNetwork"]),
    submitNetwork() {
      console.log(this.network);
      if (Object.keys(this.network).length > 0) {
        this.addNetwork(this.network);
        this.$router.push("/");
      }
    }
  }
};
</script>
