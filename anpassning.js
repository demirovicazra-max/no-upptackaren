document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".quiz-options button");
    const result = document.getElementById("quiz-result");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const correct = button.dataset.correct === "true";

            buttons.forEach(btn => {
                btn.disabled = true;
            });

            if (correct) {
                button.classList.add("correct");
                result.textContent =
                    "🎉 Rätt! En anpassning hjälper en organism att överleva.";
                result.className = "quiz-result success";

                localStorage.setItem("anpassningKlar", "true");
            } else {
                button.classList.add("wrong");
                result.textContent =
                    "❌ Inte riktigt. Försök igen.";
                result.className = "quiz-result error";
            }
        });
    });
});
