export const encodeURIAndComponent=(url:string)=> {
	return url.replace(/&/g,"%26");
};

export function convertEpochToSpecificTimezone(timeEpoch: number){
	const d = new Date(0);
	d.setUTCSeconds(timeEpoch);
	const returnValue = d.toDateString()?.split(" ");
	returnValue.pop();
	return returnValue.join(" ");
}

export function convertEpochToCurrentTime(timeEpoch: number){
	const d = new Date(0);
	d.setUTCSeconds(timeEpoch);
	return d.toTimeString().split(" ")[0];
}