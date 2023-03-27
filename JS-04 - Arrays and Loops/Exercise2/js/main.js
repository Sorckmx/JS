console.log("**********BUCLE FOR ROW************");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  } //Ciclo for


  console.log("**********BUCLE WHILE ROW************");
  let i = 1;
while (i <= 5) {
  let j = 1;
  let row = "";
  while (j <= i) {
    row += "* ";
    j++;
  }
  console.log(row);
  i++;
} //Ciclo WHILE

console.log("**********BUCLE DO WHILE ROW************");
let i2 = 1;
do {
  let j2 = 1;
  let row = "";
  do {
    row += "* ";
    j2++;
  } while (j2 <= i2);
  console.log(row);
  i2++;
} while (i2 <= 5);
//CICLO DO WHILE