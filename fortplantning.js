```javascript
document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".quiz-options button");
    const result = document.getElementById("quiz-result");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            buttons.forEach(function (btn) {
                btn.disabled = true;
            });

            if (button.dataset.correct === "true") {

                button.classList.add("correct");

                result.textContent =
                    "🎉 Rätt svar! Du har förstått vad fortplantning betyder.";

                result.classList.add("success");

                localStorage.setItem("fortplantningKlar", "true");

            } else {

                button.classList.add("wrong");

                result.textContent =
                    "❌ Inte riktigt. Försök igen!";

                result.classList.add("error");

            }

        });

    });

});
```
