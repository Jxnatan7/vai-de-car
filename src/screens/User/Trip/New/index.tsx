import { ScrollView } from "react-native";
import { Layout } from "../../../../components/Layout";
import { NewTripProps } from "../../../../@types/NewTripProps";
import { Box } from "../../../../theme";

export default function NewTrip({ navigation }: NewTripProps) {
  return (
    <Layout backButton isMap navigation={navigation}>
      <ScrollView>
        <Box>

        </Box>
      </ScrollView>
    </Layout>
  );
}
