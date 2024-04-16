import api, { configureAxios } from "../../config/axiosConfig";
import { storage } from "../../config/storage";

const sendLocationData = (latitude: number, longitude: number) => {
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

export default sendLocationData;