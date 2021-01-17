function kmp(source,pattern){
  let table = new Array(pattern.length).fill(0)
  {
    let i=1,j=0;
    while(i<pattern.length){
      if(pattern[i]===pattern[j]){
        ++i;
        ++j;
        table[i] = j
      }else{
        if(j>0){
          j = table[j]
        }else{
          i++
        } 

      }
    }
  }
  console.log("table",table)

  {
    let i=0,j=0;
    while(i<source.length){
  
      if(source[i]===pattern[j]){
        ++i;
        ++j;
      }else{
        if(j>0){
          j = table[j]
        }else{
          i++
        }
      }
      if(j ===pattern.length){
        return true
      }
    }
    return false
  }

}

const res1=kmp('qqqqaabaaacdddd','aabaaac')
const res2 = kmp('aabaaac','aabaaac')
const res3=kmp('qqqqaabaaacdddd','aabdaaac')


console.log('res1',res1)
console.log('res2',res2)
console.log('res3',res3)

