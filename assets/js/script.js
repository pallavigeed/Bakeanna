$(".rs_ham_btn").click(function () {
  $(".rs_backdrop").fadeToggle();
  $(this).toggleClass("active");
  $(this).children("img").toggle();
  $(".rs_main_menu_outer").toggleClass("active");
  $("body").toggleClass("no-scroll");
});

$(".rs_backdrop").click(function () {

  $(this).fadeToggle();
  $(".rs_ham_btn").children("img").toggle();
  $(".rs_main_menu_outer").toggleClass("active");
  $("body").toggleClass("no-scroll");

});

var _step = 1;
$('#est_frm input').bind('keyup blur click', function () {
  
  if (_step == 1) {
      toggle_step1_button();
  } else if (_step == 2) {
      toggle_step2_button();
  }
});

$('#est_frm select').bind('change', function () {
  if (_step == 1) {
      toggle_step1_button();
  } else if (_step == 2) {
      toggle_step2_button();
  }

});


// contact form validation
$('#contact_frm input').bind('keyup blur click', function () {

  if (validate_contact_form()) {
      $('.rs_contact_btn').attr('disabled', false);
  } else {
      $('.rs_contact_btn').attr('disabled', true);
  }

});


$('#contact_frm textarea').bind('keyup blur click', function () {

  if (validate_contact_form()) {
      $('.rs_contact_btn').attr('disabled', false);
  } else {
      $('.rs_contact_btn').attr('disabled', true);
  }

});

// initialize 

toggle_step1_button();

function toggle_step1_button() {
  
  if (validate_step1()) {
      $('.rs_step_btn').attr('disabled', false);
  } else {
      $('.rs_step_btn').attr('disabled', true);
  }

}



function toggle_step2_button() {

  if (validate_step2()) {
      $('.cal-estimate').attr('disabled', false);
  } else {
      $('.cal-estimate').attr('disabled', true);
  }

}

function validate_step1() {

  var _title = $('#title').val();
  if (_title === null || _title === '') {
      return false;
  }

  var _planid = $("input[name='planid']:checked").val()

  if (_planid === undefined) {
      return false;
  }


  var _position = $("input[name='position']:checked").val()

  if (_position === undefined) {
      return false;
  }


  var _timeline = $('#timeline').val()
  if (_timeline === null || _timeline === '') {
      return false;
  }


  var _location = $("input[name='location']:checked").val()
  if (_location === undefined) {
      return false;
  }

  return true;

}

function validate_step2() {

  var _positiontype = $("input[name='job_type']:checked").val()
  if (_positiontype === undefined) {
      return false;
  }


  var _emp_type = $("input[name='emp_type']:checked").val()

  if (_emp_type === undefined) {
      return false;
  }


  var _exp_level = $('#experience_level').val()

  if (_exp_level === null || _exp_level === '') {
      return false;
  }


  var _hires = $('#hires').val()

  if (_hires === null || _hires === '') {
      return false;
  }

  return true;

}
function validate_contact_form() {

  var _name = $("input[name='SenderName']").val()
  if (_name === undefined || _name === '') {
      return false;
  }

  var _email = $("input[name='EmailAddress']").val()
  if (_email === undefined || _email === '') {
      return false;
  }

  var _phone = $("input[name='PhoneNumber']").val()
  if (_phone === undefined || _phone === '') {
      return false;
  }

  var _subject = $("input[name='Subject']").val()
  if (_subject === undefined || _subject === '') {
      return false;
  }

  var _body = $("textarea[name='Body']").val()
  if (_body === undefined || _body === '') {
      return false;
  }

  return true;
}



$(".rs_calculator_form .rs_form_action .rs_step_btn").click(function () {

  const goToStep = $(this).data("step");
  if (goToStep === 'stepOne') {
      _step = 1;
      toggle_step1_button();
  }
  
  else if (goToStep === 'stepTwo') {
      _step = 2;
      toggle_step2_button();
      window.scrollTo(0, 0);
  }

  $(this).parents(".rs_ec_form_step").hide();
  $(`#${goToStep}`).show();
  $(`.${goToStep}`).addClass("active").next().removeClass("active");
  $(".rs_estimate_title").show();
  $(".rs_result_title").hide();

  if (goToStep === "stepThree") {
      $(".rs_calculator_box").addClass("rs_full_width");
  } else {
      $(".rs_calculator_box").removeClass("rs_full_width");
  }
});


$(".rs_calculator_form .rs_form_action .rs_calculator_btn").click(function () {
  $(".rs_estimate_title, .rs_estimate_details_table").hide();
  $(".rs_result_title, .rs_estimate_details").show();
});

$(".showDetailsEstimate").click(function () {

  if ($(this).hasClass("opened")) {
      $(this)
          .removeClass("opened")
          .children("span")
          .text("Show Estimate Details");
      $(".rs_estimate_details_table").hide();

  } else {
      $(this).addClass("opened").children("span").text("Hide Estimate Details");
      $(".rs_estimate_details_table").show();
  }
});

$(document).ready(function () {
  $("select:not(.rs_form_control)").niceSelect();
  FastClick.attach(document.body);
});

$(".rs_marquee_slider").slick({
  autoplay: true,
  autoplaySpeed: 0,
  speed: 10000,
  arrows: false,
  swipe: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1,
  variableWidth: true,
  cssEase: "linear",
  pauseOnFocus: false,
  pauseOnHover: false,
});

$(".rs_cookies_box .btn").click(function () {
  $(this).parents(".rs_cookies_bar").fadeOut();
});

$(".rs_password_view").click(function () {
  $(this).prev("input").attr("type", "text");
});

if ($(".rs_menu_dropdown_btn").hasClass("open")) {
  $(document).click(function () {
      $(".rs_menu_dropdown_btn").removeClass("open");
      $(".rs_menu_dropdown_btn").next(".rs_menu_dropdown").hide();
  });
}


$(document).on("click", function (e) {
  if ($(e.target).is(".rs_menu_dropdown_btn") === false) {
      $(".rs_menu_dropdown_btn").removeClass("open");
      $(".rs_menu_dropdown_btn").next(".rs_menu_dropdown").hide();
  } else {
      if ($(e.target).hasClass("open")) {
          $(e.target).removeClass("open");
          $(e.target).next(".rs_menu_dropdown").hide();
      } else {
          $(e.target).addClass("open");
          $(e.target).next(".rs_menu_dropdown").show();
      }
  }
});

$(".cookie_consent_btn").click(function () {
  acceptCookieConsent();
});

// Create cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
  const d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

// Set cookie consent
function acceptCookieConsent() {
  deleteCookie("user_cookie_consent");
  setCookie("user_cookie_consent", 1, 30);
  document.getElementById("cookieNotice").style.display = "none";
}

verifyConsent();
function verifyConsent() {
  let cookie_consent = getCookie("user_cookie_consent");
  if (cookie_consent != "") {
      document.getElementById("cookieNotice").style.display = "none";
  } else {
      document.getElementById("cookieNotice").style.display = "block";
  }

  let banner_consent = getCookie("user_banner_consent");
  if (banner_consent != "") {
      document.getElementById("banner_const").style.display = "none";
  } else {
      document.getElementById("banner_const").style.display = "block";
  }
}

$(".rs_top_bar_close").click(function () {
  setCookie("user_banner_consent", 1, 30);
  $(this).parents(".rs_top_bar").slideUp();
  
});
