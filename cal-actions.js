
            var fullevent="";
            var eventTitle="";
            var eventLocation="";
            var eventDay="";
            var eventMonth="";
            var eventStart="";
            var eventEnd= "";
            var eventAlert="";

            function infoEvent(){
                eventAlert="";
              
              
                eventTitle= window.prompt("Title of Event: ", "Meeting");
                    if (eventTitle!= ""){
                        fullevent+=eventTitle;
                        eventAlert+= eventTitle;
                        
                    }
                eventLocation= window.prompt("Location of Event: ", "Holy Names Academy");
                    if (eventLocation!=""){
                        fullevent+= "<br>" + eventLocation;
                        eventAlert+= "\n" + eventLocation
                    }
                 eventMonth= window.prompt ("Month of the Event: ", "June");
                    if (eventMonth != ""){
                        fullevent+="<br>" + eventMonth + " ";
                        eventAlert+="\n" + eventMonth + " ";
                    }

                eventDay= window.prompt ("Day of the Event: ", "1");
                    if (eventDay != ""){
                        fullevent+=eventDay;
                        eventAlert+=eventDay;
                    }
                    eventDay= eventDay.toString();
                 
                 eventStart= window.prompt("Start Time: ", "9:00am");
                     if (eventStart!=""){
                         fullevent+="<br>" + eventStart + "-";
                         eventAlert+="\n" + eventStart + "-";
                    }
                  eventEnd= window.prompt("End Time: ", "10:00am");
                    if (eventStart!=""){
                        fullevent+= eventEnd+"<br><br>";
                        eventAlert+= eventEnd;
                        
                    }
                
                window.alert(eventAlert);
                var findId = parseInt(eventDay)+ (parseInt(getStartingIndex(eventMonth.toLocaleLowerCase()))-1);
                document.getElementById(findId.toString()).innerHTML += "<br>" + eventTitle;
            }

            function showEvents() {
                var popup = document.getElementById("myPopup");
                popup.classList.toggle("show");
                document.getElementById("myPopup").innerHTML+= "<br>" + fullevent;
                fullevent = "";}

            window.onload= function homePg(){
                var x=document.getElementById("me");
                var y=document.getElementById("em");

                openPage('Home', x,'#73C6B6');
                openSubTab('Monthly',y,'#A2D9CE');
            }


            function addTodosHandler(event) {
                  // Get User Input
                  var inputElement = document.getElementById("todoInput");
                  var inputValue = inputElement.value;
                  // Create List Item
                  let newListItem = document.createElement("li");
                  // Use Input to Populate List Item
                  newListItem.innerText = inputValue;
                  // Add Element to the todos list.
                  var todosList = document.getElementById("todos");
                  todosList.append(newListItem);

                  // Clear input
                  inputElement.value = "";
                }

                  var todoButton = document.getElementById("todoButton")
                  todoButton.addEventListener("click", addTodosHandler);

    function openPage(pageName,elmnt,color) {
                //hide all elements with tabcontent by default
                var i,tabcontent,tablinks;
                tabcontent= document.getElementsByClassName("tabcontent");
                for(i=0;i<tabcontent.length;i++)
                    tabcontent[i].style.display="none";

                tablinks=document.getElementsByClassName("tablink");
                for(i=0;i<tablinks.length;i++)
                    tablinks[i].style.backgroundColor="";

                document.getElementById(pageName).style.display="block";
                elmnt.style.backgroundColor=color;
            }


            function openSubTab(pageName,elmnt,color){
        var i,tabcontnt, tablnks;
        
        tabcontnt=document.getElementsByClassName("tabcontnt");
        for(i=0;i<tabcontnt.length;i++)
                tabcontnt[i].style.display="none";
       
       tablnks=document.getElementsByClassName("tablnk");
        for(i=0;i<tablnks.length;i++)
            tablnks[i].style.backgroundColor="";
        
        document.getElementById(pageName).style.display="block";
        elmnt.style.backgroundColor=color;
    }  

function setUpMonth(weekDayStart, numDays, monthName){
        var startingIndex = getStartingIndex(monthName);
        for(var i = 1; i<=42; i++){
            document.getElementById(i).innerHTML="";
            document.getElementById(i).style.backgroundColor="#f2f2f2";
        }
    //startingIndex==7 || startingIndex==6 && numsDays==31
        for(var i = startingIndex; i<(numDays+startingIndex); i++){
            document.getElementById(i).innerHTML+=i-(startingIndex-1);
            document.getElementById(i).style.backgroundColor="white";
        }
}
//wow comments
function getStartingIndex(monthName){
    var startingIndex;
    if(monthName=='march' || monthName=='november'){
        startingIndex=1;  }
    if(monthName=='june'){
        startingIndex=2;  }
    if(monthName=='september' || monthName=='december'){
        startingIndex=3;  }
    if(monthName=='january' || monthName=='april' || monthName=='july'){
        startingIndex=4;  }
    if(monthName=='october'){
        startingIndex=5;  }
    if(monthName=='may'){
        startingIndex=6;  }
    if(monthName=='february' || monthName=='august'){
        startingIndex=7;  }
    return startingIndex;
}
