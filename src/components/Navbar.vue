<template>
  <div class="navbar-blog">
    <h1>Blog Demo</h1>
    <ul>
      <li>
        <b-button id="show-btn" @click="showModal">New Blog</b-button>
        <b-modal ref="my-modal" hide-footer title="Add New Blog">
          <BlogForm />
          <b-button
            class="mt-3 button-close-action"
            variant="outline-danger"
            @click="hideModal"
            >Close</b-button
          >
        </b-modal>
      </li>
      <li>
        <div class="input-group">
          <input
            v-model="search"
            type="text"
            class="form-control input-search"
            placeholder="Search..."
          />
          <div class="input-group-append" @click="getBlogs(search)">
            <div class="input-group-text" id="btnGroupAddon">
              <b-icon icon="search"></b-icon>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import BlogForm from "./BlogForm.vue";
export default {
  name: "NavbarDemo",
  components: { BlogForm },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapActions(["getBlogs"]),
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.getBlogs();
      this.$refs["my-modal"].hide();
    },
  },
};
</script>
<style scoped>
.navbar-blog {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}

.navbar-blog ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
.button-close-action {
  float: right;
}
</style>
