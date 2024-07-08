import { StyleSheet, View } from "react-native";
import React from "react";
import HorizontalList from "./HorizontalList";

const BreakingNews = ({ data }) => {
  return <HorizontalList title="Breaking News" data={data} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default BreakingNews;
