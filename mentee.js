

function deleteRow(row)
{ var Row=row.parentNode.parentNode;
  Row.removeChild(row.parentNode);
 
}

function EditRow(edit)    //enables editing
{var x=edit.parentNode;
  var button=document.getElementById("edit");
  if (x.contentEditable == "true") {
    x.contentEditable = "false";
    x.style.backgroundColor="#e6e6fa";
    button.innerHTML = "Edit";
} else {
    x.contentEditable = "true";
    button.innerHTML = "Submit";
    x.style.backgroundColor="white";
}
}

function insRow()                                        //adds mentee details to the list
{      var Name = document.getElementById("na").value;
        var rno = document.getElementById("rno").value;
        var comment=document.getElementById("cmt").value;
        var rate = document.getElementById("rate").value;

    var x=document.getElementById('list').insertRow(-1);
      x.class="row";
      console.log(x.class);
      var c1=x.insertCell(0);
      var c2=x.insertCell(1);
      var c3=x.insertCell(2);
      var c4=x.insertCell(3);
      var del=document.createElement("button");
      var t = document.createTextNode("Delete");
      del.appendChild(t);
      del.setAttribute("onclick","deleteRow(this)");
      x.appendChild(del);
      var edit=document.createElement("button");
      var y = document.createTextNode("Edit");
      edit.appendChild(y);
      edit.setAttribute("onclick","EditRow(this)");
      edit.setAttribute("id","edit");
      x.appendChild(edit);


    
  
    c1.innerHTML=Name;
    c2.innerHTML=rno;
    c3.innerHTML=comment;
    c4.innerHTML=rate;
    c2.cID=rno;
    c3.title=comment;
    c1.title=Name;
    console.log(c2.class);
  }