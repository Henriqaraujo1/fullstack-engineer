var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

const button = document.getElementById("button");
const fName = document.getElementById("fname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const fMessage = document.getElementById("message")


const namecheap = () =>{
    Email.send({
        SecureToken : "ef487c17-4a3f-4d63-b36d-7bb1df69b7fb",
        To : 'henriqaraujo1@gmail.com',
        From : "sendemail@henrique-silva.tech",
        Subject : "Job Opportunity",
        Body : `Name: ${fName.value} <br>
        Email: ${email.value} <br>
        Phone: ${phone.value} <br>
        Message: ${fMessage.value}`
    }).then(
      alert(`Thank ${fname.value} to send the message`)
    );
}



button.addEventListener("click", namecheap)

