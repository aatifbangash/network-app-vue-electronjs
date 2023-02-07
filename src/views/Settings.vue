<template>
  <main role="main" class="col-8">
    <h1>Settings page</h1>
  </main>
</template>
<script>
export default {
  components: {},
  props: {},
  data: function() {
    return {
      name: "atif",
      age: 25
    };
  },
  methods: {
    submitInput() {
      // alert(this.name);
    }
  },
  computed: {
    // fullname() {
    //   return `my name is ${this.name} and age is ${this.age}`;
    // }
  },
  created: function() {
    // console.log("created");
  },
  mounted: function() {
    // console.log("mounted");
  }
};
</script>
<style></style>
