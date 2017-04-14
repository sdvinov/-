ymaps.ready(init);

function init () {
  var map = new ymaps.Map("map", {
    center: [60.024531, 30.276361],
    zoom: 15
  }, {
    searchControlProvider: 'yandex#search'
  }),
  point = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [60.024531, 30.276361]
    },
    properties: {
      iconContent: 'ул. Вербная дом 1 офис 7',
      hintContent: 'ул. Вербная дом 1 офис 7'
    }
  }, {
    preset: 'islands#blackStretchyIcon',
    draggable: true
  });

  map.geoObjects.add(point)
}
