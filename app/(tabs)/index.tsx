import { Text, View, ScrollView, Image  } from "react-native";

import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

export default function Index() {
  return (

	  <View className="flex-1 bg-primary">
		<Image 
		source={images.bg} 
		className="absolute w-full z-0"/>
	
	      <ScrollView 
	      className="flex-11 px-5"
	      showsVerticalScrollIndictor={false}
	      contentContainerStyle={{
	      minHeight: "100%",
	      paddingBottom: 10
	      }}>

	      <Image 
	     source={icons.logo}
	    className="w-12 h-10 mt-20 mb-5 mx-auto" />

      	      </ScrollView>	      
		
	</View>

  );
}
