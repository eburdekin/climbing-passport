import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ mountains, onMarkerClick }) => {
  // Create a custom mountain icon
  const mountainIcon = L.icon({
    iconUrl: "mountainlogo.png",
    iconSize: [50, 50],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });

  useEffect(() => {
    // Initialize map only once when the component mounts
    const map = L.map("map").setView([37.7749, -100.4194], 4); // Set initial view to the US

    // Add TileLayer (you can choose a different tile layer)
    const osm = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    ).addTo(map);

    // Add markers for each mountain
    // mountains.forEach((mountain) => {
    //   const marker = L.marker([mountain.latitude, mountain.longitude], {
    //     icon: mountainIcon,
    //   })
    //     .addTo(map)
    //     .bindPopup(mountain.name);

    const trad = L.layerGroup([]).addTo(map);
    const sport = L.layerGroup([]).addTo(map);
    const bouldering = L.layerGroup([]).addTo(map);

    mountains.forEach((mountain) => {
      const marker = L.marker([mountain.latitude, mountain.longitude], {
        icon: mountainIcon,
      }).bindPopup(mountain.name);

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

      marker._icon.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default behavior
        onMarkerClick(mountain);
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

    const layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

    // Cleanup function to destroy the map when the component is unmounted
    return () => {
      map.remove();
    };
  }, [mountains, onMarkerClick, mountainIcon]);

  return <div id="map" style={{ height: "400px" }} />;
};

export default Map;
