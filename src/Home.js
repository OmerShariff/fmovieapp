import React from 'react'
import { View, Text } from 'react-native'
import DiscoverMovies from './Components/DiscoverMovies'; 
import { useEffect } from 'react';
import TrendingMovies from './Components/TrendingMovies';


const Home = () => {

    useEffect(()=>{
        
    })

    return (
      <View>
        {/* DiscoverMoives function being called here */}
        <DiscoverMovies />
        <TrendingMovies />
        
      </View>
    );
  }

  export default Home