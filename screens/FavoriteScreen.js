import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
// import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
// import { FavoriteContext } from "../store/context/favorites-context";

function FavoriteScreen() {
    // const favoriteMealsCtx = useContext(FavoriteContext);

    const favoritesmealsIds = useSelector(state => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter((meal) => favoritesmealsIds.includes(meal.id));

    if(favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You don't have to favorite meals</Text>
            </View>
        )
    }

    return <MealsList items={favoriteMeals} />
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    }
})