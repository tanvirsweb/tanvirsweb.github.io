(function() {
    
    emailjs.init('8yH6sFCFzegrcqo56');
})();
function funcSendEmail(){
    if(document.getElementById("user_name").value!="" &&
    document.getElementById("user_email").value!="" &&
    document.getElementById("message").value!=""){
        var params={
                from_name: document.getElementById("user_name").value,
                email_id: document.getElementById("user_email").value,
                sub: document.getElementById("sub").value,
                message: document.getElementById("message").value }

        emailjs.send('service_8kv3vmz','template_q4aw5gp',params)
            .then(function(res) {
                console.log('SUCCESS!'+res.status);
            }, function(error) {
                console.log('FAILED...', error);
            });

        document.getElementById("user_name").value="";
        document.getElementById("user_email").value="";
        document.getElementById("sub").value="";
        document.getElementById("message").value="";
    
        alert("Email Sent to tanvir.anjom.siddique71@gmail.com");
    }
    else{
        alert("Please fill all necessary info !!");
    }
    
}
