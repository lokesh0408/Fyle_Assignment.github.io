document.addEventListener("DOMContentLoaded", function () {
  var contactBtn = document.getElementById("contactBtn");
  var contactModal = new bootstrap.Modal(
    document.getElementById("contactModal")
  );

  contactBtn.addEventListener("click", function () {
    contactModal.show();
  });
});

// contact us modal
$(document).ready(function () {
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();

    var form = $(this);
    var formData = form.serialize();

    $.ajax({
      url: form.attr("action"),
      method: form.attr("method"),
      data: formData,
      success: function (response) {
        alert("Form submitted successfully!");
        form[0].reset();
      },
      error: function (error) {
        alert("There was an error submitting the form. Please try again.");
      },
    });
  });
});

// what we do section
$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: false,
    appendDots: $(".slider-dots"),
    customPaging: function (slider, i) {
      return '<span class="dot"></span>';
    },
  });

  $(".slider").on("afterChange", function (event, slick, currentSlide) {
    var activeIndex =
      (currentSlide / slick.options.slidesToScroll) % slick.slideCount;
    $(".slider-dots .dot").removeClass("active");
    $(".slider-dots .dot").eq(activeIndex).addClass("active");
  });
  $(".slider-dots .dot").eq(0).addClass("active");
});

// hover over image
document.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".slide");

  slides.forEach(function (slide) {
    slide.addEventListener("mouseover", function () {
      var hoverContent = this.querySelector(".hover-content");
      hoverContent.style.display = "flex";
    });

    slide.addEventListener("mouseout", function () {
      var hoverContent = this.querySelector(".hover-content");
      hoverContent.style.display = "none";
    });
  });
});

// our project section
document.addEventListener("DOMContentLoaded", function () {
  var projectImage = document.getElementById("project-image");
  var contentBoxes = document.querySelectorAll(".content-box");

  contentBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
      var imageSrc = this.dataset.image;
      projectImage.src = imageSrc;
    });
  });
});
