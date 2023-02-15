import { useState } from "react";
import { Button, Image, ScrollView, Text, View } from "react-native"
const imgPath = "https://image.tmdb.org/t/p/w500/";



export const Deitails = ({ navigation, route }) => {

    const id = route.params.movid;

    const [movies, setMovies] = useState([])
    getMovies();
    function getMovies() {
        fetch(`https://api.themoviedb.org/3/movie/${id}?&api_key=9813ce01a72ca1bd2ae25f091898b1c7&language=en-US`)
            .then((res) => { return res.json() })
            .then((data) => { setMovies(data) })
    }
    return (
        <View>
            <ScrollView>
                <Image
                    style={{ borderRadius: 20, margin: 50 }}
                    source=
                    {{
                        width: 250,
                        height: 400,
                        uri: imgPath + movies.poster_path
                    }}

                />
                <Text style={{ padding: 20, margin: 10, backgroundColor: "#e7e6f5" }}>Title: {movies.title}</Text>
                <Text style={{ padding: 20, margin: 10, backgroundColor: "#e7e6f5" }}>overview: {movies.overview}</Text>
                <Button

                    title="go to movies"
                    onPress={() => {
                        navigation.navigate("Movies")

                    }}
                />
            </ScrollView>
        </View>
    )
}
