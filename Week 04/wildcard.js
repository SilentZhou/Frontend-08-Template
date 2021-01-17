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
      for(let i = 0;i<patternLength;i++){
        if(source[i]!==pattern[i]&&pattern[i]!=='?'){
          return false
        }
      }
      return true


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
    let reg = new RegExp(subPattern.replace('?','[\\s\\S]'),'g')
    reg.lastIndex=lastIndex
    let match = reg.exec(source)
    if(!match){
      return false
    }
    lastIndex = reg.lastIndex
  }

  let diff = sourceLength-patternLength
  for(let j=patternLength-1;j>i;j--){
    if(source[diff+j]!==pattern[j]&&pattern[j]!=='?'){
      return false
    }
  }
  
  return true
}




const res1 = wildcard('abcde','abcd?')
const res2 = wildcard('abcde','abcd?e')
const res3 = wildcard('abcdddefgdddabcdabc','abcd*de?g*ab*abc')

console.log('res1',res1)
console.log('res2',res2)
console.log('res3',res3)

