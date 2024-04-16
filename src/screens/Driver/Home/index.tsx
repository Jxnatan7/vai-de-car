import React, { useEffect, useState } from "react";
import { Layout } from "../../../components/Layout";
import { useLocation } from "../../../context/LocationContext";
import api, { configureAxios } from "../../../config/axiosConfig";
import { MainButton } from "../../../components/MainButton";
import { storage } from "../../../config/storage";
import { ScrollView } from "react-native";

export default function DriverHome() {
    const location = useLocation();
    const latitude = location?.coords.latitude;
    const longitude = location?.coords.longitude;

    const [isTracking, setIsTracking] = useState<boolean>(false);

    const [availableTrip, setAvailableTrip] = useState<boolean>(false);
    const [accept, setAccept] = useState<boolean>(false);

    const sendLocationData = () => {
        configureAxios(`${storage.getString("user.token")}`);
        api.post("/drivers/track", {}, { params: { latitude, longitude } })
            .then(response => {
                console.log('Resposta da API:', response.data);
                console.log({ latitude, longitude });
            })
            .catch(error => {
                console.error('Erro ao enviar dados de localização:', error);
            });
    };

    useEffect(() => {
        if (isTracking) {
            const intervalId = setInterval(sendLocationData, 5000);

            return () => clearInterval(intervalId);
        }
    }, [isTracking, latitude, longitude]);

    const toggleTracking = () => {
        setIsTracking(prevState => !prevState);
    };

    const findTrip = () => {
        configureAxios(`${storage.getString("user.token")}`);
        api.get("/drivers")
            .then(response => {
                console.log('Resposta da API:', response.data);
            })
            .catch(error => {
                console.error('Erro ao enviar dados para API:', error);
            });
    };

    const acceptTrip = () => {
        configureAxios(`${storage.getString("user.token")}`);
        api.post("/drivers/", {}, { params: { latitude, longitude } })
            .then(response => {
                console.log('Resposta da API:', response.data);
                console.log({ latitude, longitude });
            })
            .catch(error => {
                console.error('Erro ao enviar dados de localização:', error);
            });
    };

    const driveAccept = () => {
        setAccept(true);
        configureAxios(`${storage.getString("user.token")}`);
        api.post("/drivers/active", { latitude, longitude })
            .then(response => {
                console.log('Resposta da API:', response.status);
            })
            .catch(error => {
                console.error('Erro NA API:', error);
            });
    };

    return (
        <Layout aboutUser>
            <ScrollView>
                <MainButton color="text_light" text={accept ? "Ficar indisponível" : "Ficar disponível"} action={driveAccept} bg={accept ? "btn_success" : "dark_gray"} />
                <MainButton color="text_light" text="Buscar Corrida" action={findTrip} bg="btn_orange" marginTop="l" />
                <MainButton disabled={!availableTrip} color="text_light" text={availableTrip ? "Aceitar Corrida" : "busque uma corrida.."} action={acceptTrip} bg={availableTrip ? "btn_success" : "dark_gray"} marginTop="l" />
                <MainButton color="text_light" text={isTracking ? 'Desligar Rastreamento' : 'Ligar Rastreamento'} action={toggleTracking} bg={isTracking ? "blue" : "danger"} marginTop="l" />
            </ScrollView>
        </Layout>
    )
}