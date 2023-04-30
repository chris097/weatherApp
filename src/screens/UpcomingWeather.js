import { FlatList, SafeAreaView, StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native';
import ListItem from '../components/ListItem';

const DATA = [
    {
        dt_txt: "2022-08-30 16:00:00",
        main: {
            temp_min: 296.2,
            temp_max: 296.31,
        },
        weather: [
            {
                main: "Clear",
            }
        ],
    },
    {
        dt_txt: "2022-08-30 17:00:00",
        main: {
            temp_min: 292.84,
            temp_max: 294.94,
        },
        weather: [
            {
                main: "Clouds ",
            }
        ],
    },
    {
        dt_txt: "2022-08-30 18:00:00",
        main: {
            temp_min: 294.14,
            temp_max: 294.14,
        },
        weather: [
            {
                main: "Rain",
            }
        ],
    }
];

const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem
            condition={item.weather[0].main}
            dt_txt={item.dt_txt}
            min={item.main.temp_min}
            max={item.main.temp_max}
        />
    );

    const {container, image } = styles;

    return (
        <SafeAreaView style={container}>
            <ImageBackground style={image}
                source={require('../../assets/background.jpg')}
            >
            <Text>Upcoming Weather</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item)=> item.dt_txt}
                />
                </ImageBackground>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1
    }
})

export default UpcomingWeather;