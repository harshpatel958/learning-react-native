import { View, Text, FlatList } from "react-native";
import React, { FC } from "react";
interface ListViewProps {
  data: any[];
  renderItem: React.FC<{ item: any; index: number }>;
}
const ListView: FC<ListViewProps> = ({ data, renderItem }) => {
  return (
    <FlatList
    style={{marginVertical:20}}
      data={data}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      renderItem={renderItem}
    />
  );
};

export default ListView;
