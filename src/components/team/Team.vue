<template>
  <div class="team">
    <h5>{{ team.name }}</h5>
    <div class="flex flex-wrap">
      <template v-for="unitID in team.units">
        <template v-if="unitID >= 6000">
          <div class="w-1/6 flex">
            <Card>
              <Unit :unitID="unitID"></Unit>
            </Card>
          </div>
        </template>
        <template v-else>
          <div class="w-1/6 flex">
            <Card>
              <Weapon :weaponID="unitID"></Weapon>
              <HeroClass :heroClassID="team.heroClassID"></HeroClass>
            </Card>
          </div>
        </template>
      </template>
      <div class="w-1/6 flex">
        <Card>
          <Banner :bannerKingdomID="this.team.bannerKingdomID"></Banner>
        </Card>
      </div>
    </div>
    <div class="flex">
      <div>{{ team.description }}</div>
      <div class="px-3 flex">
        <div class="text-2xl text-center px-2">
          <font-awesome-icon icon="thumbs-up"></font-awesome-icon>
        </div>
        <div class="text-2xl text-center px-2">
          <font-awesome-icon icon="thumbs-down"></font-awesome-icon>
        </div>
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

