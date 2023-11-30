//This file contains the discover movies section which is basically a carousel which retrieves movies from movie db.
import React, { useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { GET } from './Services/API';
import { IMAGE_POSTER_URL } from './Services/Config';
import Constants from '../Constants';

const DiscoverMovies = () => {
    const [movies, setMovies] = useState([]);
    const [images, setImages] = useState([]);
    useEffect(()=>{
        const getMovies = async() => {
            const response = await GET ('/discover/movie');
            console.log(response);
            setMovies(response.results);
            

            const images = response.results.map((data) => `${IMAGE_POSTER_URL}${data.backdrop_path}`);
            let backImages = [];
            for(let i=0; i<10;i++){
              backImages = [...backImages, images[i]];
            }
            setImages(backImages);
            
        };

        getMovies();
    }, []); //an empty array is provided to give a space between requests
    
    return (
      <View>
        <SliderBox images={images} dotColor={Constants.secondaryColor}/>
      </View>
    );
  }

  export default DiscoverMovies