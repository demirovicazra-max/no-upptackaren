```javascript
document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".quiz-options button");
    const result = document.getElementById("quiz-result");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const isCorrect = button.dataset.correct === "true";

            buttons.forEach(function (btn) {
                btn.disabled = true;
            });

            if (isCorrect) {

                button.classList.add("correct");

                result.textContent =
                    "🎉 Rätt! Fortplantning betyder att levande organismer får nya individer.";

                result.classList.add("success");

            } else {

                button.classList.add("wrong");

                result.textContent =
                    "❌ Inte riktigt. Försök igen.";

                result.classList.add("error");
            }

        });

    });

});
```

