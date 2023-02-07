import Datastore from "nedb";

const Network = new Datastore({
  filename: "./database/network.db",
  autoload: true,
  inMemoryOnly: false,
  timestampData: true
});

Network.loadDatabase();

export default {
  namespaced: true,
  state: {
    networks: [],
    currentNetwork: {}
  },
  mutations: {
    ADD_NETWORK(state, doc) {
      state.networks.push(doc);
    },
    FETCH_NETWORKS(state, docs) {
      state.networks = docs;
    },
    DELETE_NETWORK(state, id) {
      state.networks = state.networks.filter(network => network._id !== id);
    },
    FETCH_NETWORK(state, doc) {
      state.currentNetwork = doc;
    }
  },
  actions: {
    addNetwork(context, payload) {
      Network.insert(payload, (err, doc) => {
        if (err) throw err;
        context.commit("ADD_NETWORK", doc);
      });
    },

    fetchNetworks(context) {
      Network.find({}, (err, docs) => {
        if (err) throw err;
        context.commit("FETCH_NETWORKS", docs);
      });
    },

    deleteNetwork(context, id) {
      Network.remove({ _id: id }, {}, function(err) {
        if (err) throw err;
        context.commit("DELETE_NETWORK", id);
      });
    },

    fetchNetwork(context, id) {
      Network.findOne({ _id: id }, (err, doc) => {
        if (err) throw err;
        context.commit("FETCH_NETWORK", doc);
      });
    },
    updateNetwork(context, { network, id }) {
      Network.update(
        { _id: id },
        {
          $set: {
            name: network.name,
            culture: network.culture,
            username: network.username,
            password: network.password,
            loginlink: network.loginlink
          }
        },
        {},
        function(err) {
          if (err) throw err;
        }
      );
    }
  },
  getters: {
    getNetworks: state => {
      return state.networks;
    },
    getNetwork: state => {
      return state.currentNetwork;
    }
  }
};
