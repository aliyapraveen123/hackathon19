function checkPassword() {
    const input = document.getElementById("password").value.trim();
  
    if (input === "12345") {
      alert(" Door Opened!");
      window.location.href = "puzzle2.html";
    } else {
      alert(" Wrong password. Try again!");
    }
  }





const riddles = [
    { question: "Q.1  What's 3 * 7 + 1?", answer: "22" },
    { question: "Q.2  What's the square root of 144?", answer: "12" },
    { question: "Q.3  What is 10 + (6 * 2)?", answer: "22" },
    { question: "Q.4  What's 100 divided by 4?", answer: "25" },
    { question: "Q.5  What is 5² ?", answer: "25" }
  ];
  
  let index = 0; 
  
  
  function startRiddle() {
    document.getElementById("quiz-box").style.display = "block"; 
    document.getElementById("startBtn").style.display = "none"; 
    showRiddle(); 
  }
  
  
  function showRiddle() {
    const current = riddles[index];
    document.getElementById("question").textContent = current.question;
    document.getElementById("answer").focus().value = ""; 
  }
  
  
  function submitAnswer() {
    const input = document.getElementById("answer").value.trim();
    const correctAnswer = riddles[index].answer;
  
    if (input === correctAnswer) {
      index++; 
  
      if (index < riddles.length) {
        showRiddle();
      } else {
        alert("All riddles solved!");
        window.location.href = "puzzle3.html"; 
      }
    } else {
      alert("Wrong answer. Try again!");
    }
  }
  
