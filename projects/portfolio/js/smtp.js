/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

const fNome = document.getElementById("fname");
const sName = document.getElementById("sname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const buttonSubmit = document.getElementById("button");

const sendEmail =() =>{
  Email.send({
    SecureToken : "b474e9ed-e0ea-4cc6-82e4-cdd12dce35a9b474e9ed-e0ea-4cc6-82e4-cdd12dce35a9",
    To : "henriqaraujo1@gmail.com",
    From : 'sendemail@henrique-silva.tech',
    Subject : "Contact for a Job",
    Body: "This is the contact from a Employer",
        Attachments : [
            Name = fNome.value,
            sName = sName.value,
            email = email.value,
            phone = phone.value,
            message = message.value
        ]
});
}


buttonSubmit.addEventListener('click', sendEmail);




// const token = "e2b8d5d2-cd2c-4b19-b292-db72965ff884";
// const $formContact = document.querySelector("#contact");

// const sendForm = event => {
//   event.preventDefault();
//   const message = {
//     name: document.querySelector("#form-name").value,
//     subject: document.querySelector("#form-subject").value,
//     text: document.querySelector("#form-message").value
//   };
//   smtpJS(message);
// };
// const smtpJS = message => {
//   try {
//     Email.send(
//       "raulfdm@hotmail.com",
//       "devtesteapps@gmail.com",
//       `${message.name} - ${message.subject}`,
//       message.text,
//       { token }
//     );
//   } catch (e) {
//     alert("Erro");
//   }
// };

// $formContact.addEventListener("submit", sendForm);
