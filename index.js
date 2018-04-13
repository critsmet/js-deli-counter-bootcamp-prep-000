var katzDeli = [];
  
function takeANumber(katzDeliLine, newPerson) {
    katzDeliLine.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + katzDeliLine.length + " in line."
  }
  
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0 ) {
    return "Currently serving " + katzDeliLine.shift() + "."
  }
  else {   
  return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
<<<<<<< HEAD
  var currently = "The line is currently:"
  var list = " "
  if (katzDeliLine.length === 0) {
  return "The line is currently empty."
  }
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
    list += (i+1) + ". " + katzDeliLine[i] + ", "
  }
  return currently + list.substring(0, list.length - 2)
}
=======
  var currently = "The line is currently: "
  for (var i = 0; i < katzDeliLine.length; i++) {
    currently += (i+1) + ". " + katzDeliLine[i] + ", "
  }
  return currently.substring(0, currently.length - 2)
  
  if (katzDeliLine.length === 0)
  return "The line is currently empty."
>>>>>>> edaa02dcc58dac731dd8fcc1f685d6689830c833
}