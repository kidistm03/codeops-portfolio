let bill="1000"
let partySize=20
let total
let tip
let per_person
console.log(Number(bill))
bill=Number(bill)
if (bill>300){
    tip=bill*0.1
}
else{
    tip=bill*0.05
}
total=bill+tip
per_person=total/partySize
console.log(`The total amount is ${total} so it will become ${per_person} per person because the party size is ${partySize}`)
