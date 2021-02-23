import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from '../config'
import { render } from 'react-dom';
import SafeAreaProvider from 'react-native-safe-area-context'
import { SafeAreaView } from 'react-native';

export default class MyHeader extends Component{
constructor(props){
  super(props)
this.state={
  value: '',
}
}
getNumberOfUnreadNotifications=()=>{
db.collection('all_notifications').where('notification_status' ,'==', 'unread').onSnapshot(snapshot =>{
  var unreadNotification= snapshot.docs.map(doc =>{doc.data()})
  this.setState({
    value: unreadNotification.length
  })  
})
}
componentDidMount(){
  this.getNumberOfUnreadNotifications()
}

 BellIconWithBadge=(props)=>{
  return(
    
  <SafeAreaProvider>
  <Icon name='bell' type='font-awesome' color= 'red' size={25} onPress={()=>{props.navigation.navigation('NotificationScreen')}}/>
  <Badge
   value='1' 
  containerStyle={{position: 'absolute', top: -4, right: -4}}
  />
</SafeAreaProvider>  )
}
render(){
  return(
  <Header 
  leftComponent={<Icon name='bars' type= 'font-awesome' onPress={()=>{props.navigation.toggleDrawer()}}/>}
  centerComponent={{text: props.title, style: {color: 'white', fontSize: 20, fontWeight: 'bold'}} } 
  rightComponent={<BellIconWithBadge{...props}/>}
  backgroundColor= 'blue'
  />
  )
}
}

// by const we can do 2 things in one screen i.e myheader and bellicon eith badge

