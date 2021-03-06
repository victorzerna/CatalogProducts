//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TouchableHighlight} from 'react-native';

// create a component
const ItemProduct = ( props ) => (
    <TouchableHighlight
    onPress = {() => props.navigation.navigate('ArticleScreen')}
    underlayColor="#CCC"
    >
    

            <View style={ styles.container}>
            <View>
                <Image
                    style={ styles.image}
                    source={{ uri: props.contact.photo }}
                />
            </View>
            <View style={ styles.content}>
                <Text style={styles.productName}> {props.contact.name}</Text>
                <Text style={styles.productPrice}> {props.contact.price}</Text>
                
                
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => { props.navigation.navigate('ShoppingScreen')}}>
                        <Image
                        style={ styles.shoppingCart}
                        source={{ uri: 'https://www.kity-rouen.com/images/Image/m-legendre-robert.jpg' }}
                        />
                    </TouchableOpacity>
                    
                </View>
                
                
                {/*<Button
                    image={'https://s7d5.scene7.com/is/image/Specialized/95318-51_CAM-FSR-WMN_COMP-27-5_CSTBLU-ACDLAVA_HERO?$hybris-hd$'}
                    onPress={ () => { props.navigation.navigate('ContactsScreen',{ name: 'MTB'}) } }
                />
                */}



            </View>
            
        </View>
    </TouchableHighlight>
    
);

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    content:{
        paddingLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 140,
        height: 70,
        borderRadius: 35,
        padding: 5,
        margin: 5
    },
    shoppingCart: {
        width: 30,
        height: 30,
        borderRadius: 1,
        padding: 5,
        margin: 5
    },
    productName: {
        fontSize: 14,
        fontWeight: '200',
    },
    productPrice: {
        fontSize: 10,
        color: 'red',
        fontWeight: '200',
    },
});

//make this component available to the app
export default ItemProduct;
