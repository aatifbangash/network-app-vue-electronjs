<template>
  <div class="pane pane-sm sidebar">
    <nav class="nav-group">
      <span class="nav-group-item">
        <span class="icon icon-home"></span>
        <router-link to="/">Dashboard</router-link>
      </span>
      <span class="nav-group-item">
        <span class="icon icon-user"></span>
        <router-link to="/">Networks</router-link>
      </span>
      <span class="nav-group-item">
        <span class="icon icon-stop"></span>
        <router-link to="/settings">Settings</router-link>
      </span>
      <span class="nav-group-item">
        <span class="icon icon-basket"></span>
        <router-link to="/about">Schedulicity</router-link>
      </span>
      <span class="nav-group-item">
        <span class="icon icon-window"></span>
        Transitions
      </span>
      <span class="nav-group-item">
        <span class="icon icon-cog"></span>
        Settings
      </span>
      <span class="nav-group-item">
        <span class="icon icon-help-circled"></span>
        Help Center
      </span>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    msg: String
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
