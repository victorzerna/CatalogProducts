import React, {Component} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import ItemProducts from './Components/item-product';
import ItemSeparator from './Components/item-separator';

import api from './../../utils/api';

class Products extends Component{

    constructor(props){
        super(props),
        this.state = {
            productList:[]
        };
    }

    componentDidMount = () =>{
       api.getProducts()
       .then( data => {
           this.setState({productList: data});
        console.log(data)
       })
       .catch( error => console.log(error) );
    }

    

    static navigationOptions = {
        title: 'Product List',
        headerStyle:{
            backgroundColor: 'red',
            borderBottomColor: '#2B1FA2',
        }
    }

    renderItem = ({ item }) => <ItemProducts navigation={ this.props.navigation} product ={ item }/>
    separatorComponent = () => <ItemSeparator/>
    keyExtractor = item  => item._id.toString()

    render(){
        return(
            <View> 
                <FlatList 
                 data={ this.state.productList }
                 renderItem={ this.renderItem }
                 ListEmptyComponent= { this.emptyComponent}
                ItemSeparatorComponent={ this.separatorComponent}
                keyExtractor={ this.keyExtractor}
                />
            </View>
        );
    }
}

export default Products;