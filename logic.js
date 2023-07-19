document.getElementById("test_form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name_id").value;
    let email = document.getElementById("email_id").value;
    let feedback = document.getElementById("fb_id").value;

    data = {
        d_name: name,
        d_email: email,
        d_fb: feedback,
    }

  send_Data(data);
});

