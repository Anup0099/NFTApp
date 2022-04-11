import React from "react";
import { useState, useEffect } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { COLORS, NFTData } from "../constants";
import {NFTCard,HomeHeader,FocusStatusBar} from '../components'
const Home = () => {
  return <SafeAreaView style={{ flex: 1 }}>
      <FocusStatusBar background={COLORS.primary} />
  </SafeAreaView>;
};

export default Home;
