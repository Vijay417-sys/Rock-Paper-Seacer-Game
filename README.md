# Rock-Paper-Seacer-Game

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissors Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        code {
            background-color: #f4f4f4;
            padding: 2px 5px;
            border-radius: 3px;
        }
        img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 20px auto;
            border: 1px solid #ddd;
        }
        .toc {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <h1>Rock Paper Scissors Game</h1>
    
    <img src="Screenshot.png" alt="Game Screenshot">
    
    <p>A simple Rock Paper Scissors game where you can play against the computer.</p>
    
    <div class="toc">
        <h2>Table of Contents</h2>
        <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#installation">Installation</a></li>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#game-rules">Game Rules</a></li>
            <li><a href="#technologies-used">Technologies Used</a></li>
            <li><a href="#code-examples">Code Examples</a></li>
            <li><a href="#contributing">Contributing</a></li>
            <li><a href="#license">License</a></li>
        </ul>
    </div>
    
    <h2 id="features">Features</h2>
    <ul>
        <li>Play against computer with random moves</li>
        <li>Score tracking</li>
        <li>Simple and intuitive interface</li>
        <li>Cross-platform compatibility</li>
    </ul>
    
    <h2 id="installation">Installation</h2>
    
    <h3>Python Version</h3>
    <pre><code># Clone the repository
git clone https://github.com/your-username/rock-paper-scissors.git

# Navigate to project directory
cd rock-paper-scissors

# Run the game
python rock_paper_scissors.py</code></pre>
    
    <h3>JavaScript Version</h3>
    <pre><code># Clone the repository
git clone https://github.com/your-username/rock-paper-scissors.git

# Navigate to project directory
cd rock-paper-scissors

# Install dependencies (if any)
npm install

# Run the game
node game.js</code></pre>
    
    <h2 id="usage">Usage</h2>
    <ol>
        <li>Launch the game</li>
        <li>Choose your move (Rock/Paper/Scissors)</li>
        <li>Computer makes a random move</li>
        <li>See who wins</li>
        <li>Scores are updated automatically</li>
    </ol>
    
    <h2 id="game-rules">Game Rules</h2>
    <ul>
        <li>Rock beats Scissors</li>
        <li>Scissors beats Paper</li>
        <li>Paper beats Rock</li>
        <li>Same choice results in a tie</li>
    </ul>
    
    <h2 id="technologies-used">Technologies Used</h2>
    <ul>
        <li>Python 3.x (or JavaScript/Node.js if applicable)</li>
        <li>Random module (for computer moves)</li>
        <li>Basic I/O operations</li>
    </ul>
    
    <h2 id="code-examples">Code Examples</h2>
    
    <h3>Python Implementation</h3>
    <pre><code>import random

def determine_winner(player, computer):
    if player == computer:
        return "tie"
    elif (player == "rock" and computer == "scissors") or \
         (player == "scissors" and computer == "paper") or \
         (player == "paper" and computer == "rock"):
        return "player"
    else:
        return "computer"</code></pre>
    
    <h3>JavaScript Implementation</h3>
    <pre><code>function determineWinner(player, computer) {
    if (player === computer) return "tie";
    if ((player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")) {
        return "player";
    }
    return "computer";
}</code></pre>
    
    <h2 id="contributing">Contributing</h2>
    <p>Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.</p>
    
    <h2 id="license">License</h2>
    <p><a href="https://choosealicense.com/licenses/mit/">MIT</a></p>
</body>
</html>

