#pragma strict 
#pragma downcast

// JavaScript

function OnGUI () {
    // Make a background box
    GUI.Box (Rect (10,10,180,330), "Loader Menu");

    // Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
    if (GUI.Button (Rect (20,40,160,40), "Cryostat")) {
        for(var child : Transform  in transform)
        {
          if(child.name == "Cryostat" || child.name == "Endcap"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
        }
    };

    // Make the second button.
    if (GUI.Button (Rect (20,90,160,40), "Cathode")) {
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
    if (GUI.Button (Rect (20,140,160,40), "Feedthroughs")) {
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
if (GUI.Button (Rect (20,190,160,40), "Field Cage")) {
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
   if (GUI.Button (Rect (20,240,160,40), "Wire Planes")) {
        for(var child : Transform  in transform)
        {
          if(child.name == "Wire_Plane" || child.name == "Racks"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
          if (child.name == "PMT_Equipment") {
         	var childComponents : Component[] = child.GetComponentsInChildren(MeshRenderer);
            for (var component : MeshRenderer in childComponents) {
            	if (component.enabled == true) {
            		component.enabled = false;
            	} else {
            		component.enabled = true;
            	}
            }
          }
         }
   }
   if (GUI.Button (Rect (20,290,160,40), "TPC Frame")) {
        for(var child : Transform  in transform)
        {
          if(child.name == "TPC_Cage"){
            if(child.GetComponent(MeshRenderer).enabled == true)
              child.GetComponent(MeshRenderer).enabled = false;
            else  
              child.GetComponent(MeshRenderer).enabled = true;
          }
         }
   }
};
