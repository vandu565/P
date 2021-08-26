
function genrateInvoice(){
    
    console.log("in");
    let x=getCookie('invoice')
    $(".table1").append(x);
  }

  genrateInvoice();


  function getCookie(cname) {
    console.log("out cookie")
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  