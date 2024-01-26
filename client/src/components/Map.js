import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ mountains, onMarkerClick }) => {
  // Create a custom mountain icon

  const defaultIcon = L.icon({
    iconUrl: "mountainlogo.png",
    iconSize: [70, 70],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });

  const tradIcon = L.icon({
    iconUrl: "1.png",
    iconSize: [70, 70],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });

  const sportIcon = L.icon({
    iconUrl: "2.png",
    iconSize: [70, 70],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });

  const boulderingIcon = L.icon({
    iconUrl: "3.png",
    iconSize: [70, 70],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });

  const generatePopupContent = (mountain) => {
    return `<div style="width: 200px; text-align: center;">
    <h2>${mountain.name}</h2>
    <img src=${mountain.image} width="100px"></img>
    <p>Location: ${mountain.location}</p>
    <p>Type: ${mountain.type}</p>
    <p>Grade: ${mountain.grade}</p></div>`;
  };

  useEffect(() => {
    // Initialize map only once when the component mounts
    const map = L.map("map").setView([37.7749, -100.4194], 4); // Set initial view to the US

    // Add TileLayer (you can choose a different tile layer)
    const osm = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    ).addTo(map);

    const trad = L.layerGroup([]).addTo(map);
    const sport = L.layerGroup([]).addTo(map);
    const bouldering = L.layerGroup([]).addTo(map);

    function getIconByType(type) {
      switch (type.toLowerCase()) {
        case "trad":
          return tradIcon;
        case "sport":
          return sportIcon;
        case "bouldering":
          return boulderingIcon;
        default:
          console.warn(`Unknown mountain type: ${type}`);
          return defaultIcon; // Use a default icon for unknown types
      }
    }

    mountains.forEach((mountain) => {
      const popupContent = generatePopupContent(mountain);

      const marker = L.marker([mountain.latitude, mountain.longitude], {
        icon: getIconByType(mountain.type),
      })
        .bindPopup(popupContent)
        .openPopup();

      switch (mountain.type.toLowerCase()) {
        case "trad":
          trad.addLayer(marker);
          break;
        case "sport":
          sport.addLayer(marker);
          break;
        case "bouldering":
          bouldering.addLayer(marker);
          break;
        default:
          // Handle any unexpected mountain types if needed
          console.warn(`Unknown mountain type: ${mountain.type}`);
      }

      // layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
      // layerControl.addOverlay(parks, "Parks");

      marker.on("click", function (e) {
        const offsetLatLng = L.latLng(e.latlng.lat, e.latlng.lng);
        map.setView(offsetLatLng);
      });
    });

    const baseMaps = {
      Default: osm,
    };

    const overlayMaps = {
      Trad: trad,
      Sport: sport,
      Bouldering: bouldering,
    };

    L.control.layers(baseMaps, overlayMaps).addTo(map);

    // Cleanup function to destroy the map when the component is unmounted
    return () => {
      map.remove();
    };
  }, [
    mountains,
    onMarkerClick,
    defaultIcon,
    boulderingIcon,
    sportIcon,
    tradIcon,
  ]);

  return <div id="map" style={{ height: "400px" }} />;
};

export default Map;
