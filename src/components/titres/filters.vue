<template>
  <accordion
    :sub="false"
    class="mb"
  >
    <template slot="title">Filtres</template>
    <template slot="sub">
      <ul class="list-sans mb-xxs">
        <li
          v-for="filterSelected in filterSelecteds"
          :key="filterSelected.name"
        >
          <pill>{{ filterSelected.name }}</pill>
        </li>
      </ul>
    </template>
    <div class="tablet-blobs mt">
      <div class="tablet-blob-1-2 large-blob-1-3">
        <div class="mb hide">
          <h6>Localisation</h6>
          <input
            type="text"
            placeholder="Région, département, commune…"
            class="p-s"
          >
        </div>
        <div class="mb hide">
          <h6>Titulaire</h6>
          <input
            type="text"
            placeholder="Nom du titulaire…"
            class="p-s"
          >
        </div>
        <div class="mb">
          <h6>Noms</h6>
          <input
            :value="noms"
            type="text"
            placeholder="…"
            class="p-s"
            @blur="nomsInput"
          >
        </div>
        <div class="mb">
          <h6>Substances</h6>
          <input
            :value="substances"
            type="text"
            placeholder="Or, Argent, Ag…"
            class="p-s"
            @blur="substancesInput"
          >
        </div>
      </div>
      <div class="tablet-blob-1-2 large-blob-1-3">
        <h6>Domaines</h6>
        <ul class="list-sans">
          <li
            v-for="domaine in domaines"
            :key="domaine.id"
          >
            <label>
              <input
                :value="domaine.id"
                :checked="domaine.checked"
                type="checkbox"
                class="mr-s"
                @change="domaineToggle"
              >
              <pill
                :color="`bg-title-domaine-${domaine.id}`"
                class="mr-xs mono"
              >{{ domaine.id }}</pill>
              {{ domaine.nom }}
            </label>
          </li>
        </ul>
      </div>
      <div class="tablet-blob-1-2 large-blob-1-3">
        <div class="mb">
          <h6>Types</h6>
          <ul class="list-sans">
            <li
              v-for="type in types"
              :key="type.nom"
            >
              <label>
                <input
                  :value="type.nom"
                  :checked="type.checked"
                  type="checkbox"
                  class="mr-s"
                  @change="typeToggle"
                >
                <span class="cap-first">{{ type.nom }}</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="tablet-blob-1-2 large-blob-1-3">
        <div class="mb">
          <h6>Statuts</h6>
          <ul class="list-sans">
            <li
              v-for="statut in statuts"
              :key="statut.id"
            >
              <label>
                <input
                  :value="statut.id"
                  :checked="statut.checked"
                  type="checkbox"
                  class="mr-s"
                  @change="statutToggle"
                >
                <dot :color="`bg-${statut.couleur}`" />
                {{ statut.nom }}
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </accordion>
</template>

<script>
import Dot from '../ui/dot.vue'
import Pill from '../ui/pill.vue'
import Accordion from '../ui/accordion.vue'

export default {
  components: {
    Pill,
    Dot,
    Accordion,
  },

  data () {
    return {
      filterSelecteds: [{
        name: 'test'
      }]
    }
  },

  computed: {
    domaines () {
      return this.$store.state.titres.domaines
    },
    types () {
      return this.$store.state.titres.types && this.$store.state.titres.types.reduce((res, cur) => {
        const e = res.find(e => e.nom === cur.nom)
        return e ? res : [...res, cur]
      }, [])
    },
    statuts () {
      return this.$store.state.titres.statuts
    },
    substances () {
      return this.$store.state.titres.substances
    },
    noms () {
      return this.$store.state.titres.noms
    }
  },

  methods: {
    typeToggle (t) {
      this.$store.dispatch('titres/filterToggle', { name: 'types', value: t.target.value, property: 'nom' })
    },
    statutToggle (t) {
      this.$store.dispatch('titres/filterToggle', { name: 'statuts', value: t.target.value, property: 'id' })
    },
    domaineToggle (t) {
      this.$store.dispatch('titres/filterToggle', { name: 'domaines', value: t.target.value, property: 'id' })
    },
    substancesInput (t) {
      this.$store.dispatch('titres/filterInput', { name: 'substances', value: t.target.value })
    },
    nomsInput (t) {
      this.$store.dispatch('titres/filterInput', { name: 'noms', value: t.target.value })
    }
  }

}
</script>

