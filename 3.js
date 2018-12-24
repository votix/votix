function doClrInput() {
	document.getElementById('txtInput').value = "";
	document.getElementById("txtInput").focus();
}

function HTMLEncode() {
	var i = G('txtInput').value,
		db = G('chkDouble').checked;
	G('txtInput').value = Encoder.htmlEncode(i, db);
}

function HTMLDecode() {
	var i = G('txtInput').value;
	G('txtInput').value = Encoder.htmlDecode(i);
}
(function() {
	var en = '';
	G('txtInput').value = unescape(en);
	var db = G('chkDouble').checked;
	G('txtEncoded').value = Encoder.htmlEncode(unescape(en), db);
	G('txtEncoded').value = Encoder.htmlDecode(G('txtEncoded').value);
})