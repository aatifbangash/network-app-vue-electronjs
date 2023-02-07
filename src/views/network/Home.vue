<template>
  <div class="pane">
    <h1 class="pull-left">Transitions Managementzzz</h1>
    <div class="pull-right filter_box">
      <div class="search-box padded-horizontally">
        <input class="form-control" type="text" placeholder="Search for someone" />
        <button class="icon icon-search"></button>
      </div>
      <div class="padded-horizontally">
        <router-link to="/add_network" class="btn btn-default pull-right">
          <span class="icon icon-plus">Add Network</span>
        </router-link>
      </div>
    </div>
    <table class="table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Network name</th>
          <th>Culture</th>
          <th>Username</th>
          <th>Password</th>
          <th>Login link</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(network, index) in allNetworks" :key="network._id">
          <td>{{ index + 1 }}</td>
          <td>{{ network.name }}</td>
          <td>{{ network.culture }}</td>
          <td>{{ network.username }}</td>
          <td>{{ network.password }}</td>
          <td>{{ network.loginlink }}</td>
          <td>
            <router-link
              :to="{ name: 'view-network', params: { id: network._id } }"
              class="btn btn-primary"
            >View</router-link>
            <router-link
              :to="{ name: 'edit-network', params: { id: network._id } }"
              class="btn btn-primary"
            >Edit</router-link>
            <button @click="deleteNetwork(network._id)" class="btn btn-negative">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- <main role="main" class="col-10 mt-4">
    <router-link to="/add_network" class="btn btn-primary float-right m-2"
      >Add Network</router-link
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Network name</th>
          <th scope="col">Culture</th>
          <th scope="col">Username</th>
          <th scope="col">Password</th>
          <th scope="col">Login link</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(network, index) in allNetworks" :key="network._id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ network.name }}</td>
          <td>{{ network.culture }}</td>
          <td>{{ network.username }}</td>
          <td>{{ network.password }}</td>
          <td>{{ network.loginlink }}</td>
          <td>
            <router-link
              :to="{ name: 'view-network', params: { id: network._id } }"
              class="btn btn-primary"
              >View</router-link
            >
            <router-link
              :to="{ name: 'edit-network', params: { id: network._id } }"
              class="btn btn-primary"
              >Edit</router-link
            >
            <button @click="deleteNetwork(network._id)" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>-->
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
export default {
  name: "home",
  components: {},
  data() {
    return {
      networks: []
    };
  },
  created() {
    this.fetchNetworks();
  },
  methods: {
    ...mapActions("Network", ["deleteNetwork", "fetchNetworks"])
  },
  computed: {
    ...mapGetters("Network", { allNetworks: "getNetworks" })
  }
};
</script>
