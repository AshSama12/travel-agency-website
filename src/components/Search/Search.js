import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Search.css";

const places = [
  { name: "Sigiriya", lat: 7.957, lng: 80.760 },
  { name: "Temple of the Tooth Relic", lat: 7.294, lng: 80.641 },
  { name: "Yala National Park", lat: 6.361, lng: 81.520 },
  { name: "Galle Fort", lat: 6.026, lng: 80.217 },
  { name: "Nuwara Eliya", lat: 6.950, lng: 80.789 },
  { name: "Anuradhapura", lat: 8.312, lng: 80.403 },
  { name: "Jaffna Fort", lat: 9.662, lng: 80.015 },
  { name: "Arugam Bay", lat: 6.839, lng: 81.837 },
  { name: "Ella Rock", lat: 6.866, lng: 81.047 },
  { name: "Adam's Peak", lat: 6.809, lng: 80.499 },
  { name: "Polonnaruwa", lat: 7.939, lng: 81.001 },
  { name: "Horton Plains", lat: 6.809, lng: 80.812 },
  { name: "Pasikuda Beach", lat: 7.934, lng: 81.559 },
  { name: "Trincomalee", lat: 8.567, lng: 81.233 },
  { name: "Bentota Beach", lat: 6.422, lng: 79.998 },
  { name: "Mirissa Beach", lat: 5.947, lng: 80.454 },
  { name: "Pinnawala Elephant Orphanage", lat: 7.297, lng: 80.388 },
  { name: "Dambulla Cave Temple", lat: 7.857, lng: 80.650 },
  { name: "Hikkaduwa Beach", lat: 6.140, lng: 80.104 },
  { name: "Sinharaja Forest Reserve", lat: 6.426, lng: 80.446 },
  { name: "Udawalawe National Park", lat: 6.444, lng: 80.889 },
  { name: "Negombo Beach", lat: 7.209, lng: 79.841 },
  { name: "Minneriya National Park", lat: 8.014, lng: 80.899 },
  { name: "Kalpitiya", lat: 8.242, lng: 79.773 },
  { name: "Kandy Lake", lat: 7.292, lng: 80.641 },
  { name: "Ravana Falls", lat: 6.842, lng: 81.049 },
  { name: "Knuckles Mountain Range", lat: 7.457, lng: 80.799 },
  { name: "Colombo Lotus Tower", lat: 6.922, lng: 79.862 },
  { name: "Royal Botanic Gardens", lat: 7.271, lng: 80.595 },];


const Search = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialQuery = queryParams.get("query") || "";

    const [searchTerm, setSearchTerm] = useState(initialQuery);
    const [selectedPlace, setSelectedPlace] = useState(null);

    useEffect(() => {
        if (initialQuery) {
            const match = places.find((place) =>
                place.name.toLowerCase().includes(initialQuery.toLowerCase())
            );
            setSelectedPlace(match || null);
        }
    }, [initialQuery]);

    const filteredPlaces = places.filter((place) =>
        place.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <div className="search-page">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for places..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <ul className="suggestions">
                        {filteredPlaces.map((place) => (
                            <li key={place.name} onClick={() => setSelectedPlace(place)}>
                                {place.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="map-container">
                    {selectedPlace && (
                        <GoogleMap
                            center={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
                            zoom={10}
                            mapContainerStyle={{ height: "400px", width: "100%" }}
                        >
                            <Marker position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }} />
                        </GoogleMap>
                    )}
                </div>
            </div>
        </LoadScript>
    );
};

export default Search;
