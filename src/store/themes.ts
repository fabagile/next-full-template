import {create} from "zustand"

export const themeStore = create(set=>({
  dark: false,
  color: 'gray',
  // darkTone: "950", 
  // lightTone: "50",
  textTone: "950",
  bgTone:"50",
  barColor:"blue",
  toggleDarkTheme: ()=> set({
    dark:true,
    txtTone: "50",
    bgTone: "950"
    
  }),
  toggleLightTheme: ()=> set({
    dark: false,
  color: 'gray',
  txtTone: "950", 
  bgColor: "50",
  })
  
  }
))