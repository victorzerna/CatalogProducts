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
    render() {
        return (
            <View>
                <ProductDetail navigation={ this.props.navigation } />                  
            </View>
        );
    }
}
export default Article;