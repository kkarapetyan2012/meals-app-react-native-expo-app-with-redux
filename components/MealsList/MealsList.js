import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "./MealItem";

function MealsList({ items }) {
    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemprops = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        }
        return (
            <MealItem {...mealItemprops} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={items} keyExtractor={item => item.id} renderItem={renderMealItem} />
        </View>
    )
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})