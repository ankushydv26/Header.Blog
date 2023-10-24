const ConditionalRender = ({condition , children}) => {
    if(condition){
      return children
    }
   if(!condition){
    return null;
   }
}

export default ConditionalRender