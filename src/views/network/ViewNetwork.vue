<template>
  <div class="pane">
    <h1 class>Network details</h1>
    <div class="form-container">
      <tbody>
        <tr>
          <th scope="col">ID</th>
          <td scope="col">{{ network._id }}</td>
        </tr>
        <tr>
          <th scope="col">Network Name</th>
          <td scope="col">{{ network.name }}</td>
        </tr>
        <tr>
          <th scope="col">Culture</th>
          <td scope="col">{{ network.culture }}</td>
        </tr>
        <tr>
          <th scope="col">Username</th>
          <td scope="col">{{ network.username }}</td>
        </tr>
        <tr>
          <th scope="col">Password</th>
          <td scope="col">{{ network.password }}</td>
        </tr>
        <tr>
          <th scope="col">Login Link</th>
          <td scope="col">{{ network.loginlink }}</td>
        </tr>
        <tr>
          <th scope="col">&nbsp;</th>
          <td scope="col">
            <button class="btn btn-primary" @click="loadTransactions()">Load transactions</button>
            <button class="btn btn-primary" @click="testing()">test</button>
            <pre>{{ network.name | camelize }}</pre>
            <pre>{{ transactions }}</pre>
          </td>
        </tr>
      </tbody>
    </div>
  </div>
</template>

<script>
// const electron = require("electron");
// const { ipcRenderer } = electron;
import { mapActions, mapGetters } from "vuex";
export default {
  name: "view-network",
  data() {
    return {
      transactions: {}
    };
  },
  methods: {
    ...mapActions("Network", ["fetchNetwork"]),
    testing() {
      // console.log(this.$options.filters.camelize("Awin  yahoo's code!EN"));
    },
    loadTransactions() {
      fetch(`${this.$global.API_URL}`, {
        method: "POST",
        body: JSON.stringify({
          ...this.network,
          networkName: this.$options.filters.camelize(
            this.network.name //used for className on server
          )
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(resp => resp.json())
        .then(data => {
          this.transactions = data;
          // ipcRenderer.sendSync("networks:fetch", "ok");
          // console.log(this.transactions);

          if (this.transactions.status === 200) {
            let headers = this.transactions.header;

            var fileName = "transactions";
            var rows = this.transactions.data;
            this.$helper.exportCSVFile(headers, rows, fileName);
          } else {
            alert("Transactions error encountered.");
          }
        });
    }
  },
  computed: {
    ...mapGetters("Network", { network: "getNetwork" })
  },
  created() {
    this.fetchNetwork(this.$route.params.id);
  },
  filters: {
    slug(Text) {
      return Text.toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    },
    camelize(str) {
      if (!str) {
        return str;
      }
      return str
        .replace(/[^a-zA-Z ]/g, "")
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
          if (+match === 0) return "";
          return index == 0 ? match.toUpperCase() : match.toUpperCase();
        });
    }
  }
};
</script>
