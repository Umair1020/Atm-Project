const Amount = () => {
  let amount = document.getElementById("amount").value
  document.getElementById("result").innerHTML == ""
  let notes = [500, 100, 20, 10, 1]
  let a = 0;
  let noofnote = 0;
  let limit = 100000
  if (amount % 1 === 0) { 
      if (amount <= limit) {
        for (let i = 0; amount > 0; i++) {
          if (amount >= notes[a]) {
            amount = amount - notes[a]
            noofnote = noofnote + 1
            if (amount < notes[a]) {
              document.getElementById("result").innerHTML += '<div style="padding-top:10px"><strong>'
                + notes[a] + ' : </strong>' + noofnote + "</div><br>"
              a = a + 1
              noofnote = 0
            }
          } else {
            a = a + 1
          }
        }
      } else {
        alert("your cross the rane")
      }
  } else {
    alert("please put numbers multiple of 100")
  }
}