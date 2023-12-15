// löscht alle e aus dem Text
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
//gibt im Text den Grossbuchstaben an
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
// gibt an wie viele e sich im Text befinden
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
// Zählt die Anzahl von Wörter im Text
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
 //testet ob es ein Grossbuchstabe gibt
export function aufgabe05(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //ist ein Buchstabe
    if ( 91 > currentElement.charCodeAt(0) && currentElement.charCodeAt(0) > 64) {
      return true
    } else {
      
    }
  }
  return false
}
 //testet ob ein Sonderzeichen steht
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
//gibt mir den ascii wert von currentelement
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
 //macht aus e ein s
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
// testet ob die Eingabe gneaz sechs Zeichen lang ist 
export function aufgabe09 (args) {
  const input = args
  
  if(input.length === 6) return true
  if(input.length <= 6 || 6 <= input.length) return false
 
}
 // testet ob die Funktion ein korrekter Hexcode ist
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
  //sucht nach der Position des aller ersten e
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
// es sucht nach dem letzten e in der Reihenfolge
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
 //die Position des dritten e wird bestimmt
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
//es sucht nach dem ersten leerzeichen
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
  //trennt es in zwei listen die erste endet wenn dieses Zeichen kommt$
export function aufgabe16 (args) {
  const input = args
  const result1 = []
  const result2 = []
  let readText = true
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === "$" && readText !== false) {
      readText = false
    } else {
      if (readText === true) {
        result1.push(currentElement)
      }
      else if (readText === false) {
        result2.push(currentElement)
      }
    }
  }
  if (result2.join("") !== "") {
  return result1.join("") + "," + result2.join("")
  } else {
    return result1.join("")
  }
}

export function aufgabe17 (args) {
  const text = args
  const phrases = []
  let currentPhrase = []
  for (let i = 0; i < text.length; i++) {
    const currentElement = text[i]
    if (currentElement === ',') {
      phrases.push(currentPhrase.join(""))//Wir speichern den aktuellen Satz als eine Element in phrases
      currentPhrase = []  // Damit löschen wir alles was im aktuellen Satz drin war.
    } else {
      // Wenn wir keinen ',' lesen, dann möchten wir die Zeichen an den aktuellen Satz anhängen.
      currentPhrase.push(currentElement)
    }
  }
  phrases.push(currentPhrase.join(""))
  return phrases
}

export function aufgabe18 (args) {
  const input = args
  const inputName = []
  const inputAge = []
  let readText = true
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === " " && readText !== false) {
      readText = false
    } else {
      if (readText === true) {
        inputName.push(currentElement)
      }
      else if (readText === false) {
        inputAge.push(currentElement)
      }
    }
  }
  if (inputName.join("") !== "" && inputAge.join("") !== "") return "Sie heissen " + inputName.join("") + " und sind " + inputAge.join("") + " Jahre alt"
  if (inputName.join("") == "" && inputAge.join("") !== "") return "Sie heissen" + inputName.join("") + " und sind " + inputAge.join("") + " Jahre alt"
  if (inputName.join("") !== "" && inputAge.join("") == "") return "Sie heissen " + inputName.join("") + " und sind " + inputAge.join("") + "Jahre alt"
  if (inputName.join("") == "" && inputAge.join("") == "") return "Sie heissen" + inputName.join("") + " und sind " + inputAge.join("") + "Jahre alt"
}

export function aufgabe19 (args) {
  const input = args
  const result = []
  
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  result.push(currentElement)
  result.push(currentElement)
}
 
  return result.join("")
}

export function aufgabe20(args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement == "." && input[i+1] !== " ") return false
    else if(currentElement == "." && input[i+1] == " ") return true
  }
 
  return result.join("") 
}

export function bubbleSort (args) {

const text = args
const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
for (let i = 0; i < list.length - 1; i++) {
  const currentElement = list[i]
  const nextElement = list[i + 1]
  if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
    const tmp = list[i + 1]
    list[i + 1] = list[i]
    list[i] = tmp
    i = -1 // starte von vorne wenn etwas vertauscht wurde.
  }
}
const result = list.join("")
return result
}
