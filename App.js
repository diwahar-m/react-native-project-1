import { useState } from 'react';
import { StyleSheet,  View,FlatList,Button} from 'react-native';
import GoalItem from './components/GoalItem'; 
import GoalInput from './components/GoalInput'; 
import {StatusBar} from 'expo-status-bar';

export default function App() {  

  const[modalIsVisible,setModalIsVisible]=useState(false);
  const[courseGoals,setCourseGoals]=useState([]);
 
  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }
  

  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentGoals=>[...currentGoals,{text:enteredGoalText,id:Math.random().toString()}]);
    endAddGoalHandler();
  } 

  function deleteGoalHandler(id){
    setCourseGoals(currentGoals =>{
      return currentGoals.filter(goal=> goal.id!=id);
    });
  }

  return ( 
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>   
        <View style={styles.inputContainer}>
          <Button onPress={startAddGoalHandler} title='Add New Goal' color="#a065ec"/>
          <GoalInput visible={modalIsVisible} onCancel={endAddGoalHandler} addGoalHandler={addGoalHandler}/>
          
        </View> 
        
        <View style={styles.goalsContainer}>  
          

          <FlatList 
            data={courseGoals}
            renderItem={itemData=>{
              return <GoalItem onDeleteItem={deleteGoalHandler} id={itemData.item.id} text={itemData.item.text}/>
            }}  
            keyExtractor={(item,index)=>{
              return item.id;
            }}
            alwaysBounceVertical={false}
          /> 
            
        </View> 
      
      </View>
    </>
  );
}

const styles = StyleSheet.create({ 
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16, 
    backgroundColor:'#1e085a',
  },
  goalsContainer:{
    flex:5
  }, 
  
  
});
