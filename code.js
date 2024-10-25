

function createAccountClicked()
{
    const form = document.getElementById("sign-form");
    let isValid = true;

    form.querySelectorAll("input","textarea").forEach((input) => {
        if (input.value.trim() === ""){
            input.classList.add("border: 1px solid #c00");
            isValid = false;
        }
        else{
            input.classList.remove(" border: 1px solid #c00");
        }

    });
}