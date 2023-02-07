<template>
  <div id="app">
    <div class="window">
      <header class="toolbar toolbar-header padded-vertically-more header">
        <div class="header-cont">
          <div class="logo">
            <img src="@/assets/logo.png" />
          </div>

          <div class="toolbar-actions pull-right">
            <div class="btn-group">
              <button class="btn btn-default">
                <span class="icon icon-home"></span>
              </button>
              <button class="btn btn-default">
                <span class="icon icon-folder"></span>
              </button>
              <button class="btn btn-default active">
                <span class="icon icon-cloud"></span>
              </button>
              <button class="btn btn-default">
                <span class="icon icon-popup"></span>
              </button>
              <button class="btn btn-default">
                <span class="icon icon-shuffle"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div class="window-content">
        <div class="pane-group">
          <sidebar />
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    Sidebar
  }
};
</script>

<style></style>
