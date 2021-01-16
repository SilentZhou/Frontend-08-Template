function wildcard(source,pattern){
  const sourceLength = source.length
  const patternLength = pattern.length
  let starCount = 0;
  for(let i=0;i<patternLength;i++){
    if(pattern[i]==="*"){
      starCount++;
    }
  }
  if(starCount===0){

  }
  let i = 0;
  let lastIndex = 0;

  for(i=0;pattern[i]!=="*";i++){
    if(source[i]!==pattern[i]&&pattern[i]!=='?'){
      return false
    }
  }

  lastIndex = i

  for(let p=0;p<starCount-1;p++){
    i++
    let subPattern = ''
    for(i;pattern[i]!=='*'&&i<patternLength;i++){
      subPattern +=pattern[i] 
    }
    subPattern = new RegExp(subPattern.replace('?','[\\s\\S]'),'g')
    subPattern.lastIndex=lastIndex
    let match = subPattern.exec(source)
    if(!match){
      return false
    }
    lastIndex = subPattern.lastIndex
    console.log("subPattern",subPattern,match)    
  }
  console.log('lastIndex',lastIndex,i)

  let diff = sourceLength-patternLength
  for(let j=patternLength-1;j>i;j--){
    if(source[diff+j]!==pattern[j]&&pattern[j]!=='?'){
      return false
    }
  }
  
  return true
}




const res = wildcard('abcdddefgdddabcdabc','abcd*de?g*ab*abc')

console.log('res',res)