
            document.getElementById('userForm').addEventListener('submit', function(event) {
                event.preventDefault();
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const location = document.getElementById('location').value;
                const gender = document.querySelector('input[name="gender"]:checked').value;

            const newRow = document.createElement('tr');
            newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${location}</td><td>${gender}</td>`;
            
            const resultTable = document.getElementById('resultTable').getElementsByTagName('tbody')[0];
            resultTable.appendChild(newRow);
        });

        document.getElementById('color').addEventListener('input', function() {
            const selectedColor = this.value;
            const resultTable = document.getElementById('resultTable');
            resultTable.style.backgroundColor = selectedColor;
        });
        
        document.getElementById('width').addEventListener('input', function() {
            const selectedWidth = this.value + 'px';
            const resultTable = document.getElementById('resultTable');
            resultTable.style.width = selectedWidth;
        });
