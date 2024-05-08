<template>
  <div>
    <div class="product-type-container px-4 md:px-0 mx-auto flex gap-2 md:mt-8">
      <input v-model="active_map" name="map" value="health" type="radio"
        :aria-label="getLocale == 'EN' ? 'Healthcare Products' : 'Produk Kesehatan'"
        class="font-roboto btn btn-sm md:btn-md" />
      <input v-model="active_map" name="map" value="drug" type="radio"
        :aria-label="getLocale == 'EN' ? 'Prescription Medication Products' : 'Produk Obat Resep'"
        class="font-roboto btn btn-sm md:btn-md" />
    </div>

    <div class="relative z-0 mt-20 w-full aspect-auto md:h-[550px]">
      <div id="map" stlye="border-top: 5px solid red;"></div>
      <hr>
      <!-- <l-map transparent="true" v-model="zoom" v-model:zoom="zoom" v-model:maxZoom="maxZoom" v-model:minZoom="minZoom" :center="center">
            <l-tile-layer :url="tile_layer_url" :transparent="true"></l-tile-layer>
      
            <l-marker v-for="item in markerLatLngFilter" :lat-lng="item.coordinate">
              <l-icon :icon-url="icon_url" :icon-size="icon_size" />
              <l-popup>
                <p class="font-[800] uppercase">{{ item.popup.city_name }}</p>
                <li v-for="list in item.popup.companies" class="uppercase">{{ list.name }}, {{ list.company_type }}</li>
              </l-popup>
            </l-marker>
          </l-map> -->
    </div>
  </div>
</template>

<script>
//   https://maps.googleapis.com/maps/api/staticmap?key=YOUR_API_KEY&center=-2.473888688444448,117.88879998609853&zoom=5&format=png&maptype=roadmap&style=element:labels%7Cvisibility:off&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.neighborhood%7Cvisibility:off&style=feature:landscape.natural.landcover%7Celement:geometry.fill%7Ccolor:0xb3ecff&style=feature:poi%7Cvisibility:off&style=feature:road%7Cvisibility:off&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:transit%7Cvisibility:off&style=feature:water%7Celement:geometry.fill%7Ccolor:0xeaf9ff&size=480x360

import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LPopup,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  props: {
    distribution: {
      default: []
    },
    eng: {
      default: []
    }
  },
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data() {
    return {
      maps: [
        {
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.neighborhood",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "landscape.natural.landcover",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#b3ecff"
            }
          ]
        },
        {
          "featureType": "poi",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              // "color": "#ffffff"
              "color": "#eaf9ff"
            }
          ]
        }
      ],
      active_map: 'health',
      zoom: 5,
      maxZoom: 13,
      minZoom: 5,
      center: [-3.678058402311408, 119.94854115139148],
      // tile_layer_url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      tile_layer_url: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
      // tile_layer_url: "http://ows.mundialis.de/services/service?layers='OSM-Overlay-WMS'",

      icon_url: require('@/assets/images/business/maps/marker-blue.png'),
      icon_size: [32, 34],
      weather_name: null,
      weather_main: null,
      weather_description: null,
      weather_main_temp: null,
      weather_main_feels_like: null,
      weather_main_humidity: null,
      weather_cod: null,
      weather_main_pressure: null,
      weather_visibility: null,
      weather_data: [],
    };
  },
  watch: {
    markerLatLngFilter() {
      return this.filters()
    }
  },
  computed: {
    markerLatLngFilter() {
      return this.distribution.filter(item => item.type == this.active_map)
    }
  },
  methods: {
    filters() {
      this.injectData()
    },
    injectData() {
      //   this.data[0].title = resp.count.online
      //   this.data[1].title = resp.count.offline
      //   this.data[2].title = resp.count.alarm
      //   this.data[3].title = resp.count.site
      //   this.data[5].title = resp.count.online + resp.count.offline + resp.count.alarm + resp.count.site
      //   this.weather = resp.weather
      var tourStops = []
      let markerLatLng = this.markerLatLngFilter
      for (let x = 0; x < markerLatLng.length; x++) {
        tourStops[x] = [{
          type: this.eng == 'ID' ? markerLatLng[x].type : markerLatLng[x].type_en,
          city_name: this.eng == 'ID' ? markerLatLng[x].city_name : markerLatLng[x].city_name_en,
          companies: this.eng == 'ID' ? markerLatLng[x].companies?.map(data_c => `<b>${data_c.name}</b> <br> ${data_c.address}`).join("<br><br>") : markerLatLng[x].companies_en?.map(data_c => `<b>${data_c.name}</b> <br> ${data_c.address}`).join("<br><br>"),
          lat: parseFloat(markerLatLng[x].latitude),
          lng: parseFloat(markerLatLng[x].longitude)
        }]
      }
      this.tourStops = tourStops
      //   if (resp.weather) {
      //     this.weather_name = resp.weather.name
      //     this.weather_main = resp.weather.weather[0].main
      //     this.weather_description = resp.weather.weather[0].description
      //     this.weather_main_temp = resp.weather.main.temp
      //     this.weather_main_feels_like = resp.weather.main.feels_like
      //     this.weather_main_humidity = resp.weather.main.humidity
      //     this.weather_cod = resp.weather.cod
      //     this.weather_main_pressure = resp.weather.main.pressure
      //     this.weather_visibility = resp.weather.visibility
      //   }
      navigator.geolocation.getCurrentPosition((position) => {
        // this.initMap(position.coords.latitude, position.coords.longitude)
        this.show = false
        this.initializeMap(position.coords.latitude, position.coords.longitude);
        // if (position) {
        //   const myLatlng = { lat: -2.473888688444448, lng: 117.88879998609853 }
        //   this.styledMapType = new google.maps.StyledMapType(
        //     this.maps,
        //     { name: 'Styled Map' }
        //   )
        //   const map = new window.google.maps.Map(document.getElementById('map'), {
        //     zoom: 5.4,
        //     center: myLatlng,
        //   }
        //   )
        //   map.mapTypes.set('styled_map', this.styledMapType);
        //   map.setMapTypeId('styled_map');
        //   // Create an info window to share between markers.
        //   const infoWindow = new google.maps.InfoWindow({
        //     maxWidth: 248,
        //     // maxWidth: 648,
        //   });
        //   // Create the markers.
        //   const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        //   // this.tourStops.forEach(([position, title], i) => {
        //   const markers = this.tourStops.map(([position, title], i) => {
        //     const label = `${position.device_name}`
        //     const image = this.active_map == 'health' ? require('@/assets/images/business/maps/marker-blue.png') : require('@/assets/images/business/maps/marker-orange.png')
        //     const marker = new google.maps.Marker({
        //       position,
        //       map: map,
        //       icon: image,
        //       title: position.city_name,
        //       // title: `
        //       // <b>${position.city_name}</b><br><br> 
        //       // ${position.companies}`,
        //       optimized: false,
        //     })
        //     marker.addListener('click', (e) => {
        //       infoWindow.setContent(`<b>${position.city_name}</b><br><br>${position.companies}`)
        //       infoWindow.open(marker.getMap(), marker)
        //     })
        //     return marker
        //   })

        // }
      }, () => { this.initializeMap(-2.473888688444448, 117.88879998609853); }, { timeout: 10000 });
    },
    initializeMap(lat, lng) {
      const myLatlng = { lat: lat, lng: lng };
      this.styledMapType = new google.maps.StyledMapType(
        this.maps,
        { name: 'Styled Map' }
      );
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 5.4,
        center: myLatlng,
      });
      map.mapTypes.set('styled_map', this.styledMapType);
      map.setMapTypeId('styled_map');

      const infoWindow = new google.maps.InfoWindow({
        maxWidth: 248,
        // maxWidth: 648,
      });
      // Create the markers.
      const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      // this.tourStops.forEach(([position, title], i) => {
      const markers = this.tourStops.map(([position, title], i) => {
        const label = `${position.device_name}`
        const image = this.active_map == 'health' ? require('@/assets/images/business/maps/marker-blue.png') : require('@/assets/images/business/maps/marker-orange.png')
        const marker = new google.maps.Marker({
          position,
          map: map,
          icon: image,
          title: position.city_name,
          // title: `
          // <b>${position.city_name}</b><br><br> 
          // ${position.companies}`,
          optimized: false,
        })
        marker.addListener('click', (e) => {
          infoWindow.setContent(`<b>${position.city_name}</b><br><br>${position.companies}`)
          infoWindow.open(marker.getMap(), marker)
        })
        return marker
      })
    },
    //     filterDistribution(category) {
    //         this.active_filter = category
    //         let temp_data = ''
    //         if (category != 'All') {
    //             temp_data = this.NewsList.filter(item => item.category == category)
    //         } else {
    //             temp_data = this.NewsList
    //         }
    //         this.NewsData = temp_data
    //     }
  },
  created() {
    this.filters()
    if (localStorage.getItem('locale')) {
      this.getLocale = localStorage.getItem('locale')
    } else {
      this.getLocale = 'ID'
    }
    // this.markerLatLng = this.getMarker
  }
};
</script>

<style scoped>
#map {
  height: 600px;
  width: 100%;
}

.marker-cluster-small {
  background-color: #49afa5 !important;
}

.marker-cluster-small div {
  background-color: #1c9489 !important;
  color: #fff !important;
}
</style>