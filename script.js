export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement === "e" || currentElement === "E") {

    }
    else {
    result.push(currentElement)
    }
  }
  return result.join("")
}
export function aufgabe02 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i]
    currentElement = currentElement.toUpperCase()
    result.push(currentElement) 
  }
  return result.join("")
}
export function aufgabe03 (args) {
  const input = args
  const result = []

  let countE = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement === "e" || currentElement === "E") {
      countE++
    }
  }
  return countE
}
export function aufgabe04 (args) {
  let input = args
  const result = []

  let countW = 1

  input = input.replace(/\s\s+/g, ' ')

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
    countW++
    }
  }
  return countW
}
export function aufgabe05(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if ( 91 > currentElement.charCodeAt(0) && currentElement.charCodeAt(0) > 64) {
      return true
    } else {
      
    }
  }
  return false
}
export function aufgabe06(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (48 <= ascii && ascii<= 56) {
      
    } else if (65 <= ascii && ascii<= 90) {
      
    } else if (97 <= ascii && ascii<= 122) {
      
    } else if (32 === ascii) {
      
    } else {
      return true
    }
  }
  return false
}
export function aufgabe07(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement.toLowerCase() ==="u") {
      if (input[i+1]==="n") {
        if (input[i+2]==="d") {
      return true
        }
      }
    }
  }
  
  return false

}
export function aufgabe08(args) {
  const input = args        
  const result = []                     
 
  for (let i = 0; i < input.length; i++) {      
    const currentElement = input[i]        
 
    if (currentElement === "e") {   
      result.push(3)                                                           
    } else {                                                 
      result.push(currentElement)                             
    }
  }
  return result.join("")                                        
}

export function aufgabe09 (args) {
  const input = args
  
  if(input.length === 6) return true
  if(input.length <= 6 || 6 <= input.length) return false
 
}
 
export function aufgabe10 (args) {
  const input = args
  
  if(input.length !== 7) return false
  if(input[0] !== "#") return false
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
 
    if(48 <= ascii && ascii <=57) {
      //Ist eine Ziffer
    } else if (65 <= ascii && ascii <= 70) {
      //Ist A-F
    } else {
      return false
    }
  }
 
  return true
}

export function aufgabe11 (args) {
  const input = args
  
  if(input.length !== 1) return null
  return input[0].charCodeAt(0)
}

export function aufgabe12 (args) {
  const input = args
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
 
    if (currentElement == "e") {
      return i
    }
  }
  return -1
}
 
export function aufgabe13 (args) {
  const input = args
  let latestE = -1
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
 
    if (currentElement == "e") {
      latestE = i
    }
  }
  return latestE
 
}
 
export function aufgabe14 (args) {
  const input = args
  let count = 0
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement == "e") {
      count++
   if (count=== 3) {
    return i
   } }
  }
  if (count == input.length) return(2)
  else return(-1)
}

export function aufgabe15 (args) {
  const input = args
  const result = []
 
  if (input.lastIndexOf(' ') == input.length - 1) {
      for (let i = 0; i < input.length - 1; i++) {
        const currentElement = input[i]
        result.push(currentElement)
      }
  } else {
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
  
      if (currentElement !== " ") {
        result.push(currentElement)
      } else {
        return result.join("")
      }
    }
 
  }
 
  return result.join("")
}
 
 