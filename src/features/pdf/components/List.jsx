import { StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
    },
    bulletPoint: {
        fontFamily: 'DejaVu Sans',
        fontSize: 6,
        paddingTop: 4,
        width: 12,
    },
    itemContent: {
        flex: 1,
        fontSize: 12,
        fontFamily: 'Garamond',
        paddingLeft: 6,
    },
});

const List = ({ children }) => children;

export const Item = ({ children }) => {
    // This unicode character "▪".
    const blackSmallSquare = String.fromCharCode(0x25aa);

    return (
        <View style={styles.item}>
            <Text style={styles.bulletPoint}>{blackSmallSquare}</Text>
            <Text style={styles.itemContent}>{children}</Text>
        </View>
    );
};

export default List;
