module.exports = function check(str, bracketsConfig) {
  
  const st = [] ,openBrack = [], closeBrack = []
  bracketsConfig.forEach((i) => {
    openBrack.push(i[0])
    closeBrack.push(i[1])
  })

  for ( let k = 0; k < str.length; k++) {
    if(closeBrack.includes(str[k])&&st.length>0){
      if(st[st.length-1]==openBrack[closeBrack.indexOf(str[k])])
      st.pop()
      else if(str[k]==openBrack[closeBrack.indexOf(str[k])])
      st.push(str[k])
      else return false
    }
    else st.push(str[k])
}

 return st.length==0
 
}