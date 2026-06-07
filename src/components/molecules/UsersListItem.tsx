import { StyleSheet, TouchableOpacity, View } from "react-native";
import CustomText from "../atoms/CustomText";
import CustomImage from "../atoms/CustomImage";
import { router } from "expo-router";
import { useMemo } from "react";

export default function UsersListItem({ item, index }) {
  const onPress = () => {
    router.push({
      pathname: "/users/UserDetailScreen",
      params: { item: JSON.stringify(item) },
    });
  };

  const displayInfo = useMemo(() => {
    return [
      {
        label: "Name: ",
        value: `${item?.firstName ?? ""} ${item?.lastName ?? ""}`,
      },
      { label: "Age: ", value: item?.age },
      { label: "City: ", value: item?.address?.city },
    ];
  }, [item]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.infoContainer}>
        {displayInfo?.map((info, index) => (
          <CustomText style={styles.label} key={info?.label}>
            {info?.label}
            <CustomText style={styles.value}>{info?.value}</CustomText>
          </CustomText>
        ))}
      </View>
      <View>
        <CustomImage source={{ uri: item?.image }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  image: { width: 30, height: 30 },

  infoContainer: { flex: 1 },

  label: { fontWeight: "bold" },
  value: { fontWeight: "normal" },
});
