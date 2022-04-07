import React, { useState } from "react";
import { Text, SafeAreaView, FlatList, View } from "react-native";

import { COLORS, NFTData } from "../constants";

import { HomeHeader, FocusedStatusBar, NFTCard } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <FlatList
          data={NFTData}
          renderItem={({ item }) => <NFTCard data={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader />}
        />
      </View>

      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      >
        <View style={{ height: 300, backgroundColor: COLORS.primary }} />
        <View style={{ flex: 1, backgroundColor: COLORS.white }} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
