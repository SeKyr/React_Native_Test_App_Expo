import NInput from "./NInput";
import {useEffect, useRef, useState} from "react";
import {Animated, Easing, View} from "react-native";

export default function UIView() {
    const [n, setN] = useState();
    const [squaresWidth, setSquaresWidth] = useState();
    const [squaresHeight, setSquaresHeight] = useState();

    const setDimensions = (layout) => {
        const {x, y, width, height} = layout;
        setSquaresWidth(width);
        setSquaresHeight(height);
    }
    const onStart = (n) => {
        setN(n)
    }
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onLayout={(event) => {
            setDimensions(event.nativeEvent.layout)
        }}>
            {n > 0 ? <RotatingSquares n={n} width={squaresWidth} height={squaresHeight}></RotatingSquares> :
                <NInput onStart={onStart}></NInput>}
        </View>
    )
}


function getOptimalSideLength(n, width, height) {
    let sizePerSquare = width * height / n;
    let squareSideLength = Math.sqrt(sizePerSquare);
    let smallerSideLength = Math.min(height, width);
    let biggerSideLength = Math.max(height, width);
    if (squareSideLength <= smallerSideLength && squareSideLength <= biggerSideLength / n) {
        return squareSideLength;
    }
    let rows = 1;
    let smallerSideCellLength = 0;
    let biggerSideCellLength = 0;
    let nextSmallerSideCellLength = 0;
    while (biggerSideCellLength <= nextSmallerSideCellLength) {
        smallerSideCellLength = smallerSideLength/rows;
        biggerSideCellLength = biggerSideLength/ Math.ceil(n / rows);
        nextSmallerSideCellLength = smallerSideLength / (rows + 1);
        rows++;
    }
    return Math.min(smallerSideCellLength, biggerSideCellLength);
}

function RotatingSquares({n, width, height}) {
    let squareSideLength = getOptimalSideLength(n, width, height);
    let rows = Math.floor(height / squareSideLength);
    let columns = Math.floor(width / squareSideLength);
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", width: width, height: height}}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
                {Array.from({length: columns}, (_, column) => (
                    <View key={column}>
                        {Array.from({length: rows}, (_, row) => {
                            if (n > 0) {
                                n--;
                                return (
                                    <RotatingSquare key={row} length={squareSideLength}></RotatingSquare>
                                );
                            }
                        })}
                    </View>
                ))}
            </View>
        </View>
    )
}

function RotatingSquare({length}) {
    const rotationValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const startAnimation = () => {
            rotationValue.setValue(0);

            Animated.timing(rotationValue, {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: true,
            }).start(startAnimation);
        };

        startAnimation();
    }, [rotationValue]);

    const interpolatedRotation = rotationValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Animated.View
                style={{
                    width: length,
                    height: length,
                    backgroundColor: '#2196F3FF',
                    borderWidth: 1,
                    borderColor: "black",
                    transform: [{rotate: interpolatedRotation}],
                }}
            />
        </View>
    );
}

