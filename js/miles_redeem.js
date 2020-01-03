
function checkFrame() {
	var temp_frame = document.getElementById("code_widget");
	var innerDoc = temp_frame.contentDocument || temp_frame.contentWindow.document;
	console.log(innerDoc);
}
