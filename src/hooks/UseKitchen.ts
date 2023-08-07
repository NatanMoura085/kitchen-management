import { useContext } from "react";
import { Context } from "../context/index"

export function useKitchen() {
  if(typeof Context === 'undefined'){
   throw new Error('You have to use use useKitchen')
  }

  return useContext(Context);
}