type fetchLocationDataProps = {
    pickupCords: {
        latitude: number,
        longitude: number
    },
    destinationCords: {
        latitude: number,
        longitude: number
    }
};

type NewTripFormProps = {
    fetchLocationData: (data: fetchLocationDataProps | {}) => void;
};

export type { fetchLocationDataProps, NewTripFormProps };