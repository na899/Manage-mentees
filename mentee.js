 var switching;
 var colCode;
 var min=document.getElementById("rate").min;
 var max=document.getElementById("rate").max;


function  rateColor(rate) {  //sets the background color based on rate
    var red=255*(1-(rate)/(max-min));
    var green=255*((rate)/(max-min));    
    colCode="rgb("+red+","+green+",0)";
    return colCode;
}


 function deleteRow(row){   //enables deletimg a row
     var Row=row.parentNode.parentNode;
     Row.removeChild(row.parentNode);
 
 }

function EditRow(edit){    //enables editing
    var row=edit.parentNode;
    var cells=row.getElementsByTagName('td');
    var rollNo=cells[1].innerHTML;

    var button=document.getElementById(rollNo);
    if (row.contentEditable == "true") {
        row.contentEditable = "false";
        
        var rate=cells[3].innerHTML;
        row.style.backgroundColor=rateColor(rate);
        button.innerHTML = "Edit"; 
    }
    else {
        row.contentEditable = "true";
        button.innerHTML = "Submit";
        row.style.backgroundColor="white";
    }
}

function insRow() {                                       //adds mentee details to the list
    var rate =document.getElementById("rate").value;
    console.log(rate);
    if(!(rate=='0'||rate=='1'||rate=='2'||rate=='3'||rate=='4'||rate=='5'||rate=='6'||rate=='7'||rate=='8'||rate=='9'||rate=='10')){
        alert("!!!Invalid rating. Enter a integer between 0 and 10!!!")
        return;
    }
    var Name = document.getElementById("name").value;
    var rollNo = document.getElementById("rollNo").value;
    if(rollNo==""){
      alert("Roll no. is mandatory!!")
      return;
    }
    var comment=document.getElementById("comment").value;
    var row=document.getElementById('list').insertRow(-1);
    row.class="row";
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var deleteBtn=document.createElement("button");
    var txtNode = document.createTextNode("Delete");
    deleteBtn.appendChild(txtNode);
    deleteBtn.setAttribute("onclick","deleteRow(this)");
    row.appendChild(deleteBtn);
    var edit=document.createElement("button");
    var node = document.createTextNode("Edit");
    edit.appendChild(node);
    edit.setAttribute("onclick","EditRow(this)");
    edit.setAttribute("class","edit");
    edit.setAttribute("id",rollNo);
    row.appendChild(edit);

    row.style.backgroundColor=rateColor(Number(rate));

   
    cell1.innerHTML=Name;
    cell2.innerHTML=rollNo;
    cell3.innerHTML=comment;
    cell4.innerHTML=rate;
    cell3.title=comment;
    cell1.title=Name;
    switching=true;
        
} 
 

  function sort() {           //sorts based on rating
      var table, rows, switching, i, row1, row2, shouldSwitch;
      table = document.getElementById("list");
      switching = true;
      while (switching) {
          switching = false;
          rows = table.getElementsByTagName("tr");
          for (i = 1; i < (rows.length - 1); i++) {
              shouldSwitch = false;
              row1 = rows[i].getElementsByTagName("td")[3];
              row2 = rows[i + 1].getElementsByTagName("td")[3];
      

              if (Number(row1.innerHTML) > Number(row2.innerHTML)) {
                  shouldSwitch = true;
                  break;
              }
          }
          if (shouldSwitch) {
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              switching = true;
          }
   
      }
 }

 
