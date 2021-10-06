// window.onload = function () {

//   var submit = document.getElementById('submit');
//   var text = document.getElementById('fname');


//   // submit.onclick = function () {
//   //   var textValue = text.value;
//   //   console.log(textValue);
//   // }

  // $('form').on('submit', function(e) {
  //   e.preventDefault();
  //   var input = JSON.stringify(req.body);
  //   console.log(input);
  //   console.log('sucess!')
  // })

// }

$(document).ready(function() {

  $('#downloadlocation').hide();

  $('#submit').click(function(e) {
    e.preventDefault();
    var formdata = new FormData();
    file = $('#fileinput').prop('files')[0];
    formdata.append('fileinput', file);

    $('#downloadlocation').show();

    $.ajax({
      type: 'POST',
      // dataType: "json",
      url: '/',
      processData: false,
      contentType: false,
      data: formdata, 
      success(response) {
         console.log('POST sent sucessfully');
        //  console.log(...formdata.entries());
      }
   });
  })

  $('#download').click(function(e) {
    e.preventDefault();

    $.ajax({
      type: 'GET',
      url: '/download',
      success(response) {
         console.log('Download sucessful!!');
         window.open('/download');
        //  console.log(...formdata.entries());
      }
    });
  });



});

