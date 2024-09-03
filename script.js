function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
    if (
        input.startsWith('pet_') &&
        !isNaN(input.slice(4, 8)) &&
        input.slice(4, 8).length === 4 &&
        input.slice(8).length > 0 &&
        /^[A-Za-z]+$/.test(input.slice(8)) 
    ) {
            result = "Valid Syntax 🟢"
      } else {
            result = "Invalid Syntax 🔴"
         }
            document.getElementById('result').innerText = result;
    }


