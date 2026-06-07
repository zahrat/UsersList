import { Animated, StyleSheet, View } from "react-native";
import CustomText from "../../../atoms/CustomText";
import useUserDetailHook from "./userDetail.hook";
import CustomScrollView from "../../../atoms/CustomScrollView";
import CustomButton from "../../../atoms/CustomButton";
import MatchesUsers from "./views/MatchedUsers";
import { useEffect, useRef } from "react";

export default function UserDetail() {
  const { userInfo, matchesUsers, showMatchedUsers, onMathBtnPressed } =
    useUserDetailHook();

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: showMatchedUsers ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [showMatchedUsers]);

  const animatedStyle = {
    opacity: animatedValue,
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  return (
    <CustomScrollView contentContainerStyle={styles.scrollContainer}>
      <CustomButton title="Find Matches" onPress={onMathBtnPressed} />
      {showMatchedUsers && (
        <Animated.View style={animatedStyle}>
          <MatchesUsers users={matchesUsers} />
        </Animated.View>
      )}
      <View style={styles.divider} />
      {userInfo?.map((item, index) => {
        return (
          <View key={`${item?.key}_${index}`} style={styles.itemContainer}>
            <CustomText>
              {item?.key} {` :  `}
            </CustomText>
            <CustomText style={{ flexShrink: 1 }}>{item?.value}</CustomText>
          </View>
        );
      })}
    </CustomScrollView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    marginBottom: 5,
    padding: 8,
  },

  scrollContainer: { padding: 10, paddingBottom: 50 },

  divider: { height: 10 },
});
