import { Button, Text, View } from "react-native";

export const Home = ({ navigation }) => {
    return (
        <View>
            <Text style={{ margin: 15, textAlign: "center", fontSize: 24 }}>Home page</Text>
            <Button

                title="video"
                onPress={() => {
                    navigation.navigate("Videow")
                }}
            />
            <Button
                title="ScreenShot"
                onPress={() => {
                    navigation.navigate("ScreenShot")

                }}
            />
            <Button
                title="movie app "
                onPress={() => {

                    navigation.navigate("Movies")



                }}
            />
            <Button
                title="camera"
                onPress={() => {

                    navigation.navigate("MyCamera")

                }}
            />
            <Button
                title="Statusbar"
                onPress={() => {

                    navigation.navigate("Status")

                }}
            />

            <Button
                title="image picker"
                onPress={() => {

                    navigation.navigate("ImgPic")

                }}
            />
            <Button
                title="prevent Screen Capture"
                onPress={() => {

                    navigation.navigate("ScreenCap")

                }}
            />
            <Button
                title="clip board"
                onPress={() => {

                    navigation.navigate("Board")

                }}
            />
        </View>
    )

}