import React, { Component } from "react";
import { 
    View,
    TouchableHighlight
  } from 'react-native';
import ProductDetail from "./Components/article-detail";

class Article extends Component {

    constructor(props) {
        super(props);
    }   

    static navigationOptions = {
        title: 'Product Description',
        headerStyle:{
            backgroundColor: 'red',
            borderBottomColor: '#2B1FA2',
        },
        headerTintColor: '#FFF',            
        headerTitleStyle: {
            fontWeight: '500',
            fontSize: 20,
        }
    }



    render() {
        return (
            <View>
                <ProductDetail navigation={ this.props.navigation } />                  
            </View>
        );
    }
}
export default Article;