import React from 'react'
import { View, Text } from 'react-native'
import DiscoverMovies from './Components/DiscoverMovies';
import { useEffect } from 'react';

const Home = () => {

    useEffect(()=>{
        
    })

    return (
      <View>
        {/* DiscoverMoives function being called here */}
        <DiscoverMovies />
      </View>
    );
  }

  export default Home