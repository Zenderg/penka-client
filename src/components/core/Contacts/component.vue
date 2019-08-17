<template>
  <div class="contacts" v-if="displayContacts">
    <p class="title">Свяжитесь с нами,<br>или оставьте заявку</p>
    <p class="own-phone d-flex align-center">
      <img class="own-icon" :src="phoneIcon" alt="Телефон">
      {{ phone }}
    </p>
    <p class="own-email d-flex align-center">
      <img class="own-icon" :src="emailIcon" alt="Телефон">
      {{ email }}
    </p>
    <ContactsForm />
  </div>
</template>

<script>
    import { mapState } from 'vuex';

    import ContactsForm from '../ContactsForm/component';

    import phoneIcon from './assets/phone.svg';
    import emailIcon from './assets/email.svg';

    export default {
        name: 'Contacts',
        data: () => ({
            phoneIcon,
            emailIcon,
        }),
        components: {
            ContactsForm,
        },
        computed: {
            ...mapState({
                displayContacts: state => state.core.displayContacts,
                phone: state => state.core.phone,
                email: state => state.core.email,
            }),
        },
    };
</script>

<style lang="scss" scoped>
.contacts {
  width: 600px;
  height: 100%;
  background-color: #464646;
  color: white;
  position: fixed;
  right: 0;
  padding: 200px 77px 0;
  p {
    margin: 0;
  }
  .title {
    font-size: 32px;
    margin-bottom: 54px;
  }
  .own-phone, .own-email {
    font-size: 18px;
    margin-bottom: 33px;
    .own-icon{
      margin-right: 24px;
    }
  }
}
</style>
