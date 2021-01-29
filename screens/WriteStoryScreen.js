import React from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native';
export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Story Hub</Text>
                <TextInput
                style={styles.inputBox}
                placeholder="Title of the story"
                />
                <TextInput
                style={styles.inputBox}
                placeholder="Author of the story"
                />
                <TextInput
                style={[styles.inputBox,{padding:150,marginBottom:5}]}
                placeholder="Write Your story here"
                />
                <TouchableOpacity style={styles.SubmitButton}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderWidth:2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    SubmitButton:{
        backgroundColor:"pink",
        width:100,
        height:25,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:1
    },
    title:{
        backgroundColor:'pink',
        fontSize:50,
        borderColor:'pink',
        borderLeftWidth:200,
        borderRightWidth:200,
        margin:10
    },
    inputBox:{
        padding:25,
        margin:5,
        width:500,
        height:40,
        borderWidth:1,
        fontSize:20,
        TextAlign:'left'
    },
  });