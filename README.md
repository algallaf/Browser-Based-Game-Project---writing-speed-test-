# Browser-Based-Game-Project---writing-speed-test-
Writing Speed Test Game
This is a small game to practice your typing speed and accuracy.  
The idea: a sentence appears, you try to type it fast and correct, and see how many words per minute (WPM) you can type.

<img width="1917" height="962" alt="project 1" src="https://github.com/user-attachments/assets/fe86725d-9e95-42ec-844e-4c6a9d47bd92" />

Try the game :
https://algallaf.github.io/Browser-Based-Game-Project---writing-speed-test-/

Game Features:
Shows correct letters in green, wrong letters in red.
3 difficulty levels: Easy, Medium, Hard.
Counts time and words per minute (WPM).
Saves your best score.
Simple and clear design.

Technology Used :
HTML: for the page.
CSS: for style.
JavaScript: for game logic.

resourses :
CSS ideas and examples from W3Schools css
https://www.w3schools.com/css/

Future Ideas :

Add a race mode with another player.
Add more sentences and difficulties.
Dark Mode.
Add sounds and simple animations.

Pseudocode for Gameplay:

1. When the game starts:
   a. Display a random sentence from a predefined list.
   b. Start a timer when the player begins typing.

2. While the player types:
   a. Track each key press.
   b. Compare typed text to the target sentence in real-time.
   c. Highlight correct letters in green, incorrect letters in red.

3. When the player finishes typing:
   a. Stop the timer.
   b. Calculate:
      - Time taken
      - Words per minute (WPM) = (number of words / time in minutes)
   c. Display results to the player.

4. Allow the player to:
   a. Play again (load new random sentence).
   b. View their best score from the current session.

5. Add difficulty modes:
   - Easy: short sentences
   - Medium: medium sentences
   - Hard: long sentences with punctuation
