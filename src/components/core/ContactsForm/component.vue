<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Ваше имя"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Почта"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-textarea
      name="input-7-1"
      label="Default style"
      value="The Woodman set to work at onceh."
      hint="Hint text"
    ></v-textarea>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>
  </v-form>
</template>

<script>
    export default {
        name: 'ContactsForm',
        data: () => ({
            valid: true,
            nameRules: [
                v => !!v || 'Имя обязательно',
                v => (v && v.length <= 10) || 'Не может быть короче 10 символов',
            ],
            emailRules: [
                v => !!v || 'E-mail обязателен',
                v => /.+@.+\..+/.test(v) || 'E-mail должен быть валидным',
            ],
        }),
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    this.snackbar = true;
                }
            },
        },
    };
</script>

<style scoped>

</style>
