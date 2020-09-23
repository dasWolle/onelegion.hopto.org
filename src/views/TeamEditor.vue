<template>
  <div class="team_editor">
    <a class="underline cursor-pointer" @click="goBack">Zurück</a>
    <div class="flex">
      <div class="editor w-5/6">
        <div class="flex my-4">
          <label class="mr-3">Name:</label>
          <input
            type="text"
            v-model="name"
            class="rounded-lg focus:outline-none px-2 py-1 bg-white"
          />
        </div>
        <div class="flex my-4">
          <label class="mr-3">IDs:</label>
          <input
            type="text"
            v-model="units[0]"
            class="rounded-lg focus:outline-none px-2 py-1 bg-white"
          />
          <input
            type="text"
            v-model="units[1]"
            class="rounded-lg focus:outline-none px-2 py-1 bg-white"
          />
          <input
            type="text"
            v-model="units[2]"
            class="rounded-lg focus:outline-none px-2 py-1 bg-white"
          />
          <input
            type="text"
            v-model="units[3]"
            class="rounded-lg focus:outline-none px-2 py-1 bg-white"
          />
        </div>
        <div class="flex my-4">
          <label class="mr-3">Names(search):</label>
          <Autocomplete          />
<!--          <div class="relative">-->
<!--            <input type="text" class="rounded-lg focus:outline-none px-2 py-1 bg-white" v-model="value1">-->
<!--            <div class="rounded-lg select_dropdown" :class="value1.length < 1 ? 'hidden' : 'flex'">-->
<!--              <template v-for="entry in $store.getters.searchUnits(value1)">-->
<!--                <div value="entry" @click="selectUnit(0, entry)">{{ entry.name }}</div>-->
<!--              </template>-->
<!--            </div>-->
<!--          </div>-->

        </div>
      </div>
      <div class="side_bar w-1/6 shadow-lg flex flex-col">
        <div>Name: {{ name }}</div>
        <template v-for="unitID in units">
          <template v-if="unitID >= 6000">
            <img class="w-full px-3 py-2" :src="$store.getters.unit(unitID).imageUrl">
          </template>
          <template v-else>
            <img class="w-full px-3 py-2" :src="$store.getters.unit(unitID).imageUrl">
          </template>
        </template>
      </div>
    </div>
    <p>
      <label>
        Guild Member Name / Gildenmitglied:
        <input
          type="text"
          name="GuildMemberName"
          size="30"
          maxlength="30"
          required="required"
          autofocus="autofocus"
        />
      </label>
    </p>

    <p>
      <label>
        Result / Kampfergebnis:
        <input
          type="text"
          name="Result"
          size="30"
          maxlength="30"
          autofocus="autofocus"
        />
      </label>
    </p>

    <button @click="saveAndReturn">save and back</button>
  </div>
</template>

<script>
  import Autocomplete from "@/components/Autocomplete";
  export default {
    name: "TeamEditor",
    components: { Autocomplete },
    data() {
      return {
        bannerKingdomID: 0,
        description: "",
        for: [],
        heroClassID: 0,
        name: "",
        names: [ "", "", "", "" ],
        units: [ 0, 0, 0, 0 ],

        list1: [],
        value1: "",
      };
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      save() {
        console.log("not saved!");
      },
      saveAndReturn() {
        this.save();
        this.goBack();
      },
      selectUnit(slot, unit){
        this.units[slot] = unit.id;
      }
    },
    watch: {
      units(value) { console.log(value); }
    },
  };
</script>
