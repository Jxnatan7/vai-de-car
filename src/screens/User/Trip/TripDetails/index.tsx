import React, { useEffect, useState } from "react";
import { Box } from "../../../../theme";
import { ScrollView } from "react-native";
import { TextInfo } from "../../../../components/TextInfo";
import { InfoTitle } from "../../../../components/InfoTitle";
import { fetchLocationDataProps } from "../../../../@types/NewTripFormProps";
import { faCar, faLocationArrow, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { MainButton } from "../../../../components/MainButton";

type TripDetailsProps = {
    fetchLocationData: (data: fetchLocationDataProps | {}) => void;
};

type CurrentTripResponse = {
    passenger: {
        name: string;
        phone: string;
    };
    driver: {
        name: string;
        automobile: string;
    };
    automobileType: string;
    total: number;
    status: string;
    pickUpCords: {
        stringAddress: string;
        latitude: number;
        longitude: number;
    };
    destinationCords: {
        stringAddress: string;
        latitude: number;
        longitude: number;
    };
};


export default function TripDetails({ fetchLocationData }: TripDetailsProps) {

    const [startingCords, setStartingCords] = useState({
        latitude: 0,
        longitude: 0,
    });

    const [destinationCords, setDestinationCords] = useState({
        latitude: 0,
        longitude: 0,
    });

    const [currentTripResponse, setCurrentTripResponse] = useState<CurrentTripResponse>();

    const [driverArrivedAtYourLocation, setDriverArrivedAtYourLocation] = useState(false);

    useEffect(() => {
        const response = {
            data: {
                "trip": {
                    "passenger": {
                        "name": "Nome do passageiro",
                        "phone": "Número de telefone do passageiro"
                    },
                    "driver": {
                        "name": "Nome do motorista",
                        "automobile": "Honda Civic"
                    },
                    "automobileType": "CAR",
                    "total": 10,
                    "status": "STATUS_DA_TRIP",
                    "pickUpCords": {
                        "stringAddress": "R. José Zimermann - Serraria, Biguaçu - SC, 88160-000",
                        "latitude": -27.516923998203083,
                        "longitude": -48.65658909126399,
                    },
                    "destinationCords": {
                        "stringAddress": "R. Antônio Carlos Manoel, 220 - Fundos, Biguaçu - SC, 88161-405",
                        "latitude": -27.531870780217666,
                        "longitude": -48.63302136266485,
                    }
                }
            }
        };

        setCurrentTripResponse(response.data.trip);

        const otherResponse = { // Vai atualizar a cada 5 segundos
            driverLocation: {
                latitude: -27.527613099624762,
                longitude: -48.646834945785834,
            }
        };

        if (driverArrivedAtYourLocation) {
            setStartingCords({
                latitude: response.data.trip.pickUpCords.latitude,
                longitude: response.data.trip.pickUpCords.longitude,
            });
            setDestinationCords({
                latitude: response.data.trip.destinationCords.latitude,
                longitude: response.data.trip.destinationCords.longitude,
            });
        } else {
            setStartingCords({
                latitude: otherResponse.driverLocation.latitude,
                longitude: otherResponse.driverLocation.longitude,
            });
            setDestinationCords({
                latitude: response.data.trip.pickUpCords.latitude,
                longitude: response.data.trip.pickUpCords.longitude,
            });
        }
    }, [driverArrivedAtYourLocation]);

    useEffect(() => {
        fetchLocationData({ pickupCords: startingCords, destinationCords: destinationCords });
    }, [startingCords, destinationCords]);

    return (
        <Box width="100%" height="100%" justifyContent="space-around">
            {
                currentTripResponse && (
                    <ScrollView
                        keyboardShouldPersistTaps="handled"
                        style={{ width: "100%", flex: 1, height: 300 }}
                        contentContainerStyle={{ justifyContent: "space-around" }}
                    >
                        <Box flexDirection="row" justifyContent="space-between">
                            <Box>
                                <TextInfo text={currentTripResponse?.driver.name} color="text_dark" />
                                <TextInfo text={currentTripResponse?.driver.automobile} color="very_dark_gray" marginTop="s" icon={faCar} />
                            </Box>
                            <Box>
                                <TextInfo text="Valor total:" />
                                <TextInfo text={`R$${currentTripResponse?.total},00`} color="text_success" marginTop="s" />
                            </Box>
                        </Box>
                        <Box mt="l" />
                        <Box>
                            <InfoTitle text="Saindo de:" />
                            <TextInfo
                                text={currentTripResponse?.pickUpCords.stringAddress}
                                color="blue"
                                marginTop="m"
                                icon={faLocationArrow}
                            />
                            <Box mt="l" />
                            <InfoTitle text="A caminho de:" />
                            <TextInfo
                                text={currentTripResponse?.destinationCords.stringAddress}
                                color="black"
                                marginTop="m"
                                icon={faLocationDot}
                            />
                        </Box>
                        <MainButton action={() => setDriverArrivedAtYourLocation(!driverArrivedAtYourLocation)} bg="bg_orange" color="text_light" text="Motorista chegou no pickup" />
                    </ScrollView>
                )
            }
        </Box>
    );
}