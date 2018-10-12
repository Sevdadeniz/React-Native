/** @format */
import {
    Dimensions,

} from 'react-native';
import {AppRegistry} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
//import App from './App';

import HomeComponent from './components/HomeComponent';
import TezgahDurumuComponent from './components/TezgahDurumuComponent';
import SiparisRaporuComponent from './components/SiparisRaporuComponent';
import PersonelComponent from './components/PersonelComponent';
import RaporlarComponent from './components/RaporlarComponent';
import BarkodOkuComponent from './components/BarkodOkuComponent';

export { Home, TezgahDurumu, SiparisRaporu, Personel, Raporlar, BarkodOku} from './screenNames';
var {  width} =Dimensions.get('window');

let routeConfigs = {
   /* App:{
        path:'/',
        screen: App,
    },*/
    Home:{
        path:'/',
        screen : HomeComponent,
    },
    TezgahDurumu:{
        path:'/TezgahDurumu',
        screen : TezgahDurumuComponent,
    },
    SiparisRaporu:{
        screen : SiparisRaporuComponent,
    },
    Personel:{
        screen : PersonelComponent,
    },
    Raporlar:{
        screen : RaporlarComponent,
    },
    BarkodOku:{
        screen : BarkodOkuComponent,
    }




};
let drawerNavigatorConfig = {
    initialRouteName:App,
    drawerWidth: width/2,
    drawerPosition:'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOption: {
        activeTintColor: 'red',
    }



};
const App = DrawerNavigator(routeConfigs, drawerNavigatorConfig);
AppRegistry.registerComponent.call('project', () => HomeComponent);
