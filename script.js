function forceStyle() {
	var widget_frame = document.getElementById("resizeSub").children[0].children[0];
	widget_frame.id = "rainbow_trial";
	console.log(widget_frame);
	console.log(widget_frame.id);
	var inner_doc = document.getElementById("resizeSub").children[0].children[0].contentWindow;
  console.log(inner_doc);
}
