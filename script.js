$(document).ready(function () {
  $("#grade-form").on("submit", function (event) {
    event.preventDefault();

    const name = $("#student-name").val();
    const grade = $("#student-grade").val();
    const regex = /^[a-zA-Z\s]+$/;

    if (regex.test(name)) {
      if (name && grade) {
        $("#students-list").append(`<li> ${name} - ${grade}</li>`);

        $("#student-name").val("");
        $("#student-grade").val("");
      } else {
        alert("Fill in both fields!");
      }
    } else {
      alert("The student's name must NOT contain numbers!");
    }
  });
});
