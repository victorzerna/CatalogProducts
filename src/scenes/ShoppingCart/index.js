import React, { Component } from 'react';
//import ProfileOverview from './components/profile-overview';
//import FormOverview from './components/form-overview';
//import FollowOverview from './components/follow-overview';

import { View, Text,Image,StyleSheet, AlertIOS } from 'react-native';
//Componente de tipo clase
class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            article: {}
        };
    }

    componentDidMount() {
        const article = {

            name: 'Comprando..... S-Works Epic XX1 Eagle',
            price: '$33.990.000,00',
            shortDes: 'Rápido y llano, roto y técnico, punzante y duro, no importa el circuito, la S-Works Epic con SRAM XX1 Eagle es la mejor herramienta para llegar a la cima del podio. Su diseño es totalmente nuevo, y que te vamos a decir, es lo más rápida.',
            photo: 'https://s7d5.scene7.com/is/image/Specialized/90318-03_EPIC-MEN_SW-CARBON-SRAM-29_BLK-METWHTSIL_HERO?$hybris-hd$',

        };
        this.setState({
            article // esto es igual profile: profile
        });
    }
/*
    showAlert() {
        AlertIOS.alert(
            'Sync Complete',
            'All your data are belong to us.'
        );
    }

    changeText = text => {
        this.setState({ article: { name: text } });
        console.log(text);
    }
*/
    static navigationOptions = {
        title: 'Product Description',
        headerStyle:{
            backgroundColor: 'red',
            borderBottomColor: '#2B1FA2',
        }
    }

    render() {
        return (
            <View style={styles.content}>
                <View >
                <Text style={styles.productName}> {this.state.article.name}</Text>
                    <Image
                        style={ styles.image}
                        source={{ uri: this.state.article.photo }}
                    />
                </View>
                <View >
                    
                    <Text style={styles.productPrice}> {this.state.article.price}</Text>
                


                    <Text style={styles.productDescription}>{this.state.article.shortDes}</Text>
                </View>
                {/*
                <ProfileOverview profile={this.state.profile} />
                <FollowOverview followings={this.state.profile.followings} followers={this.state.profile.followers} />
                <FormOverview navigation={this.props.navigation} onPress={  this.showAlert} profile={this.state.profile} onChangeText={this.changeText} />
                */}
            </View>
            //lo ubicamos dentro de un view dado que este return retorna un solo objeto
            //this.props.children
        );
    }

}

const styles = StyleSheet.create({
    container:{
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content:{
        paddingLeft: 10,
        justifyContent: 'center',
        marginHorizontal: 25,
        marginTop: 100,
    },
    contentDescription:{
        paddingLeft: 2,
        justifyContent: 'center',
        marginHorizontal: 25,
        marginTop: 100,
    },
    image: {
        width: 300,
        height: 180,
        borderRadius: 15,
        padding: 5,
        margin: 5
    },
    productName: {
        alignContent: 'center',
        fontSize: 30,
        fontWeight: '200',
    },
    productPrice: {
        fontSize: 30,
        color: 'red',
        fontWeight: '200',
    },
    productDescription: {
        alignContent: 'center',
        fontSize: 14,
        fontWeight: '200',
    },
});



export default ShoppingCart;