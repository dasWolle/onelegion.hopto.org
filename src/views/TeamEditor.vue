<template>
  <div class="team_editor">
    <a class="underline cursor-pointer" @click="goBack">Zurück</a>
    <div class="flex">
      <div class="editor w-5/6">
        <div class="flex my-4">
          <label class="mr-3">Team Name:</label>
          <input type="text" v-model="name" />
        </div>
        <div class="flex my-4">
          <div class="flex flex-col px-3 w-1/2">
            <label class="">Unit/Weapon Names (search):</label>
            <div class="flex">
              <div class="grid place-content-center mr-2">1:</div>
              <Autocomplete
                class="mt-2"
                @input="(value) => saveAutocompleteValues('units', 0, value)"
                :list="$store.getters.searchUnits(autocompleteValues.units[0])"
                @selected="(value) => units[0] = value.id"
              />
            </div>
            <div class="flex">
              <div class="grid place-content-center mr-2">2:</div>
              <Autocomplete
                class="mt-2"
                @input="(value) => saveAutocompleteValues('units', 1, value)"
                :list="$store.getters.searchUnits(autocompleteValues.units[1])"
                @selected="(value) => units[1] = value.id"
              />
            </div>
            <div class="flex">
              <div class="grid place-content-center mr-2">3:</div>
              <Autocomplete
                class="mt-2"
                @input="(value) => saveAutocompleteValues('units', 2, value)"
                :list="$store.getters.searchUnits(autocompleteValues.units[2])"
                @selected="(value) => units[2] = value.id"
              />
            </div>
            <div class="flex">
              <div class="grid place-content-center mr-2">4:</div>
              <Autocomplete
                class="mt-2"
                @input="(value) => saveAutocompleteValues('units', 3, value)"
                :list="$store.getters.searchUnits(autocompleteValues.units[3])"
                @selected="(value) => units[3] = value.id"
              />
            </div>
          </div>
          <div class="flex flex-col px-3 w-1/2">
            <div class="flex flex-col">
              <label class="mr-3">Banner (search):</label>
              <Autocomplete
                @input="(value) => saveAutocompleteValues('banner', 0, value)"
                :list="$store.getters.search('kingdoms', autocompleteValues.banner[0])"
                @selected="(value) => bannerKingdomID = value.id"
              />
            </div>
            <div class="flex flex-col mt-3">
              <label class="mr-3">Hero Class (search):</label>
              <Autocomplete
                @input="(value) => saveAutocompleteValues('heroClass', 0, value)"
                :list="$store.getters.search('classes', autocompleteValues.heroClass[0])"
                @selected="(value) => heroClassID = value.id"
              />
            </div>
            <div class="flex flex-col mt-5">
              <label class="mr-3">Creator:</label>
              <div><input type="text" v-model="creator" /></div>
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <label>Result:</label>
          <div><input type="text" v-model="result" /></div>
        </div>
        <div class="flex flex-col mt-4">
          <label>Usable For (space-separated):</label>
          <div><textarea v-model="usableFor" rows="1" cols="80"></textarea></div>
        </div>
        <div class="flex flex-col mt-4">
          <label>Description:</label>
          <div><textarea v-model="description" rows="4" cols="80"></textarea></div>
        </div>
        <button class="btn-gray" @click="saveAndReturn">save and back</button>
      </div>
      <div class="side_bar w-1/6 shadow-lg flex flex-col p-3">
        <div>Name: {{ name }}</div>
        <div class="grid grid-cols-2 gap-1">
          <template v-for="unitID in units">
            <template v-if="unitID > 0">
              <template v-if="unitID >= 6000">
                <img class="w-full" :src="$store.getters.unit(unitID).imageUrl">
              </template>
              <template v-else>
                <div>
                  <img class="w-full" :src="$store.getters.unit(unitID).imageUrl">
                  <img class="w-full" :src="$store.getters.heroClass(heroClassID).imageUrl">
                </div>
              </template>
            </template>
          </template>
        </div>
        <div>{{ $store.getters.kingdom(bannerKingdomID).bannerName }}</div>
        <img class="w-full px-3 py-2" :src="$store.getters.kingdom(bannerKingdomID).bannerImageUrl">
      </div>
    </div>
  </div>
</template>

<script>
  import Autocomplete from "@/components/Autocomplete";

  export default {
    name: "TeamEditor",
    components: { Autocomplete },
    props: { teamToEdit: Number },
    data() {
      return {
        autocompleteValues: { units: [ "", "", "", "" ], banner: [ "" ], heroClass: [ "" ] },
        bannerKingdomID: 0,
        creator: "",
        description: "",
        usableFor: [],
        heroClassID: 0,
        name: "",
        result: "",
        units: [ 0, 0, 0, 0 ],
      };
    },
    methods: {
      goBack() { this.$router.go(-1); },
      save() {
        this.$store.commit("team", {
          id: this.teamToEdit,
          team: {
            bannerKingdomID: this.bannerKingdomID,
            creator: this.creator,
            description: this.description,
            id: this.$route.params.id ? this.$route.params.id : Math.random().toFixed(20) * Math.pow(10, 20),
            usableFor: this.usableFor.split(" "),
            heroClassID: this.heroClassID,
            name: this.name,
            result: this.result,
            units: this.units
          }
        });
      },
      saveAndReturn() {
        this.save();
        this.goBack();
      },
      saveAutocompleteValues(type, nr, value) { this.autocompleteValues[type][nr] = value; },
      selectUnit(slot, unit) { this.units[slot] = unit.id; }
    },
    watch: {
      units(value) { console.log(value); }
    },
    created() {
      if (this.teamToEdit || this.teamToEdit === 0) {
        let team = this.$store.state.teams[this.teamToEdit];
        this.bannerKingdomID = team.bannerKingdomID;
        this.creator = team.creator;
        this.description = team.description;
        this.usableFor = team.usableFor;
        this.heroClassID = team.heroClassID;
        this.name = team.name;
        this.result = team.result;
        this.units = team.units;
      }
    }
  };
</script>
