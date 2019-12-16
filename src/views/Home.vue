<template>
  <div class="py-3">
    <b-row>
      <b-col md="6">
        <render-to-html ref="form" :datas="dataForm" :saveData="saveData"></render-to-html>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import moment from 'moment';
import RenderToHtml from "@/components/RenderToHtml";
import data from '@/data/data';

export default {
  name: 'home',
  components: {
    RenderToHtml
  },
  data: () => ({
    dataForm: [],
  }),
  methods: {
    saveData() {
      const payload = {
        username: this.$refs.form.username,
        password: this.$refs.form.password,
        email: this.$refs.form.email,
        gender: this.$refs.form.gender.value,
        dob: moment(this.$refs.form.dob).format('YYYY-MM-DD'),
        status: this.$refs.form.status
      };
      this.$axios.post('http://localhost:3000/users', payload)
        .then(res => {
          alert('Create user success!');
          this.$refs.form.resetForm();
        }).catch(err => {
          alert('Create user failed!');
          console.log('err', err);
      })
    }
  },
  created() {
    this.dataForm = data;
  }
}
</script>
