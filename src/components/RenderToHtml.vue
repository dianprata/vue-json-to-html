<template>
  <validation-observer v-slot="{ passes }">
    <form @submit.prevent="passes(saveData)">
      <div v-for="data in datas" :key="data.name">
        <div v-if="data.type === 'text'">
          <div class="form-group" v-if="data.subtype === 'text'">
            <label>{{ data.label }} <span v-show="data.required" class="text-danger">*</span></label>
            <validation-provider :rules="data.required ? 'required' : ''" :name="data.label" v-slot="{ errors }">
              <input :type="data.subtype"
                     :name="data.name"
                     v-model="username"
                     :class="[errors.length !== 0 ? 'is-invalid': '', data.className]">
              <span class="invalid-feedback" v-show="errors.length !== 0">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group" v-if="data.subtype === 'password'">
            <label>{{ data.label }} <span v-show="data.required" class="text-danger">*</span></label>
            <validation-provider :rules="data.required ? 'required' : ''" :name="data.label" v-slot="{ errors }">
              <input :type="data.subtype"
                     :name="data.name"
                     v-model="password"
                     :class="[errors.length !== 0 ? 'is-invalid': '', data.className]">
              <span class="invalid-feedback" v-show="errors.length !== 0">{{ errors[0] }}</span>
            </validation-provider>
          </div>
          <div class="form-group" v-if="data.subtype === 'email'">
            <label>{{ data.label }} <span v-show="data.required" class="text-danger">*</span></label>
            <validation-provider :rules="data.required ? 'required' : ''" :name="data.label" v-slot="{ errors }">
              <input :type="data.subtype"
                     :name="data.name"
                     v-model="email"
                     :class="[errors.length !== 0 ? 'is-invalid': '', data.className]">
              <span class="invalid-feedback" v-show="errors.length !== 0">{{ errors[0] }}</span>
            </validation-provider>
          </div>
        </div>
        <div v-if="data.type === 'select'">
          <div class="form-group">
            <label>{{ data.label }} <span v-show="data.required" class="text-danger">*</span></label>
            <v-select :options="data.values"
                      :name="data.name"
                      v-model="gender"
            ></v-select>
          </div>
        </div>
        <div v-if="data.type === 'date'">
          <div class="form-group">
            <label>{{ data.label }} <span v-show="data.required" class="text-danger">*</span></label>
            <date-picker :name="data.name"
                         v-model="dob"
                         format="YYYY-MM-DD"
                         lang="en"
                         class="d-block w-100"></date-picker>
          </div>
        </div>
        <div v-if="data.type === 'radio-group'">
          <div class="form-group">
            <label>{{ data.label }} <span v-show="data.required" class="text-danger">*</span></label>
            <div v-for="d in data.values">
              <b-form-radio v-model="status" :name="d.label" :value="d.value">{{ d.label }}</b-form-radio>
            </div>
          </div>
        </div>
        <div v-if="data.type === 'button'">
          <button :type="data.subtype"
                  :class="data.className"
                  :name="data.name"
          >{{ data.label }}</button>
        </div>
      </div>
    </form>
  </validation-observer>
</template>

<script>
  export default {
    name: "RenderToHtml",
    props: ['datas', 'saveData'],
    data: () => ({
      username: "",
      password: "",
      email: "",
      gender: {
        "label": "Male",
        "value": "male",
        "selected": true
      },
      dob: "",
      status: 1
    }),
    methods: {
      resetForm() {
        this.username = "";
        this.password = "";
        this.email = "";
        this.gender = null;
        this.dob = "";
        this.status = 1;
      }
    }
  }
</script>
