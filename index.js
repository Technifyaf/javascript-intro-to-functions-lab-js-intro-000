function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  switch (string) {
    case "I love you, Grandma" : return "I love you, too"
    case string === shout(string): return "YES INDEED!"
    case string === whisper(string): return "I can't hear you!"
    default:return

  }
  }
