import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const Index = () =>{
  return(
  <View 
  style={{
      backgroundColor: "violet",
      flex:1,
      alignItems: "center",
      justifyContent: "center",
  }}
  >

    <Text 
    style={{
    fontSize: 50, fontWeight: "700", color:"white"}}> 
    Hello World</Text>
    <Link href="/about">Go to About</Link>
  </View>
  );
};

export default Index;
