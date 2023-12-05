import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { POSTER_IMAGE }   from './Services/Config';
import { GET } from './Services/API';
import Styles from '../Styles';
import Loader from './Loader';

const TrendingMovies = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState();

    useEffect (()=> {
        const getMovies = async () => {
            const data = await GET('/movie/top_rated');
            console.log(data);
            setMovies(data.results);
            setLoading(false);
        };

        getMovies();

    }, []);
    

    return (
        <View>
            {
                loading ? (<Loader /> ) : (
                <View>
                    <Text style={Styles.heading}>Trending Movies</Text>
                    <FlatList keyExtractor={item => item.id} data=
                    {movies} horizontal renderItem={displayMovies} />
                </View>
            )
        }
        </View>
    ); 
};

const displayMovies = ({item}) => {
    return (
        <View>
            <Image 
            source={{uri: `${POSTER_IMAGE}${item.poster_path}
            `}} 
            style={Styles.posterImage}
            />
        </View>
    )
}

export default TrendingMovies
