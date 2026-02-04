document.addEventListener("DOMContentLoaded", function () {
    function copyToClipboard(link) {
        navigator.clipboard.writeText(link).then(() => {
            // alert("Copied: " + link);
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    }

    document.getElementById("btn1").addEventListener("click", () => copyToClipboard("https://github.com/..."));
    document.getElementById("btn2").addEventListener("click", () => copyToClipboard("https://www.linkedin.com/in/.../"));
    document.getElementById("btn3").addEventListener("click", () => copyToClipboard("ur email"));
});
