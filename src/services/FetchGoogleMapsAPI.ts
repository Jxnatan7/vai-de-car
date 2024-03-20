import axios from "axios";
import { GoogleMapsAPIResponse } from "../@types/responses/GoogleMapsAPIResponse";
import { google_api_key } from "../config/index.json";

async function fetchGoogleMapsData(lat: number, lng: number): Promise<GoogleMapsAPIResponse> {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${google_api_key}`;

    try {
        const response = await axios.get<GoogleMapsAPIResponse>(url);
        return response.data;
    } catch (error) {
        throw new Error(`Erro ao acessar a API do Google Maps: ${error}`);
    }
}

export { fetchGoogleMapsData };