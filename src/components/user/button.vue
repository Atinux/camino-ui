<template>
  <div> 
    <button
      v-if="user" 
      class="btn-alt pill h5 p-s my--xs ml-xs"
      :class="{'active': menu.component && menu.component.name === 'UserMenu'}"
      alt="Url"
      @click="menuToggle"
    >
      <i class="icon-24 icon-24-user " />
    </button>
    <button
      v-else
      class="btn-alt pill h5 p-s my--xs ml-xs"
      alt="Url"
      @click="popupOpen"
    >
      <i class="icon-24 icon-24-login" />
    </button>
  </div>
</template>

<script>
import UserLoginPopup from './login-popup.vue'
import UserMenu from './menu.vue'

export default {
  data () {
    return {
      popupVisible: false
    }
  },

  computed: {
    user () {
      return this.$store.state.user.current
    },
    menu () {
      return this.$store.state.menu
    }
  },

  methods: {
    popupOpen () {
      this.$store.commit('popupOpen', { component: UserLoginPopup })
    },
    popupClose () {
      this.$store.commit('popupClose')
    },
    logout () {
      this.$store.dispatch('user/logout')
    },
    menuToggle () {
      this.$store.dispatch('menuToggle', UserMenu)
    }
  }
}
</script>
  