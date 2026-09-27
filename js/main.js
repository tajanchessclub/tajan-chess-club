emailjs.init({
  publicKey: "kc3PS9fe6vJyU68pq",
});

document.addEventListener("DOMContentLoaded", function () {
  // navbar collapse issue handling
  const navbarCollapse = document.getElementById("navbarSupportedContent");
  const navLinks = navbarCollapse.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse =
          bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });

  //   contact form handling
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (e) {
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
});
