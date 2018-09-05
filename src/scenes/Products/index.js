import React, {Component} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import ItemContact from './Components/item-product';
import ItemSeparator from './Components/item-separator';

class Products extends Component{

    constructor(props){
        super(props),
        this.state = {
            contactList:[]
        };
    }

    componentDidMount = () =>{
        const products = [
            {
                name: 'S-Works Epic XX1 Eagle',
                price: '$33.990.000,00',
                shortDes: 'Rápido y llano, roto y técnico, punzante y duro, no importa el circuito, la S-Works Epic con SRAM XX1 Eagle es la mejor herramienta para llegar a la cima del podio. Su diseño es totalmente nuevo, y que te vamos a decir, es lo más rápida.',
                photo: 'https://s7d5.scene7.com/is/image/Specialized/90318-03_EPIC-MEN_SW-CARBON-SRAM-29_BLK-METWHTSIL_HERO?$hybris-hd$',
                id: 1
            },
            {
                name: 'S-Works Stumpjumper 6Fattie',
                price: '$31.930.000,00',
                shortDes: 'Es muy fácil decir que una bicicleta es lo suficientemente revolucionaria, que está construida con última tecnología. Pero pocas veces vemos que es una bicicleta de caminos que va más allá del empaque. Y nosotros ahora te vamos a dejar en ese momento cuando te tocas la cabeza y te preguntas, ¡¿Cómo pudieron haberlo hecho?! Bueno, te presentamos la S-Works Stumpjumper 6Fattie/29. Es precisamente esa bicicleta.',
                photo: 'https://s7d5.scene7.com/is/image/Specialized/93318-05_SJ-FSR_SW-CARBON-6FATTIE_CARB-HYP_HERO?$hybris-hd$',
                id: 2
            },
            {
                name: 'S-Works Epic Hardtail XTR Di2',
                price: '$29.870.000,00',
                shortDes: 'No importa cuanto nos guste nuestra Epic FSR, es innegable que las rígidas aún juegan un papel muy importante en las carreras XC. ¿Entonces qué hacemos? Creamos la bicicleta de montaña más ligera hasta el momento, la S-Works Epic Hardtail.',
                photo: 'https://s7d5.scene7.com/is/image/Specialized/97118-01_EPIC-HT-MEN_SW-CARBON-DI2-29_RKTRED-BLK_HERO?$hybris-hd$',
                id: 3
            },
            {
                name: 'Epic Hardtail Pro',
                price: '$20.090.000,00',
                shortDes: 'Si nos preguntan, hace mucho tiempo que las rigidas sorprendieron al mundo. Pues con nuestra nueva Epic HT Pro queremos conseguir ese mismo efecto. Con su nueva geometría, su cuadro muy ligero y un montaje espectacular, esta bicicleta está preparada para romper todos los moldes.',
                photo: 'https://s7d5.scene7.com/is/image/Specialized/91318-11_EPIC-HT-MEN_PRO-CARBON-29_BLK-CMLN_HERO?$hybris-hd$',
                id: 4
            },
            {
                name: 'Epic Expert',
                price: '$18.540.000,00',
                shortDes: '¿Cuadro ligero de carbono? Comprobado. ¿Tecnología de suspensión líder en la industria? También. ¿Montaje para competir? Lo sabes. La Epic Expert no solo está lista para brillar en las carreras, sino que también para picarte con tus amigos los fines de semana.',
                photo: 'https://s7d5.scene7.com/is/image/Specialized/90318-30_EPIC-MEN_EXPERT-CARBON-29_CHAR-BLK-RKTRED_HERO?$hybris-hd$',
                id: 5
            },
            {
                name: 'Epic Hardtail Expert',
                price: '$15.040.000,00',
                shortDes: 'Con el crecimiento de las bicicletas XC de doble suspensión, las rígidas empezaban a estancarse. Así que, ¿por qué no aprovechar el momento y agitar el XC con un diseño moderno y revolucionario? Da la bienvenida a la Epic HT Expert.',
                photo: 'https://s7d5.scene7.com/is/image/Specialized/91318-32_EPIC-HT-MEN_EXPERT-CARBON-29_HYP-BLK_HERO?$hybris-hd$',
                id: 6
            },
            {
                name: 'Epic Comp Carbon',
                price: '$13.810.000,00',
                shortDes: 'No importa cómo lo mires, las carreras XC son difíciles. Las aceleraciones a tope, los rock gardens técnicos, y los repechos brutales no son para corazones débiles. Con esto en mente, diseñamos la nuevo Epic Comp Carbon Mujer para que la competición sea un poco más agradable, y poder llevar tus resultados al siguiente nivel.',
                photo: 'https://s7d5.scene7.com/is/image/Specialized/93018-52_EPIC-WMN_COMP-CARBON-29_ACDMNT-TARBLK-ACDPNK_HERO?$hybris-hd$',
                id: 7
            },
            {
                name: 'Camber Comp 650b',
                price: '$8.760.000,00',
                shortDes: 'La Camber Comp 650b de Mujer quiere ser tu primer bici de trail, especialmente si te gusta el manejo agil y juguetón. Escala bien, desciende con confianza y su imagen es imponente. Es el punto de partida perfecto para iniciarse en el ciclismo de montaña Trail.',
                photo: 'https://s7d5.scene7.com/is/image/Specialized/95318-51_CAM-FSR-WMN_COMP-27-5_CSTBLU-ACDLAVA_HERO?$hybris-hd$',
                id: 8
            },
         /*   {
                name: '',
                price: '',
                shortDes: '',
                photo: '',
                id: 9
            },
            {
                name: '',
                price: '',
                shortDes: '',
                photo: '',
                id: 10
            },
*/

        ];
        {/*this.setState({contactList: []}) Lista vacia para ver mensaje*/}
        this.setState({contactList: products})
    }

    static navigationOptions = {
        title: 'Product List',
        headerStyle:{
            backgroundColor: 'red',
            borderBottomColor: '#2B1FA2',
        }
    }

    renderItem = ({ item }) => <ItemContact navigation={ this.props.navigation} contact ={ item }/>

    separatorComponent = () => <ItemSeparator/>
 

 //   emptyComponent =() => <Text> COntacts not found </Text>

    keyExtractor = item  => item.id.toString()

    render(){
        return(
            <View> 
               {// <Text>{ this.props.navigation.getParam('name', 'NO-SUPERHERO')}</Text>
               }
               {/* <Button
                    title="Go Back"
                    onPress={ () => {this.props.navigation.goBack()}}
                />*/}
                <FlatList 
                 data={ this.state.contactList }
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