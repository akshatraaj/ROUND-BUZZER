import * as React from 'react';
import { View} from 'react-native';
import SoundButton from './components/SoundButton'


export default class App extends React.Component{
  render(){
    return(
     <View>
     <SoundButton />
     </View>
    );
  }
}