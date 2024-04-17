$(document).ready(function(){
  function checkName(){
    var name = $("#nameInput").val();
    if(name == null || name == ""){
      $("#errName").text("Tên không được rỗng");
      return false;
    }else{
      $("#errName").text("");
      return true;
    }
  }
  $("#nameInput").blur(function(){
    checkName();
  });

  function checkAge(){
    var age = new Date($("#dobInput").val()).getFullYear();
    if(age == null || isNaN(age)){
      $("#arrAge").text("Chưa chọn ngày sinh");
      return false;
    }else{
      var namHientai = new Date().getFullYear();
      if(namHientai - age < 18){
        $("#arrAge").text("Từ đủ 18 tuổi");
        return false;
      }else{
        $("#arrAge").text("");
        return true; 
      }
     
    }
  }
  $("#dobInput").blur(function(){
    checkAge();
  });

  function checkAddress(){
    var address = $("#addressInput").val();
    if(address == null || address == ""){
      $("#errAddress").text("Địa chỉ không được rỗng");
      return false;
    }else{
      $("#errAddress").text("");
      return true;
    }
  }
  $("#addressInput").blur(function(){
    checkAddress();
  });

  function checkPhone(){
    var phone = $("#telInput").val();
    if(phone == null || phone == ""){
      $("#errPhone").text("Số điện thoại không được rỗng");
      return false;
    }else if(isNaN(phone)){
      $("#errPhone").text("Phải là số");
      return false;
    }else if(!/^\d\d{8}\d$/.test(phone)){
      $("#errPhone").text("Đủ 10 kí tự số");
      return false;
    }else{
      $("#errPhone").text("");
      return true;
    }
  }
  $("#telInput").blur(function(){
    checkPhone();
  });

  function checkID(){
    var v_id = $("#idInput").val();
    if(v_id == null || v_id == ""){
      $("#errID").text("ID không được rỗng");
      return false;
    }else{
      $("#errID").text("");
      return true;
    }
  }
  $("#idInput").blur(function(){
    checkID();
  });

  function getGender(){
    return $('input[name="genderSelector"]:checked').val();
  }

  $("#tourSelector").on("change", function() {
    var giaTri = $(this).val();

    if (giaTri == "Certified Lover Boy Tour") {
      var option1 = "<option value='New York City'>New York City</option>";
      var option2 = "<option value='Los Angeles'>Los Angeles</option>";
      var option3 = "<option value='Chicago'>Chicago</option>";
  
      $("#citySelector").empty();
      $("#citySelector").append(option1);
      $("#citySelector").append(option2);
      $("#citySelector").append(option3);
      $("#citySelector").change();
    } else if (giaTri == "After Hours Til Dawn Tour") {
      var option1 = "<option value='Las Vegas'>Las Vegas</option>";
      var option2 = "<option value='Atlanta'>Atlanta</option>";
      var option3 = "<option value='Seattle'>Seattle</option>";
      
      $("#citySelector").empty();
      $("#citySelector").append(option1);
      $("#citySelector").append(option2);
      $("#citySelector").append(option3);
      $("#citySelector").change();
    } else if (giaTri == "Lover Fest Tour") {
      var option1 = "<option value='New York City'>New York City</option>";
      var option2 = "<option value='Los Angeles'>Los Angeles</option>";
      var option3 = "<option value='Chicago'>Chicago</option>";
  
      $("#citySelector").empty();
      $("#citySelector").append(option1);
      $("#citySelector").append(option2);
      $("#citySelector").append(option3);
      $("#citySelector").change();
    }
});

  $("#tourSelector").change();

  var Certified_Lover_Boy_Tour = [
    {city:"New York",date_start:new Date(2024, 6, 15), time:"7:00 PM", address:"Madison Square Garden New York, NY", price:150},
    {city:"Los Angeles",date_start:new Date(2024, 6, 22), time:"7:00 PM", address:"The Forum, INglewood, CA", price:180},
    {city:"Chicago",date_start:new Date(2024, 6, 29), time:"7:00 PM", address:"United Center, Chicago, II", price:160}
  ];

  var After_Hours_Til_Dawn_Tour = [
    {city:"Las Vegas",date_start:new Date(2024, 8, 2), time:"9:00 PM", address:"T-Mobile Arena, Las Vegas", price:100},
    {city:"Atlanta",date_start:new Date(2024, 8, 9), time:"9:00 PM", address:"State Farm Arena, Atlanta, GA", price:110},
    {city:"Seattle",date_start:new Date(2024, 8, 16), time:"9:00 PM", address:"Climate Pladge Arena, Seattle, WA", price:115}
  ];

  var Lover_Fest_Tour = [
    {city:"New York",date_start:new Date(2024, 6, 15), time:"7:00 PM", address:"Madison Square Garden New York, NY", price:250},
    {city:"Los Angeles",date_start:new Date(2024, 6, 22), time:"7:00 PM", address:"The Forum, INglewood, CA", price:280},
    {city:"Chicago",date_start:new Date(2024, 6, 29), time:"7:00 PM", address:"United Center, Chicago, II", price:260}
  ];

  $("#citySelector").on("change", function() {

    var tour = $("#tourSelector").val();
    var city = null; 
    var value = null; 
    if (tour == "Certified Lover Boy Tour") {
      city = $(this).val();
      if (city == "New York City") value = Certified_Lover_Boy_Tour[0];
      else if (city == "Los Angeles") value = Certified_Lover_Boy_Tour[1];
      else if (city == "Chicago") value = Certified_Lover_Boy_Tour[2];

    } else if (tour == "After Hours Til Dawn Tour") {
      city = $(this).val();
      if (city == "Las Vegas") value = After_Hours_Til_Dawn_Tour[0];
      else if (city == "Atlanta") value = After_Hours_Til_Dawn_Tour[1];
      else if (city == "Seattle") value = After_Hours_Til_Dawn_Tour[2];
      
    } else if (tour == "Lover Fest Tour") {
      city = $(this).val();
      if (city == "New York City") value = Lover_Fest_Tour[0];
      else if (city == "Los Angeles") value = Lover_Fest_Tour[1];
      else if (city == "Chicago") value = Lover_Fest_Tour[2];
      
    }
    $("#date_start").val(value.date_start.toISOString().split('T')[0]);
    $("#time_start").val(value.time);
    $("#address_start").val(value.address);
    $("#price").val(value.price);
  });

  $("#citySelector").change();

  $("#dattour").click(function(){
    if(checkName() && checkAge() && checkAddress()
      && checkPhone()  && checkID()){
      var name = $("#nameInput").val();
      var DOb = $("#dobInput").val();
      var address = $("#addressInput").val();
      var phone = $("#telInput").val();
      var id = $("#idInput").val();
      var gender = getGender();
      if(gender == null || gender == ""){
        $("#errGender").text("Chưa chọn giới tính");
        return false;
      }else{
        $("#errGender").text("");
      }
      var tour = $("#tourSelector").val();
      var city_tour = $("#citySelector").val();
      var date_start = $("#date_start").val();
      var time_start = $("#time_start").val();
      var address_start = $("#address_start").val();
      var price = $("#price").val();
      var row = "<tr>" + 
                "<td>" + name + "</td>" +
                "<td>" + DOb + "</td>" +
                "<td>" + address + "</td>" +
                "<td>" + phone + "</td>" +
                "<td>" + id + "</td>" +
                "<td>" + gender + "</td>" +
                "<td>" + tour + "</td>" +
                "<td>" + city_tour + "</td>" +
                "<td>" + date_start + "</td>" +
                "<td>" + time_start + "</td>" +
                "<td>" + address_start + "</td>" +
                "<td>" + price + "</td>" +
            "</tr>";
      $("#tour_table").append(row);

      $("#nameInput").val(null);
      $("#dobInput").val(null);
      $("#addressInput").val(null);
      $("#telInput").val(null);
      $("#idInput").val(null);
      $(".genderSelector").prop("checked", false);
      $("#tourSelector").val(null);
      $("#citySelector").val(null);
      $("#date_start").val(null);
      $("#time_start").val(null);
      $("#address_start").val(null);
      $("#price").val(null);
    }else{
      $("#nameInput").focus();
    }
  });
});