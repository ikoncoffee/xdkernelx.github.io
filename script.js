function forceStyle() {
	var widget_frame = document.getElementById("resizeSub").children[0].children[0];
	widget_frame.id = "rainbow_trial";
	console.log(widget_frame);
	console.log(widget_frame.id);
	var inner_doc = widget_frame.contentDocument || widget_frame.contentWindow.document;
  console.log(inner_doc);
}
