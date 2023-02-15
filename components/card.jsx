import { Avatar } from "@react-native-material/core";
import { StyleSheet, View, Text } from "react-native";




export default function Card(props) {

    return (

        <View style={style.container}>

            <Avatar
                style={style.img}
                image={{ uri: props.imageUrl }} />
            <Text style={style.text}>
                {props.mName}
            </Text>

        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "#d6e7ff",
        borderRadius: 20,
        padding: 10,
        margin: 10,
    },
    img: {
        marginTop: 8,
    },
    text: {
        margin: 18
    }
})