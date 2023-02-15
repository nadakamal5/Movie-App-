import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Card from "../components/card"

const apiKey = "&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
const url = "https://api.themoviedb.org/3";
const imgPath = "https://image.tmdb.org/t/p/w500/";
const path = "/discover/movie?sort_by=popularity.desc";
const apiUrl = url + path + apiKey;

export default function Movies({ navigation }) {
    const [movies, setMovies] = useState([])

    getMovies(apiUrl);
    function getMovies(url) {
        fetch(url).then((res) => { return res.json() })
            .then((data) => { setMovies(data.results) })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}> welcome to our app</Text>
            <ScrollView>

                {
                    movies.map((e, index) => {
                        return <TouchableOpacity
                            key={index}
                            onPress={() => navigation.navigate("Deitails", { movid: e.id })}
                        >

                            <Card

                                mName={e.title}
                                imageUrl={imgPath + e.poster_path}
                            />
                        </TouchableOpacity>

                    })
                }


            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    text: {
        fontSize: 20,
        margin: 5,
        textTransform: 'capitalize'
    }
});
