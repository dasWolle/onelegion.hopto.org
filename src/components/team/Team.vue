<template>
  <div class="team p-2">
    <h5>{{ team.name }}</h5>
    <div class="grid grid-cols-4 gap-1">
      <template v-for="unitID in team.units">
        <template v-if="unitID >= 6000">
          <Card class="text-gray-800">
            <Unit :unitID="unitID"></Unit>
          </Card>
        </template>
        <template v-else>
          <Card class="text-gray-800">
            <Weapon :weaponID="unitID"></Weapon>
          </Card>
        </template>
      </template>
      <Card class="text-gray-800">
        <HeroClass :heroClassID="team.heroClassID"></HeroClass>
      </Card>
      <Card class="text-gray-800">
        <Banner :bannerKingdomID="this.team.bannerKingdomID"></Banner>
      </Card>
      <div class="col-span-2 p-1">{{ team.description }}</div>
    </div>
    <div class="px-3 flex justify-between">
      <div>
        <div class="flex">
          <div class="text-2xl text-center px-2 cursor-pointer" @click="team.counterPlus++">
            <font-awesome-icon icon="thumbs-up"></font-awesome-icon>
            {{ team.counterPlus }}
          </div>
          <div class="text-2xl text-center px-2 cursor-pointer" @click="team.counterMinus++">
            <font-awesome-icon icon="thumbs-down"></font-awesome-icon>
            {{ team.counterMinus }}
          </div>
        </div>
      </div>
      <div>
        <router-link :to="'/team_editor/' + team.id">Edit this Team</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Banner from "@/components/team/Banner";
  import Unit from "@/components/team/Unit";
  import Weapon from "@/components/team/Weapon";
  import HeroClass from "@/components/team/HeroClass";
  import Card from "@/components/Card";

  export default {
    name: "Team",
    components: { Card, HeroClass, Weapon, Banner, Unit },
    props: { team: Object },
  };
</script>

