
 let data = [ ];

 function addData() {
   const name = document.getElementById('name').value;
   const age = document.getElementById('age').value;
   const indexToEditInput = document.getElementById('indexToEdit');
   const indexToEdit = parseInt(indexToEditInput.value);
   
   if (name.trim() === '') {
    alert('Please enter a name.');
    return;
  }
   if (age.trim() === '') {
    alert('Please enter a age');
    return;
  }

  if (isNaN(indexToEdit)) {
    // Add data to the array
    data.push({ name, age });
  } else {
    // Update existing data
    data[indexToEdit].name = name;
    data[indexToEdit].age = age;
    indexToEditInput.value = ''; 
  }

   // Clear the form
   document.getElementById('createForm').reset();

   updateTable();
    // clearForm();
 }

 
 function deleteData(index) {
   // Remove data from the array
   data.splice(index, 1);
   updateTable();
 }

 function editItem(index) {
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');
  const indexToEditInput = document.getElementById('indexToEdit');

  nameInput.value = data[index].name;
  ageInput.value = data[index].age;
  indexToEditInput.value = index;
}


 function updateTable() {
   const tbody = document.querySelector('#dataTable tbody');

   // Clear the table body
   tbody.innerHTML = '';

   // call the table data for each elements
   data.forEach((item, index) => {
     const row = tbody.insertRow();
     const cell1 = row.insertCell(0);
     const cell2 = row.insertCell(1);
     const cell3 = row.insertCell(2);

     cell1.textContent = item.name;
     cell2.textContent = item.age;

     const deleteButton = document.createElement('button');
     deleteButton.textContent = 'Delete';
     deleteButton.onclick = () => deleteData(index);

     const editButton = document.createElement('button');
     editButton.textContent = 'Edit';
     editButton.onclick = () => editItem(index);

     cell3.appendChild(editButton);
     cell3.appendChild(deleteButton);
   });

  
  
 }
 