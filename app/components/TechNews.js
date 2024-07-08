import { StyleSheet, View } from "react-native";
import React from "react";
import HorizontalList from "./HorizontalList";

const TechNews = ({ data }) => {
  return <HorizontalList title="Tech News" data={data} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default TechNews;
