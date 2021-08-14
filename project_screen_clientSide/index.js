var globData = [];

fetch("https://raw.githubusercontent.com/ghoshdebashree/data/main/maindata.json")
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    // Update global data variable to use it for filter later
    console.log(data)
    globData = data.rows;
    $("#table").bootstrapTable({ data: data });
  })

  function detailFormatter(index, row) {
    var html = [];
    $.each(row, function (key, value) {
      if (key == 'details') {
        var table = document.createElement('table')
        table.classList.add('table')
        
        // Create table header
        var trHead = document.createElement('tr');
        $.each(value, function(key, value) {
          var th = document.createElement('th');
          
          var text = document.createTextNode(key);
          th.appendChild(text);
          trHead.appendChild(th);
        })
        //Create table data
        var trBody = document.createElement('tr');
        $.each(value, function(key, value) {
          var td = document.createElement('td');
          var text = document.createTextNode(value);
          td.appendChild(text);
          trBody.appendChild(td);
        })
        table.appendChild(trHead)
        table.appendChild(trBody)
        html.push(table);
      }
      
    });
    
   return html;
  }

//fetch data according to dates selected from date boxes

var filterdateButton = document.getElementById('filterdate');

filterdateButton.addEventListener('click', function() {
  var startdate = document.getElementById('reqstart').value;
  var enddate = document.getElementById('reqend').value;
  
  var filteredData = globData.filter(function(item, index) {
    return new Date(item.reqdate) > new Date(startdate) && new Date(item.reqdate ) < new Date(enddate);
  })
   $('#table').bootstrapTable('refreshOptions',{
          data: filteredData
     
     })
})