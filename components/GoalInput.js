import {StyleSheet,View,TextInput,Button,Modal,Image} from 'react-native'; 
import {useState} from 'react'; 

function GoalInput(props){  

    const [enteredGoalText,setEnteredText]=useState(''); 
   
    function goalInputHandler(enteredText){
      setEnteredText(enteredText); 
    } 

   function addGoalHandler1(){
     props.addGoalHandler(enteredGoalText); 
     setEnteredText('');
   }

    return(  
      <Modal visible={props.visible} animationType="slide">

          <View style={styles.inputContainer1}>  
              <Image style={styles.image} source={require('../assets/images/rngoal.png')}/>
              <TextInput onChangeText={goalInputHandler}
                  style={styles.textInput}
                  placeholder='Your course goal'
                  value={enteredGoalText}
              />  
              <View style={styles.buttonContainer}> 
                <View style={styles.button}>
                  <Button color='#f31282' title='CANCEL' onPress={props.onCancel}/>
                </View>
                <View style={styles.button}>
                  <Button color='#b180f0' onPress={addGoalHandler1} title='ADDGOAL'/>
                </View>
              </View>
          </View> 
      </Modal>

    )
} 

export default GoalInput; 

const styles = StyleSheet.create({ 
  inputContainer1:{
    flex:1,
    padding:16,
    justifyContent:'center',
    alignItems:'center', 
    // marginBottom:24, 
    // borderBottomWidth:1, 
    // borderBottomColor:'#cccccc', 
    backgroundColor:'#311b6b'
  }, 
  textInput:{
    borderWidth:1, 
    borderColor:'#e4d0ff', 
    backgroundColor:'#e4d0ff',  
    color:'120438',
    width:'100%',  
    borderRadius:6,
    marginRight:8, 
    padding:16
  },   
  buttonContainer:{
    flexDirection:'row', 
    marginTop:16
  }, 
   button:{
    width:100, 
    marginHorizontal:8
   }, 
   image:{
    width:100, 
    height:100, 
    margin:8
   }
});