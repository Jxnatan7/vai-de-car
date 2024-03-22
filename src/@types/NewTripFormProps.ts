type CoordinatesProps = {
  latitude: number;
  longitude: number;
}

export type fetchLocationDataProps = {
  pickupCords: CoordinatesProps,
  destinationCords: CoordinatesProps,
};

export type NewTripFormProps = {
  fetchLocationData: (data: fetchLocationDataProps | {}) => void;
  scrollDown?: () => void;
};
