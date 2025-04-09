function showSection(sectionId) {
    // Ẩn tất cả các phần
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });

    // Hiển thị phần được chọn
    document.getElementById(sectionId).classList.remove('hidden');
}

function checkAnswer(questionId, correctAnswer) {
    const userAnswer = document.getElementById(questionId).value.trim();
    const resultElement = document.getElementById(`${questionId}-result`);

    if (Array.isArray(correctAnswer)) {
        correctAnswer = correctAnswer.join(',');
    }

    if (userAnswer === String(correctAnswer)) {
        resultElement.textContent = "Đúng!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Sai!";
        resultElement.style.color = "red";
    }
}
