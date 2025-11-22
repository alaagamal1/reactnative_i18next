import React from "react";
import { FlatList, Text, View } from "react-native";

export default function ProductsList() {
    const listProducts = [
        {
            id: 1,
            name: 'Product 1',
            price: 100,
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200,
        },
        {
            id: 3,
            name: 'Product 3',
            price: 300,
        },
        {
            id: 4,
            name: 'Product 4',
            price: 400,
        },
        {
            id: 5,
            name: 'Product 5',
            price: 500,
        },
        {
            id: 6,
            name: 'Product 6',
            price: 600,
        },
        {
            id: 7,
            name: 'Product 7',
            price: 700,
        },
        {
            id: 8,
            name: 'Product 8',
            price: 800,
        },
    ];
    const renderItem = ({ item }: { item: any }) => {
        return (
            <View style={{ width: 200, height: 200, backgroundColor: 'grey', borderRadius: 10, marginRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
            </View>
        );
    }
    return (
        <FlatList
            horizontal={true}
            data={listProducts}
            renderItem={renderItem}
        />
    );
}
