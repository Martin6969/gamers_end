<template>
 <div class="row">
 <div class="col-1"></div>
 <div class="col-4">
   Old Games
   <gamers-card v-for="card in filteredCards" :key="card.url" :info="card"/>
 </div>
 <div class="col-4">
 New Games
 <gamers-card-2 v-for="card in filteredCards2" :key="card.url" :info="card"/>
 </div>
 <div class="col-3">
   Adventure Games|
   Action Games|
   Puzzle Games|
   Horror Games|
 </div>
 </div>
</template>
<script>
// @ is an alias to /src
import GamersCard from '../components/GamersCard.vue'
import GamersCard2 from '../components/GamersCard2.vue'
import store from "@/store.js"
let cards = [];
let cards2 =[];
cards= [
  {url:'https://image.api.playstation.com/cdn/EP0700/CUSA03365_00/OFMeAw2KhrdaEZAjW1f3tCIXbogkLpTC.png',"description":"Dark souls 3","time": "few minutes ago.."},
  {url:'https://image.api.playstation.com/cdn/EP0001/CUSA09303_00/HXxek19ysMe9h1WjkasfIcovCjlbBitz.png',"description":"AC Odyssey","time": "few minutes ago.."},
  {url:'https://upload.wikimedia.org/wikipedia/hr/5/51/Minecraft_cover.png',"description":"Minecraft","time": "few minutes ago.."},
  {url:'https://image.api.playstation.com/vulcan/img/cfn/11307_5hpWaHKJtp9AXjlv7IxLsx1epxAQKWoYaJG1J-QtMkOovpU7HWyd8AYxyykG6DfhKXHdii3BM4dIj7hppT4k4YHVEW.jpg',"description":"Black Ops IV","time": "few minutes ago.."},
];
cards2=[
  {url:'https://image.api.playstation.com/vulcan/ap/rnd/202102/2307/kQzDCY5RCrSXCeeFjPGUzkGI.png',"description":"Kena: Bridge of spirits","time": "few minutes ago.."},
  {url:'https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8XGEPtD1xoasK0FYkYNcCn1z.png',"description":"AC Valhalla","time": "few minutes ago.."},
  {url:'https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/ToWd80GTK5OTneUk12K1HHkF.jpg',"description":"Horizon forbidden west","time": "few minutes ago.."},
  {url:'https://image.api.playstation.com/vulcan/ap/rnd/202008/0416/6Bo40lnWU0BhgrOUm7Cb6by3.png',"description":"Cyberpunk 2077","time": "few minutes ago.."},
]

export default {
  name: 'Home',
  data : function (){
    return {
      cards : cards,
      cards2 : cards2,
      store,
    };
  },
  computed: {
    filteredCards(){
      let termin = this.store.searchTerm;
     return this.cards.filter(card => card.description.includes(termin));
    },
    filteredCards2(){
      let termin =this.store.searchTerm;
      return this.cards2.filter(card => card.description.includes(termin));
    },
  },
  components: {
    GamersCard,
    GamersCard2,
  },
};
</script>
