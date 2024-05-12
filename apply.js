 // Get the form element by ID
 let tacForm = document.getElementById('tac-form');

 // Add a submit event listener to the form element
 tacForm.addEventListener('submit', function(event) {
   event.preventDefault();

   // Get the values of the form fields
   let projectCategory = document.getElementById('project-category').value;
   let hardwareSkillsSet = document.getElementById('hardware-skills-set').value;
   let softwareSkillsSet = document.getElementById('software-skills-set').value;
   let projectTitle = document.getElementById('project-title').value;
   let noOfStudents = document.getElementById('no-of-students').value;
   let listOfComponents = document.getElementById('list-of-components').value;
   let componentsAttachmentFile = document.getElementById('components-attachment-file').files[0];
   let initialProjectDescriptionFile = document.getElementById('initial-project-description-file').files[0];
   let currentDate = document.getElementById('current-date').value;

   // Check if all fields are filled
   if (
     projectCategory &&
     (hardwareSkillsSet || softwareSkillsSet) &&
     projectTitle &&
     noOfStudents &&
     listOfComponents &&
     componentsAttachmentFile &&
     initialProjectDescriptionFile &&
     currentDate
   ) {
     // Display a success message
     alert('Successfully submitted!');
   } else {
     // Display an error message
     alert('Please fill all the fields.');
   }
 });

 // Add a change event listener to the project category select element
 document.getElementById('project-category').addEventListener('change', function() {
   // Show or hide the skill set input field based on the project category
   if (this.value === 'hardware') {
     document.getElementById('hardware-skills').style.display = 'block';
     document.getElementById('software-skills').style.display = 'none';
   } else if (this.value === 'software') {
     document.getElementById('hardware-skills').style.display = 'none';
     document.getElementById('software-skills').style.display = 'block';
   }
 });

 // Add a change event listener to the number of students input field
 document.getElementById('no-of-students').addEventListener('change', function() {
   // Show or hide the student details div based on the number of students
   let studentDetailsDiv = document.getElementById('student-details');
   if (this.value > 0) {
     studentDetailsDiv.style.display = 'block';
   } else {
     studentDetailsDiv.style.display = 'none';
   }

   // Remove any existing student details divs
   while (studentDetailsDiv.firstChild) {
     studentDetailsDiv.removeChild(studentDetailsDiv.firstChild);
   }

   // Add new student details divs based on the number of students
   for (let i = 1; i <= this.value; i++) {
     let studentDiv = document.createElement('div');
     studentDiv.id = `student-${i}`;

     let studentNameLabel = document.createElement('label');
     studentNameLabel.for = `student-${i}-name`;
     studentNameLabel.textContent = `Student ${i} Name:`;
     studentDiv.appendChild(studentNameLabel);

     let studentNameInput = document.createElement('input');
     studentNameInput.type = 'text';
     studentNameInput.id = `student-${i}-name`;
     studentNameInput.name = `student-${i}-name`;
     studentDiv.appendChild(studentNameInput);

     let studentRollNoLabel = document.createElement('label');
     studentRollNoLabel.for = `student-${i}-roll-no`;
     studentRollNoLabel.textContent = `Student ${i} Roll No:`;
     studentDiv.appendChild(studentRollNoLabel);

     let studentRollNoInput = document.createElement('input');
     studentRollNoInput.type = 'text';
     studentRollNoInput.id = `student-${i}-roll-no`;
     studentRollNoInput.name = `student-${i}-roll-no`;
     studentDiv.appendChild(studentRollNoInput);

     let studentSkillsLabel = document.createElement('label');
     studentSkillsLabel.for = `student-${i}-skills`;
     studentSkillsLabel.textContent = `Student ${i} Skills:`;
     studentDiv.appendChild(studentSkillsLabel);

     let studentSkillsSelect = document.createElement('select');
     studentSkillsSelect.id = `student-${i}-skills`;
     studentSkillsSelect.name = `student-${i}-skills`;

     let skill1Option = document.createElement('option');
     skill1Option.value = 'requirment gathering';
     skill1Option.textContent = 'requirment gathering';
     studentSkillsSelect.appendChild(skill1Option);

     let skill2Option = document.createElement('option');
     skill2Option.value = 'critical-thinking';
     skill2Option.textContent = 'critical-thinking';
     studentSkillsSelect.appendChild(skill2Option);

     let skill3Option = document.createElement('option');
     skill3Option.value = 'project-design';
     skill3Option.textContent = 'project-design';
     studentSkillsSelect.appendChild(skill3Option);

     let skill4Option = document.createElement('option');
     skill4Option.value = 'problem-solving';
     skill4Option.textContent = 'problem-solving';
     studentSkillsSelect.appendChild(skill4Option);

     studentDiv.appendChild(studentSkillsSelect);

     studentDetailsDiv.appendChild(studentDiv);
   }
 });

 // Add a change event listener to the list of components select element
 document.getElementById('list-of-components').addEventListener('change', function() {
   // Show or hide the components attachment input field based on the list of components
   if (this.value === 'yes') {
     document.getElementById('components-attachment').style.display = 'block';
   } else {
     document.getElementById('components-attachment').style.display = 'none';
   }
   function logout() {
    // Redirect to student.html
    window.location.href = "student.html";
}
 });
