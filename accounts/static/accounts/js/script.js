
document.addEventListener("DOMContentLoaded", function () {
    const passwordFields = document.querySelectorAll(
        'input[type="password"]'
    );

    passwordFields.forEach(function (field) {
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";

        field.parentNode.insertBefore(wrapper, field);
        wrapper.appendChild(field);

        const toggle = document.createElement("button");
        toggle.type = "button";
        toggle.textContent = "Show";
        toggle.style.position = "absolute";
        toggle.style.right = "10px";
        toggle.style.top = "50%";
        toggle.style.transform = "translateY(-50%)";
        toggle.style.border = "none";
        toggle.style.background = "transparent";
        toggle.style.cursor = "pointer";
        toggle.style.color = "#42b879";

        wrapper.appendChild(toggle);

        toggle.addEventListener("click", function () {
            const isPassword = field.type === "password";

            field.type = isPassword ? "text" : "password";
            toggle.textContent = isPassword ? "Hide" : "Show";
        });
    });
});
