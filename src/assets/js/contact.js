function submitData() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-phone").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;

    if (name === "") {
        return alert("Name Required!");
    } else if (email === "") {
        return alert("Email Required!");
    } else if (phone === "") {
        return alert("Phone Required!");
    } else if (subject === "") {
        return alert("Subject Required!");
    } else if (message === "") {
        return alert("Message Required!");
    }

    let emailReceiver = "aryabagus453@gmail.com";

    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Halo, nama saya ${name}, ${message}. Silahkan kontak saya dinomor ${phone}, Terima kasih.`)}`;
    
    a.click();  // Trigger the mailto link to open the email client

    console.log(name, email, phone, subject, message);
}
