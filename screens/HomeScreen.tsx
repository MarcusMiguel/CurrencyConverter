import React from "react";
import { Image, StyleSheet, TextInput, View, Picker } from 'react-native';
import { Text } from "react-native-paper";

export default function HomeScreen() {
    const [quantity, onChangeQuantity] = React.useState("")
    const [currencies, setCurrencies] = React.useState([])
    const [selectedOriginCurrency, setSelectedOriginCurrency] = React.useState("")
    const [selectedDestinyCurrency, setSelectedDestinyCurrency] = React.useState("")
    const [result, setResult] = React.useState(0)

    React.useEffect(() => {
        fetch('https://economia.awesomeapi.com.br/json/all')
            .then((response) => response.json())
            .then((data: object) => {
                let allCurr: any = Object.values(data)
                let usd = allCurr[0]
                allCurr.shift()
                allCurr.shift()
                allCurr.unshift(usd)
                allCurr.unshift({ code: "BRL", bid: "1" })
                let newBtcPrice = (parseFloat(allCurr[5]['bid']) * 1000).toString()
                allCurr[5] = { code: "BTC", bid: newBtcPrice }
                console.log(allCurr[5])
                setCurrencies(allCurr)
                setSelectedOriginCurrency('1')
                setSelectedDestinyCurrency('1')
            })
    }, [])

    function handleOriginCurrencyChange(itemValue: string, itemIndex: number) {
        setSelectedOriginCurrency(itemValue)
        setResult(parseFloat(itemValue) / parseFloat(selectedDestinyCurrency) * parseFloat(quantity == '' ? '0' : quantity))
    }

    function handleDestinyCurrencyChange(itemValue: string, itemIndex: number) {
        setSelectedDestinyCurrency(itemValue)
        setResult(parseFloat(selectedOriginCurrency) / parseFloat(itemValue) * parseFloat(quantity == '' ? '0' : quantity))
    }

    const updateResult = (e: any) => {
        setResult(parseFloat(selectedOriginCurrency) / parseFloat(selectedDestinyCurrency) * parseFloat(e.target.value == '' ? '0' : e.target.value))
    }

    return (
        <View style={styles.view}>

            <Text style={styles.text}>Valor</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeQuantity}
                onChange={(e) => updateResult(e)}
                keyboardType={'numeric'}
                maxLength={10}
                value={quantity}>
            </TextInput>

            <View style={styles.separator} />

            <Text style={styles.text}>Moeda Origem</Text>
            <Picker
                selectedValue={selectedOriginCurrency}
                style={{ height: 50, width: 250 }}
                onValueChange={(itemValue, itemIndex) => handleOriginCurrencyChange(itemValue, itemIndex)}
            >
                {currencies.map((prop, key) => {
                    return (
                        <Picker.Item label={prop['code']} value={prop['bid']} />
                    )
                })}
            </Picker>

            <View style={styles.separator} />

            <Text style={styles.text}>Moeda Destino</Text>
            <Picker
                selectedValue={selectedDestinyCurrency}
                style={{ height: 50, width: 250 }}
                onValueChange={(itemValue, itemIndex) => handleDestinyCurrencyChange(itemValue, itemIndex)}
            >
                {currencies.map((prop, key) => {
                    return (
                        <Picker.Item label={prop['code']} value={prop['bid']} />
                    )
                })}
            </Picker>

            <View style={styles.separator} />

            <Text style={styles.text}>Valor Convertido: {result.toFixed(2)} </Text>

        </View>)
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'white'
    },
    text: {
        width: 250,
        alignSelf: "center",
        justifyContent: 'center',
        fontSize: 28,
        fontFamily: 'roboto',
        color: 'black',
        fontWeight: 'bold',
        fontStyle: 'normal',
    },
    input: {
        width: 250,
        height: 35,
        margin: 6,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2,
        fontSize: 28
    },
    separator: {
        marginVertical: 20,
        height: 1,
        width: '80%',
        backgroundColor: '#eee',

    },
})
