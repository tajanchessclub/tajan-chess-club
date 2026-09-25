window.onload = function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs
        .sendForm("service_1ofr208", "template_n6vl14z", this)
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message sent successfully!",
            toast: true,
            showConfirmButton: false,
            timer: 3000,
          });
          e.target.reset();
        })
        .catch((err) => {
          console.error("ERROR!", err);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Something went wrong, Please try again later!",
            toast: true,
            showConfirmButton: false,
            timer: 3000,
          });
        });
    });
};
