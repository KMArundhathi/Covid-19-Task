import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Typography } from "@mui/material";

const Mapview = ({ stateData }) => {
    const statesCoordinates = {
        Maharashtra: { lat: 19.7515, lng: 75.7139 },
        Kerala: { lat: 10.8505, lng: 76.2711 },
        Karnataka: { lat: 15.3173, lng: 75.7139 },
        TamilNadu: { lat: 11.1271, lng: 78.6569 },
        AndhraPradesh: { lat: 15.9129, lng: 79.7400 },
        UttarPradesh: { lat: 26.8467, lng: 80.9462 },
        WestBengal: { lat: 22.9868, lng: 87.8550 },
        Delhi: { lat: 28.7041, lng: 77.1025 },
        Odisha: { lat: 20.9517, lng: 85.0985 },
        Rajasthan: { lat: 27.0238, lng: 74.2179 },
        Gujarat: { lat: 22.2587, lng: 71.1924 },
        Chhattisgarh: { lat: 21.2787, lng: 81.8661 },
        Haryana: { lat: 29.0588, lng: 76.0856 },
        MadhyaPradesh: { lat: 22.9734, lng: 78.6569 },
        Bihar: { lat: 25.0961, lng: 85.3131 },
        Telangana: { lat: 17.1232, lng: 79.2088 },
        Punjab: { lat: 31.1471, lng: 75.3412 },
        Assam: { lat: 26.2006, lng: 92.9376 },
        JammuKashmir: { lat: 33.7782, lng: 76.5762 },
        Uttarakhand: { lat: 30.0668, lng: 79.0193 },
        Jharkhand: { lat: 23.6102, lng: 85.2799 },
        HimachalPradesh: { lat: 31.1048, lng: 77.1734 },
        Goa: { lat: 15.2993, lng: 74.1240 },
        Mizoram: { lat: 23.1645, lng: 92.9376 },
        Puducherry: { lat: 11.9416, lng: 79.8083 },
        Manipur: { lat: 24.6637, lng: 93.9063 },
        Tripura: { lat: 23.9408, lng: 91.9882 },
    };

    const defaultIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconSize: [25, 41],
    });

    return (
        <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            style={{ height: "900px", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {stateData.map((state, index) => {
                const coordinates = statesCoordinates[state.State.replace(/\s/g, "")];
                if (!coordinates) return null;

                return (
                    <Marker
                        key={index}
                        position={[coordinates.lat, coordinates.lng]}
                        icon={defaultIcon}
                    >
                        <Popup>
                            <Typography variant="h4" color =''>{state?.State}</Typography>
                            <Typography variant="h6" color =''>Total Cases: {state["Total Cases"]}</Typography>
                            <Typography variant="h6" color =''>Active Cases: {state["Active Cases"]}</Typography>
                            <Typography variant="h6" color =''>Discharged: {state.Discharged}</Typography>
                            <Typography variant="h6" color =''>Deaths: {state.Deaths}</Typography>
                        </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
};

export default Mapview;
