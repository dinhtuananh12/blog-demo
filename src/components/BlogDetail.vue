<template>
  <div v-if="blogDetail">
    <b-card
      :title="blogDetail.title"
      :img-src="blogDetail.thumbnail"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2 blog-card"
    >
      <b-card-text>
        {{ blogDetail.content }}
      </b-card-text>
      <router-link :to="{ name: 'Home' }"
        ><b-button class="button-back" variant="primary">Go Back</b-button>
      </router-link>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BlogDetail",
  computed: mapGetters(["blogDetail"]),
  created() {
    this.getBlogDetail(this.$route.params.id);
  },
  methods: {
    ...mapActions(["getBlogDetail"]),
  },
};
</script>

<style>
.blog-card {
  max-width: 100% !important;
}
.blog-card img {
  width: 100%;
}
.button-back {
  float: right;
}
</style>