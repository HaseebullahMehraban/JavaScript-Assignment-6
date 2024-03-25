        // Step 1: Generate a random number
        function generateRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const minNumber = 1;
        const maxNumber = 100;
        let targetNumber = generateRandomNumber(minNumber, maxNumber);

        // Step 2: Create the HTML structure
        const guessInput = document.getElementById('guessInput');
        const submitBtn = document.getElementById('submitBtn');
        const message = document.getElementById('message');

        // Step 3: Get user input
        submitBtn.addEventListener('click', function() {
            const userGuess = parseInt(guessInput.value);

            // Step 4: note: not confident enough what to get in targeted number Check the guess
            if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
                message.textContent = 'Please enter a valid number between 1 and 100.';
            } else if (userGuess === targetNumber) {
                message.textContent = 'Congratulations! You guessed the correct number.';
                endGame();
            } else if (userGuess < targetNumber) {
                message.textContent = 'Too low. Try a higher number.';
            } else if (userGuess > targetNumber) {
                message.textContent = 'Too high. Try a lower number.';
            }

            guessInput.value = '';
            guessInput.focus();
        });

        // Step 5: Repeat the process
        function endGame() {
            submitBtn.disabled = true;
            guessInput.disabled = true;
            const playAgain = confirm('Do you want to play again?');
            if (playAgain) {
                targetNumber = generateRandomNumber(minNumber, maxNumber);
                message.textContent = '';
                submitBtn.disabled = false;
                guessInput.disabled = false;
            }
        }