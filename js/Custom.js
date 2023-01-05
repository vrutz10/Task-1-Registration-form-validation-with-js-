//User Name 

function vlidateUserName() {
    let nm = document.getElementById("InputName").value;
    let regex = /^[a-zA-Z ]*$/;

    if (nm == "") {
        document.getElementById("nmsg").innerHTML = "* Please enter name";
        return false;
    }else if(nm.trim() == ""){
        document.getElementById("nmsg").innerHTML = "* Only spaces are not alowed";
        return false;
    } 
    else if (nm.match(regex)) {
        document.getElementById("nmsg").innerHTML = "";
        return true;
    }else {
        document.getElementById("nmsg").innerHTML = "* Name must have characters only";
        return false;
    }
}

//Email Address

function validateEmailAdd() {
    let email = document.getElementById("InputEmail1").value;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    
    if(email.trim() == ""){
        document.getElementById("emsg").innerHTML = "* Please enter email";
        //return false;
    }else{
            let es = email.split('@');
            let b = es[0];
            let c = es[1];
        
            let ds = c.split('.');
            let a = ds[0];
        
        
            if (b.length < 3) {
                document.getElementById("emsg").innerHTML ="* Before @ must have atleast 3 elements";
                return false;
            }else if (a.length < 3) {
                document.getElementById("emsg").innerHTML ="* After @ must have atleast 3 elements";
                return false;
            }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                document.getElementById("emsg").innerHTML ="";
                return true;
            }
            else{
                document.getElementById("emsg").innerHTML ="* Email is not valid";
                return false;  
            }
        }   
        if (email.trimend() == " "){
            document.getElementById("emsg").innerHTML ="* Space not allowed at end";
            return false;
        }
    }

//Mobile Number

function validateMobileNo() {
    let mobile = document.getElementById("phone").value;
    if (mobile == "") {
        document.getElementById("mmsg").innerHTML = "* Please enter mobile no";
        return false;
    } else if (isNaN(mobile)) {
        document.getElementById("mmsg").innerHTML = "* Enter only numeric values";
        return false;
    } else if (mobile.length > 10) {
        document.getElementById("mmsg").innerHTML = "* Mobile number must be 10 digits long";
        return false;
    } else if (mobile[0] == 0) {
        document.getElementById("mmsg").innerHTML = "* Mobile number must be start without zero";
        return false;
    } else if (mobile.length != 10) {
        document.getElementById("mmsg").innerHTML = "* Mobile number must be 10 digits long";
        return false;
    }else if(/\s/.test(mobile)){
        document.getElementById("mmsg").innerHTML = "* Space is not alowed";
    }else {
        document.getElementById("mmsg").innerHTML = "";
        return true;
    }
}

//DOB

function validateDOB() {
    let dob = document.getElementById("InputDOB").value;

    // shudo code
    // 1.   split the date month and year
    // 2.   validae month   
    //          it should be 12 <= month >= 1
    // 3.   validate day 
    //          based on month validate the day from 1 to 30
    // 4.    validate year
    //          year must content 4 digits only and chec for the leap year and the selected month and day           

    if(moment(dob).isValid == true){
        document.getElementById("dmsg").innerHTML = "";
        return true;
    }else{
        document.getElementById("dmsg").innerHTML = "* Date is unvalid";
        return true;
    }

    

    
}

//Address

function validateAddress1() {
    let regex = /^[a-zA-Z ]*$/;

    let add1 = document.getElementById("InputAddress1").value;
    if (add1 == "") {
        document.getElementById("add1").innerHTML = "* Please enter block no,street";
        return false;
    }else if(add1.trim() == ""){
        document.getElementById("add1").innerHTML = "* Only spaces are not alowed";
        return false;
    }
    else {
        document.getElementById("add1").innerHTML = "";
        return true;
    }
}

function validateAddress2() {
    let add2 = document.getElementById("InputAddress2").value;
    if (add2 == "") {
        document.getElementById("add2").innerHTML = "* Please enter lendmark,city";
        return false;
    }else if(add2.trim() == ""){
        document.getElementById("add2").innerHTML = "* Only spaces are not alowed";
        return false;
    } 
    else {
        document.getElementById("add2").innerHTML = "";
        return true;
    }
}

function validateAddress3() {
    let add3 = document.getElementById("InputAddress3").value;
    if (add3 == "") {
        document.getElementById("add3").innerHTML = "* Please enter pincode";
        return false;
    } else if (add3.length < 6 || add3.length > 6) {
        document.getElementById("add3").innerHTML = "* Pincode must be 6 digits long";
        return false;
    } else if (isNaN(add3)) {
        document.getElementById("add3").innerHTML = "* Pincode must nubers only";
        return false;
    }else if(add3.trim() == ""){
        document.getElementById("add3").innerHTML = "* Only spaces are not alowed";
        return false;
    } 
    else {
        document.getElementById("add3").innerHTML = "";
        return false;
    }
}

//Gender

function validateGender() {

    if (document.getElementById("optionsRadios1").checked) {
        document.getElementById("msg").innerHTML = "";
        return true;
    } else if (document.getElementById("optionsRadios2").checked) {
        document.getElementById("msg").innerHTML = "";
        return true;
    } else {
        document.getElementById("msg").innerHTML = "* Please select anyone";
        return false;

    }
}

//Checkbox

function validateCheckBox() {
    if (document.getElementById("cb").checked === true && vlidateUserName() === true && validateEmailAdd() === true &&
        validateMobileNo() === true && validateDOB() === true && validateAddress1() === true &&
        validateGender() === true) {

        document.getElementById("msgs").innerHTML = "";
        document.getElementById("btnsubmit").disabled = false;
        return true;

    } else {
        document.getElementById("cb").checked = false;
        document.getElementById("btnsubmit").disabled = true;
        document.getElementById("msgs").innerHTML = "* Please accept terms and conditions";
        return false;
    }
}

function onLoad() {
    document.getElementById("btnsubmit").disabled = true;
}

// if ($("#checkBox:checked").val()) {
    //     $("#error_checkBox").hide();
    // }
    // else {
    //     $("#error_checkBox").show();
    //     $("#error_checkBox").html("* Please agree terms and conditions");
    //     $("#error_checkBox").css("color", "red");
    // }



//   $(':input[type="submit"]').prop('disabled', true);
//      $('input[type="checkbox"]').mouseover(function() {
//         if($(this).val() != '') {
//            $(':input[type="submit"]').prop('disabled', false);
//         }
//      });


//$("input[name='Gender']:checked").val() != false
    // if($("#userName").val() != "" && $("#emailAddress").val() != "" && $("#phoneNo").val() != "" && $("#addressOne").val() != "" && $("#addressTwo").val() != "" && $("#addressThree").val() != ""){
    //     $("#checkBox").prop("disabled",false);
    //     $(':input[type="submit"]').prop('disabled', false);
    // }
    // else{
    //     $(':input[type="submit"]').prop('disabled', true);
    //     $("#error_checkBox").show();
    //     $("#error_checkBox").html("* Please agree terms and conditions");
    //     $("#error_checkBox").css("color", "red");
    // }


$("#checkBox").on("click", function () {
    let valid = true;
    if ($('input[type=checkbox]:checked').length == 0) {
        // alert("ERROR! Please select at least one checkbox");
        $("#error_gender").show();
        $("#error_gender").html("* Please select any one");
        $("#error_gender").css("color", "red");
        valid = false;
    }
    else {
        $("#error_gender").hide();
        return valid;
    }
});

// alert("ERROR! Please select at least one checkbox");


