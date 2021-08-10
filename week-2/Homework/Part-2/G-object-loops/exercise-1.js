// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
    tom: 20,
    george: 17,
    abdul: 19,
  };

  Object.entries(studentGrades).forEach(student => {
    let [ name, grade ] = student
    if (grade > 18) 
    console.log(name.toUpperCase() + " - " + grade)
  })
  // Object.keys(studentGrades).forEach((name) => {
  //   let grade = studentGrades[name]
  //   if (grade > 18)
  //   console.log(name.toUpperCase() + "-" + grade)
  // })


  // Prints
  // TOM - 20
  // ABDUL - 19