import NInput from "./NInput";
import {useState} from "react";
import {Text} from "react-native-web";
import {View} from "react-native";

export default function CalculationView() {
    const fibonacciAlgorithm = (n) => {
        const startTime = performance.now();
        fib(n);
        const endTime = performance.now();
        return elapsedMicroseconds(startTime, endTime);
    }

    const fib =  (n) => {
        if (n <= 2) {
            return 1;
        }
        return fib(n - 1) + fib(n - 2);
    }

    const matrixMultiplicationAlgorithm = (n) => {
        const firstMatrix = Array.from(Array(n), (v1,row) => Array.from(new Array(n), (v2, column) => (row + 1) * (column + 1)));
        const secondMatrix = Array.from(Array(n), (v1,row) => Array.from(new Array(n), (v2, column) => (row + 1) + (column + 1)));
        const resultMatrix = Array.from(Array(n), () => new Array(n));
        const startTime = performance.now();
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                let cell = 0;
                for (let h = 0; h < n; h++) {
                    cell += firstMatrix[row][h] * secondMatrix[h][col];
                }
                resultMatrix[row][col] = cell;
            }
        }
        const endTime = performance.now();
        return elapsedMicroseconds(startTime, endTime);
    }


    const binarySearchTreeAlgorithm = (n) => {
        const data = Array.from(Array(n), (v,i) => Math.floor((Math.sin(i)-Math.sin(i+1)) * 1000));
        const startTime = performance.now();
        for (let element of data) {
            insert(element);
        }
        const endTime = performance.now();
        return elapsedMicroseconds(startTime, endTime);
    }

    let root;

    const insert = (data) => {
        let newNode = {
            data : data ,
            left : null ,
            right : null
        };
        if(root == null) {
            root = newNode;
        } else {
            let current = root;
            while (current != null) {
                if(data < current.data) {
                    if(current.left != null) {
                        current = current.left;
                    } else {
                        current.left = newNode;
                        return;
                    }
                } else {
                    if(current.right != null) {
                        current = current.right;
                    } else {
                        current.right = newNode;
                        return;
                    }
                }
            }
        }
    }

    const reverseArrayAlgorithm = (n) => {
        const data = Array.from(Array(n), (v,i) => i);
        const startTime = performance.now();
        reverse(data);
        const endTime = performance.now();
        return elapsedMicroseconds(startTime, endTime);
    }

    const reverse = (toReverse) => {
        if(toReverse.length === 0) {
            return [];
        }
        const [head , ...tail ] = toReverse ;
        return reverse(tail).concat([head]);
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <CalculationWidget name="Fib" algorithmImplementation={fibonacciAlgorithm}></CalculationWidget>
            <CalculationWidget name="Matrix" algorithmImplementation={matrixMultiplicationAlgorithm}></CalculationWidget>
            <CalculationWidget name="Binary" algorithmImplementation={binarySearchTreeAlgorithm}></CalculationWidget>
            <CalculationWidget name="Array" algorithmImplementation={reverseArrayAlgorithm}></CalculationWidget>
        </View>
    )
}

function CalculationWidget({name, algorithmImplementation}) {
    const [executionTime, setExecutionTime] = useState(null);
    const [n, setN] = useState();
    const onStart = (n) => {
        setExecutionTime(algorithmImplementation(n));
        setN(n);
    }
    return (
        <View style={{flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{width:50}}>{name}:</Text>
            <NInput onStart={onStart}></NInput>
            <View style={{width:100}}>
                {executionTime != null && <Text >{executionTime}μs; n = {n}</Text>}
            </View>
        </View>
    )
}

function elapsedMicroseconds(startTime, endTime) {
    const executionTime = endTime - startTime;
    return executionTime * 1000;
}

