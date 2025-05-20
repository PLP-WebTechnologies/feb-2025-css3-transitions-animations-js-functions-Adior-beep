<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>CSS Animations + localStorage Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: white;
      color: #333;
      transition: background-color 0.5s ease, color 0.5s ease;
    }
    body.dark {
      background-color: #121212;
      color: #eee;
    }
    .container {
      text-align: center;
      margin-top: 50px;
    }
    button {
      padding: 10px 20px;
      margin: 10px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }
    button:hover {
      background-color: #ddd;
    }
    .box {
      width: 150px;
      height: 150px;
      background-color: #4287f5;
      margin: 30px auto;
      border-radius: 10px;
      transition: transform 0.5s ease;
    }
    @keyframes shake {
      0% { transform: translateX(0); }
      20% { transform: translateX(-10px); }
      40% { transform: translateX(10px); }
      60% { transform: translateX(-10px); }
      80% { transform: translateX(10px); }
      100% { transform: translateX(0); }
    }
    .shake-animation {
      animation: shake 0.5s ease;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to Animation Demo</h1>
    <button id="animateBtn">Click Me to Animate</button>
    <div id="box" class="box"></div>
    <hr />
    <h2>Choose Theme:</h2>
    <button class="themeBtn" data-theme="light">Light Theme</button>
    <button class="themeBtn" data-theme="dark">Dark Theme</button>
  </div>
  <script>
    const animateBtn = document.getElementById('animateBtn');
    const box = document.getElementById('box');
    const themeButtons = document.querySelectorAll('.themeBtn');
    function triggerShake() {
      box.classList.add('shake-animation');
      box.addEventListener('animationend', () => {
        box.classList.remove('shake-animation');
      }, { once: true });
    }
    function setTheme(theme) {
      document.body.className = theme;
      localStorage.setItem('preferredTheme', theme);
    }
    function loadTheme() {
      const savedTheme = localStorage.getItem('preferredTheme');
      if (savedTheme) setTheme(savedTheme);
    }
    animateBtn.addEventListener('click', triggerShake);
    themeButtons.forEach(button => {
      button.addEventListener('click', () => {
        setTheme(button.getAttribute('data-theme'));
      });
    });
    loadTheme();
  </script>
</body>
</html>
