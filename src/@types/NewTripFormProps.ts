export type fetchLocationDataProps = {
  pickupCords: {
    latitude: number;
    longitude: number;
  };
  destinationCords: {
    latitude: number;
    longitude: number;
  };
};

export type NewTripFormProps = {
  fetchLocationData: (data: fetchLocationDataProps | {}) => void;
  scrollDown?: () => void;
};
