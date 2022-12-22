<template>
  <div>
    <Navbar />
    <!-- <EditorModal /> -->
    <ul class="blog-list" v-if="blogs && blogs.length > 0">
      <li class="media" v-for="blog in pageOfItems" :key="blog.id">
        <img class="thumbnail mr-3" :src="blog.thumbnail" />
        <div class="media-body blog-content">
          <h5 class="mt-0 mb-1">{{ blog.title }}</h5>
          {{ blog.content }}
        </div>
        <b-button-toolbar>
          <b-button-group class="mr-1">
            <router-link :to="{ name: 'BlogDetail', params: { id: blog.id } }">
              <b-button title="Read More" pill variant="primary"
                ><b-icon icon="info-circle" aria-hidden="true"></b-icon
              ></b-button>
            </router-link>
            <b-button
              title="Delete"
              pill
              variant="outline-danger"
              @click="deleteBlog(blog.id)"
            >
              <b-icon icon="trash" aria-hidden="true"></b-icon
            ></b-button>
          </b-button-group>
        </b-button-toolbar>
      </li>
    </ul>
    <div v-else class="d-block text-center">No blog found</div>
    <div v-if="blogs && blogs.length > 0">
      <div class="card-footer pb-0 pt-3">
        <jw-pagination
          :items="blogs"
          :pageSize="5"
          @changePage="onChangePage"
        ></jw-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "./Navbar.vue";

export default {
  name: "HomePage",
  components: { Navbar },
  data() {
    return {
      pageOfItems: [],
    };
  },
  computed: mapGetters(["blogs"]),
  created() {
    this.getBlogs();
  },
  methods: {
    ...mapActions(["getBlogs", "deleteBlog"]),
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>

<style>
.blog-list {
  padding: 10px;
  list-style-type: none;
}

.blog-list li {
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 4px;
  background: rgb(240, 240, 240);
  color: black;
}
.blog-list li button {
  font-size: 10px;
}
.button-action-container {
  display: flex;
  justify-content: space-around;
}
.thumbnail {
  width: 64px;
  height: 64px;
}
.blog-content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
}
</style>