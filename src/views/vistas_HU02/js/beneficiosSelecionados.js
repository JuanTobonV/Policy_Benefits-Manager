export function GuardarBeneficios (data,key){
    const beneficios = JSON.parse(localStorage.getItem(key))

   if(!beneficios){
      localStorage.setItem(key,JSON.stringify(data))
   }else{
      localStorage.setItem(key,JSON.stringify([...beneficios,...data]))
   }
}