#pragma strict 
#pragma downcast

// JavaScript

private var scale : float = 0.005f;

function OnGUI () {

	GUI.Box (Rect (200, 55, 180, 60), "");
	if (GUI.Button (Rect (210, 65, 160, 40), "Reset")) {
		scale = 0.005f;
		for (var child : Transform in transform) {
			if (child.name != "PMTEquipment") {
				child.GetComponent(MeshRenderer).enabled = true;
			} else {
				var children : Component[] = child.GetComponentsInChildren(MeshRenderer);
				for (var component : MeshRenderer in children) {
					component.enabled = true;
				}
			}
		}
	}
	
	GUI.Box (Rect (200, 10, 180, 35), "Size");
	scale = GUI.HorizontalSlider (Rect (205, 30, 170, 15), scale, 0f, 0.01f);
	transform.localScale = new Vector3 (scale, scale, scale);
	
	GUI.Box (Rect (10, 10, 180, 325), "Loader Menu");

	if (GUI.Button (Rect (20, 35, 160, 40), "Cryostat")) {
		for (var child : Transform in transform) {
			if (child.name == "Cryostat" || child.name == "Endcap") {
				if (child.GetComponent(MeshRenderer).enabled == true) {
					child.GetComponent(MeshRenderer).enabled = false;
				} else {
					child.GetComponent(MeshRenderer).enabled = true;
				}
			}
		}
	}
	if (GUI.Button (Rect (20, 85, 160, 40), "Cathode")) {
		for (var child : Transform in transform) {
			if(child.name == "Cathode") {
				if (child.GetComponent(MeshRenderer).enabled == true) {
					child.GetComponent(MeshRenderer).enabled = false;
				} else {  
					child.GetComponent(MeshRenderer).enabled = true;
				}
			}
		}
	}
	if (GUI.Button (Rect (20, 135, 160, 40), "Feedthroughs")) {
		for (var child : Transform in transform) {
			if (child.name == "Feedthroughs") {
				if (child.GetComponent(MeshRenderer).enabled == true) {
					child.GetComponent(MeshRenderer).enabled = false;
				} else {
					child.GetComponent(MeshRenderer).enabled = true;
				}
			}
		}
	}
	if (GUI.Button (Rect (20, 185, 160, 40), "Field Cage")) {
		for (var child : Transform in transform) {
			if (child.name == "FieldCage") {
				if (child.GetComponent(MeshRenderer).enabled == true) {
					child.GetComponent(MeshRenderer).enabled = false;
				} else {
					child.GetComponent(MeshRenderer).enabled = true;
				}
			}
		}
	}
	if (GUI.Button (Rect (20, 235, 160, 40), "Wire Plane")) {
		for (var child : Transform in transform) {
			if (child.name == "WirePlane" || child.name == "Racks") {
				if(child.GetComponent(MeshRenderer).enabled == true) {
					child.GetComponent(MeshRenderer).enabled = false;
				} else {
					child.GetComponent(MeshRenderer).enabled = true;
				}
			}
			if (child.name == "PMTEquipment") {
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
	if (GUI.Button (Rect (20, 285, 160, 40), "TPC Frame")) {
		for (var child : Transform in transform) {
			if (child.name == "TPCFrame") {
				if (child.GetComponent(MeshRenderer).enabled == true) {
					child.GetComponent(MeshRenderer).enabled = false;
				} else {
					child.GetComponent(MeshRenderer).enabled = true;
				}
			}
		}
	}
};