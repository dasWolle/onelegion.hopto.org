<template>
  <div class="">
    <h5>{{ team.name }}</h5>
    <div class="flex flex-wrap">
      <template v-for="unitID in team.units">
        <template v-if="unitID >= 6000">
          <div class="w-1/6">
            <Unit :unitID="unitID"></Unit>
          </div>
        </template>
        <template v-else>
          <div class="w-1/6">
            <Weapon :weaponID="unitID"></Weapon>
          </div>
        </template>
      </template>
      <div class="w-1/6">
        <Banner :bannerKingdomID="this.team.bannerKingdomID"></Banner>
      </div>
      <div class="w-1/6">
        <HeroClass :heroClassID="team.heroClassID"></HeroClass>
      </div>
      <div class="px-3">
        <div class="font-bold text-center px-2 text-green-600">
          <font-awesome-icon icon="plus-circle"></font-awesome-icon>
        </div>
        <div class="font-bold text-center px-2 text-red-300">
          <font-awesome-icon icon="minus-circle"></font-awesome-icon>
        </div>
      </div>
    </div>
    <div>Beschreibung</div>
  </div>
</template>

<script>
  import Banner from "@/components/team/Banner";
  import Unit from "@/components/team/Unit";
  import Weapon from "@/components/team/Weapon";
  import HeroClass from "@/components/team/HeroClass";

  export default {
    name: "Team",
    components: { HeroClass, Weapon, Banner, Unit },
    props: { team: Object },
  };
</script>

