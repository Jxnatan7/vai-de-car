type AddressComponent = {
    long_name: string,
    short_name: string,
    types: string[],
};

type Location = {
    lat: number,
    lng: number,
};

type Geometry = {
    location: Location,
    location_type: string,
    viewport: {
        northeast: Location,
        southwest: Location,
    },
};

type Result = {
    address_components: AddressComponent[],
    formatted_address: string,
    geometry: Geometry,
    place_id: string,
    plus_code: {
        compound_code: string,
        global_code: string,
    },
    types: string[],
};

export type GoogleMapsAPIResponse = {
    results: Result[],
    status: string,
};
