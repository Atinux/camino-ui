<template>
  <div class="bg-bg">
    <div class="container pt">
      <div class="tablet-blobs">
        <div class="tablet-blob-1-3">
          <ul class="list-sans">

            <li>
              <router-link
                :to="{ name: 'titres' }"
                class="btn-transparent text-decoration-none bold"
                active-class="active"
              >Titres miniers</router-link>
            </li>
            <li><router-link
              :to="{ name: 'utilisateurs' }"
              class="btn-transparent text-decoration-none bold"
              active-class="active"
            >Utilisateurs</router-link>
            </li>
            <li><a href="" /></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'MainMenu',

  computed: {
    menu () {
      return this.$store.state.menu
    }
  },

  methods: {
  }
}
</script>
