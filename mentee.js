 var switching;
 var colCode;
 var rate;


function  rateColor() {  //sets the background color based on rate
    if(rate==0)
        colCode="#FF0000";
    else if(rate==1)
        colCode="#FF3300";
    else if(rate==2)
        colCode="#ff6600";
    else if(rate==3)
        colCode="#ff9900 ";
    else if(rate==4)
        colCode="#FFCC00 ";
    else if(rate==5)
        colCode="#ffff00";
    else if(rate==6)
        colCode="#ccff00";
    else if(rate==7)
        colCode="#99ff00";
    else if(rate==8)
        colCode="#66ff00";
    else if(rate==9)
        colCode="#33ff00";
    else if(rate==10)
        colCode="#00ff00";
    return colCode;
  }


 function deleteRow(row){   //enables deletimg a row
     var Row=row.parentNode.parentNode;
     Row.removeChild(row.parentNode);
 
     }

function EditRow(edit){    //enables editing
    var row=edit.parentNode;
    var button=document.getElementById("edit");
    if (row.contentEditable == "true") {
        row.contentEditable = "false";
        var cells=row.getElementsByTagName('td');
        rate=cells[3].innerHTML;
        row.style.backgroundColor=rateColor();
        button.innerHTML = "Edit"; 
        }
    else {
        row.contentEditable = "true";
        button.innerHTML = "Submit";
        row.style.backgroundColor="white";
        }
    }

function insRow() {                                       //adds mentee details to the list
    rate = document.getElementById("rate").value;
    console.log(rate);
    if(!(rate==0||rate==1||rate==2||rate==3||rate==4||rate==5||rate==6||rate==7||rate==8||rate==9||rate==10)){
        alert("!!!Invalid rating. Enter a integer between 0 and 10!!!")
        return;
        }
    var Name = document.getElementById("name").value;
    var rNo = document.getElementById("rollNo").value;
    var comment=document.getElementById("comment").value;
    var row=document.getElementById('list').insertRow(-1);
    row.class="row";
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var del=document.createElement("button");
    var txtNode = document.createTextNode("Delete");
    del.appendChild(txtNode);
    del.setAttribute("onclick","deleteRow(this)");
    row.appendChild(del);
    var edit=document.createElement("button");
    var node = document.createTextNode("Edit");
    edit.appendChild(node);
    edit.setAttribute("onclick","EditRow(this)");
    edit.setAttribute("id","edit");
    row.appendChild(edit);

    row.style.backgroundColor=rateColor();

   
    cell1.innerHTML=Name;
    cell2.innerHTML=rNo;
    cell3.innerHTML=comment;
    cell4.innerHTML=rate;
    cell3.title=comment;
    cell1.title=Name;
    switching=true;
        
    } 
 

  function sort() {           //sorts basedon rating
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

 
