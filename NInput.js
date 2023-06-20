import {Button, StyleSheet, TextInput, View} from 'react-native';

import {useState} from "react";

export default function NInput({onStart}) {
    const [n, setN] = useState("");
    const onChanged = (text) => {
        setN(text.replace(/[^0-9]/g, ""))
    }
    return (
        <View style={{flexDirection: "row", flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
                style = {styles.input}
                keyboardType = "numeric"
                onChangeText = {(text)=> onChanged(text)}
                value = {n}
                placeholder = "n"
            />
            <View>
                <Button
                    title="Start"
                    onPress={() => onStart(parseInt(n))}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 50,
        borderColor: '#050505',
    },
});