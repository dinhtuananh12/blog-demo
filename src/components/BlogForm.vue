<template>
  <b-form @submit.stop.prevent="onSubmit">
    <b-form-group
      id="example-input-group-1"
      label="Title"
      label-for="example-input-1"
    >
      <b-form-input
        id="example-input-1"
        name="example-input-1"
        v-model="$v.form.title.$model"
        :state="validateState('title')"
      ></b-form-input>

      <b-form-invalid-feedback id="input-1-live-feedback"
        >This is a required field.</b-form-invalid-feedback
      >
    </b-form-group>

    <b-form-group
      id="example-input-group-2"
      label="Content"
      label-for="example-input-2"
    >
      <b-form-input
        id="example-input-2"
        name="example-input-2"
        v-model="$v.form.content.$model"
        :state="validateState('content')"
      ></b-form-input>
      <b-form-invalid-feedback id="input-2-live-feedback"
        >This is a required field and must be at least 3
        characters.</b-form-invalid-feedback
      >
    </b-form-group>

    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button class="ml-2" @click="resetForm()">Reset</b-button>
  </b-form>
</template>

<script>
import { mapActions } from "vuex";
import { v4 as uuidv4 } from "uuid";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  name: "BlogForm",
  data() {
    return {
      form: {
        title: null,
        content: null,
      },
    };
  },
  validations: {
    form: {
      title: {
        required,
      },
      content: {
        required,
        minLength: minLength(3),
      },
    },
  },
  methods: {
    ...mapActions(["addBlog"]),
    onSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.addBlog({
        id: uuidv4(),
        title: this.form.title,
        content: this.form.content,
      });
      this.resetForm();
    },
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    resetForm() {
      this.form = {
        title: null,
        content: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
  },
};
</script>

<style scoped>
form {
  padding: 10px;
}

input[type="text"] {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin: 6px 0;
  border: 1px solid #ced4da;
}

input[type="submit"] {
  margin: 10px auto;
  padding: 10px;
  border: 0;
  display: block;
}
</style>