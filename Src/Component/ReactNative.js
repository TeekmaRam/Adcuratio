import React, { useState, useEffect } from 'react';
import {
    FlatList,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';



export const ReactNative = () => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        fetch('https://api.stackexchange.com/2.3/questions?order=desc&sort=hot&tagged=React-Native&site=stackoverflow&filter=!1wfr4L*2Y5zxaFy6Rfr4l1LwjRjYLvS*fX_QBgITQA)YEPStSvM)FXTFxnLWLDc7U5g', {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => {
                setDataList(res?.items ?? []);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    const renderQuestion = ({ item }) => {
        return (
            <View style={styles.questionContainer}>
                <TouchableOpacity
                    style={styles.questionButton}
                    onPress={() => Linking.openURL(item?.link)}
                >
                    <Text>{item?.title ?? ''}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={dataList ?? []}
                keyExtractor={(item) => item.question_id.toString()}
                ListEmptyComponent={
                    <View style={styles.emptyListComponent}>
                        <Text>No data available</Text>
                    </View>
                }
                renderItem={renderQuestion}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    questionContainer: {
        backgroundColor: '#ffffff',
        paddingVertical: 10,
    },
    questionButton: {
        marginLeft: 20,
        marginRight: 20,
    },
    emptyListComponent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});


