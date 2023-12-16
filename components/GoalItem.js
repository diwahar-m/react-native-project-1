import { StyleSheet,View,Text,Pressable } from "react-native";

function GoalItem(props){ 

    return( 
        
        <View  style={styles.goalItem}> 
            <Pressable 
                android_ripple={{color:'#dddddd'}} // for android ripple effect
                style={({pressed}) => pressed && styles.pressedItem} // for iOS ripple effect
                onPress={props.onDeleteItem.bind(this,props.id)} 
            >
                <Text style={styles.goalText}>{props.text}</Text> 
            </Pressable>
        </View>
       
    )

} 

export default GoalItem; 

const styles = StyleSheet.create({
    goalItem:{
        margin:8, 
        borderRadius:6, 
        backgroundColor:'#5e0acc', 
        padding:8, 
        color:'white'
      },
      goalText:{
        color:'white'
      }, 
      pressedItem:{
        opacity:0.5
      }
});