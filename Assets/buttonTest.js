#pragma strict 
#pragma downcast


// JavaScript
function OnGUI () {
    // Make a background box
    GUI.Box (Rect (10,10,100,400), "Loader Menu");

    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
    if (GUI.Button (Rect (20,40,80,20), "Cryostat")) {
        for(var child : Transform  in transform)
        {
          if(child.name == "Cryostat_001" || child.name == "Endcap"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
        }
    };

    // Make the second button.
    if (GUI.Button (Rect (20,70,80,20), "Cathode")) {
        for(var child : Transform  in transform)
        {
          if(child.name == "Cathode"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
        } 
    };
    if (GUI.Button (Rect (20,100,80,20), "Feedthroughs")) {
        for(var child : Transform  in transform)
        {
          if(child.name == "Feedthroughs"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
        } 
    }
if (GUI.Button (Rect (20,130,80,20), "Field Cage")) {
        for(var child : Transform  in transform)
        {
          if(child.name == "Field_Cage"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
         }
   }
   if (GUI.Button (Rect (20,160,80,20), "Wire Planes")) {
        for(var child : Transform  in transform)
        {
          if(child.name == "Wire_plane"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
         }
   }
   if (GUI.Button (Rect (20,190,80,20), "TPC Frame")) {
        for(var child : Transform  in transform)
        {
          if(child.name == "TPC_CAGE"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
         }
   }
};
