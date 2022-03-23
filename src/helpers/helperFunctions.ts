export const encodeURIAndComponent=(url:string)=> {
	return url.replace(/&/g,"%26");
};