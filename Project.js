


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
let products = [
  {
    _id: "1",
    balance: "10",
    name: "Cadbury DiaryMilk",
  },
  {
    _id: "2",
    balance: "28",
    name: "Amul Milk",
  },
  {
    _id: "3",
    balance: "30",
    name: "Vadilal ButterScotch Cone",
  },
  {
    _id: "4",
    balance: "10",
    name: "Butterflow Gel pen",
  },
  {
    _id: "5",
    balance: "180",
    name: "garnier facewash",
  },
  {
    _id: "6",
    balance: "215",
    name: "Haldiram aaloobhujia(1kg)",
  },
  {
    _id: "7",
    balance: "108",
    name: "Kisan tomato catchup",
  },
  {
    _id: "8",
    balance: "90",
    name: "alpenliebe gold(100pc)",
  },
  {
    _id: "9",
    balance: "515",
    name: "AMUL Desi Ghee(1L)",
  },
  {
    _id: "10",
    balance: "215",
    name: "Sugar (5kg)",
  },
  {
    _id: "11",
    balance: "55",
    name: "Chanki chaat Masala(100gm)",
  },
  {
    _id: "12",
    balance: "85",
    name: "Pepsi(2.5L)",
  },
  {
    _id: "13",
    balance: "30",
    name: "Zimzam Creamy biscuit",
  },
  {
    _id: "14",
    balance: "122",
    name: "Pasta(1kg)",
  },
  {
    _id: "15",
    balance: "325",
    name: "MotherDiary IceCream(1kg)",
  },
];
function findProduct(pid) {
  let prod = products.find((pr) => pr._id === pid);
  return [prod.name, prod.balance];
}


let count=0;
let totalPrice=0;
let html2;
let num=0;

function addRow(tableID,formID ){
  count=count+1;
  if(count>5){
    count=count-1;
    alert("No More Rows Can Be Added")
    return ;
  }
  var table = document.getElementById(tableID);
  var form = document.forms[formID];
  if (parseInt(form.elements["pno"].value) > 15) {
    window.alert(`please enter productId less than 16`);
  }
  let x=parseInt(form.elements["pno"].value);
  let ans = this.findProduct(form.elements["pno"].value);
  let quant=form.elements["quantity"].value;
  var price = form.elements["quantity"].value * ans[1];

  help(ans[0],ans[1],quant,price)


  let html='<tr class="remove'+count+'" data-table="'+count+'">'+
           '<td data-check="'+count+'"><input type="checkbox"></td>'+
           '<td>'+x+'</td>'+
           '<td>'+ans[0]+' </td>'+
           '<td> '+ans[1]+' </td>'+
           '<td id="quant  quant'+count+' " > '+quant+' </td>'+
           '<td id="pricee price'+count+' " > '+price+' </td>'+
           '<td class="delete" ><i class="fas fa-trash-alt btn-danger" data-price="'+price+'" data-primaryKey="'+count+'"></i> </td>'+
           '</tr>'
           $(".appendProducts").append(html);

           
           totalPrice=totalPrice+price
           document.getElementById("total").innerHTML = `₹ `;
           document.getElementById("total").innerHTML = totalPrice;
}

 $(".appendProducts").on( 'click', '.btn-danger ',function (e) {
   count=count-1;
   let table= this.getAttribute('data-primaryKey');
   let price= this.getAttribute('data-price');
   $('.remove'+table+'').remove();
   totalPrice=totalPrice-price;
   document.getElementById("total").innerHTML = `₹ `;
   document.getElementById("total").innerHTML = totalPrice;

})

function help(name,unit,quant,price){
  console.log("in g")
  if(num=0){
    num=num+1;
  }
  html2=html2+'<tr >'+
  '<td>'+name+'</td>'+
  '<td>'+quant+' </td>'+
  '<td> '+unit+' </td>'+
  '<td> '+price+' </td>'+
  '</tr>'
  
  console.log("html2",html2)
  $.cookie('the_cookie', 'the_value', { expires: 7, path: '/' });
  setCookie('invoice', html2,'10')
  
}


function setCookie(cname, cvalue, exdays) {
  console.log("in cookie")
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  console.log("exit cookie")
}


















