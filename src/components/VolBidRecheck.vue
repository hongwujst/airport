<template>
    <div class="app">
      <!--<baidu-map class="map" :center="center" :zoom="zoom"/>-->
      <heatmapjs-vue class="heatmapjs-container" :max="100" :min="0" :data="data"></heatmapjs-vue>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      data() {
        return {
          data: [],
          center: {
            lng: 0,
            lat: 0
          },
          zoom: 3
        }
      },
      mounted(){

      var points = [];
      var max = 0;
      var width = 840;
      var height = 400;
      var len = 300;

      while (len--) {
        var val = Math.floor(Math.random() * 100);
        // now also with custom radius
        var radius = Math.floor(Math.random() * 70);

        max = Math.max(max, val);
        var point = {
          x: Math.floor(Math.random() * width),
          y: Math.floor(Math.random() * height),
          value: val,
          // radius configuration on point basis
          radius: radius
        };
        points.push(point);
      }
      this.data = points;
      }
    }
</script>

<style>
    .app {
        width: 100%;
        height: 100%;
    }
    .heatmapjs-container {
    width: 1000px;
    height: 500px;
    }
</style>
