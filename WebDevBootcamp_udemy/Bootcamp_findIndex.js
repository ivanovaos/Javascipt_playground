function findIndex(arr, callback) {
	var idx = -1;
	for (var i = 0; i < arr.length; i++){ 
		if (callback(arr[i], i, arr)) {
		    idx = i;
		    break;
		}
	}
	return idx;
}

var cond = 6;

findIndex(arr, function(elem, index, arr) {
	if (elem === cond) {
		return true;
	}
	return false;
});