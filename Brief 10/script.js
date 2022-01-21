// document.getElementById('botton').addEventListener('click', loadText);
// function loadText(){
// var xhr = new XMLHttpRequest();
// xhr.open('GET','data.json',true)

// xhr.onload = function (){
//     if (this.status == 200) {
//         var trucks = JSON.parse(this.responseText)
//     }
// }
//  xhr.send();
var search = document.querySelector("#search")
var chocho;
// }
var table = document.querySelector('#myTable')
function getJSON(){
$.getJSON('data.json',function(data){
        chocho = data;
        fillTable(data)
    })  
}
getJSON();

function fillTable(pfpf){
    let dt =""
    pfpf.forEach(function(truck){
        dt += ` <tr>
        <td>${truck.product}</td>
        <td>${truck.id}</td>
        <td>${truck.category}</td>
        <td>
            <ul>
                <li>${truck.Provider.provider}</li>
                <li>${truck.Provider.adress}</li>
            </ul>
        </td>
        <td>${truck.Availabilty}</td>
        <td>${truck.price}</td> 
        </tr>        
        `
    })
    table.innerHTML += dt
}

// document.getElementById('myInput').addEventListener('keyup', function() {
//     var value = $(this).val().toLowerCase();
//     $("#myTable tr").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });

search.addEventListener('keyup', filterTasks)
function filterTasks(){
  var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
}

function sortTable(column, type) {

    //Get and set order
    //Use -data to store wheater it will be sorted ascending or descending
    var order = $('.table thead tr>th:eq(' + column + ')').data('order');
    order = order === 'ASC' ? 'DESC' : 'ASC';
    $('.table thead tr>th:eq(' + column + ')').data('order', order);


    $('#myTable tr').sort(function(a, b) {

      a = $(a).find('td:eq(' + column + ')').text();
      b = $(b).find('td:eq(' + column + ')').text();
      switch (type) {
        case 'text':
          return order === 'ASC' ? a.localeCompare(b) : b.localeCompare(a);
          break;
        case 'number':
          return order === 'ASC' ? a - b : b - a;
          break;

      }

    }).appendTo('.table tbody');
  }
  $('#TN').click(function() {
    sortTable(0, 'text');
  });
  $('#HP').click(function() {
    sortTable(1, 'number');
  });
  $('#Cl').click(function() {
    sortTable(2, 'text');
  });
  $('#pr').click(function() {
    sortTable(3, 'text');
  });
  $('#Aa').click(function() {
    sortTable(4, 'text');
  });
  $('#Sa').click(function() {
    sortTable(5, 'number');
  });