// @flow
export default class http {
	href: string;
	method: string;
	data: Object;
	constructor(href:string,options:Object) {
		this.href = href;
		this.method = !options ? 'GET' : options.method ? options.method : 'GET'
		this.data = !options ? {} : options.data ? options.data : {}
	}
	get(callback) {
		let queryStr = '?';
		for(let key in this.data) {
			queryStr += `${key}=${this.data[key]}&`
		}
		queryStr=queryStr.replace(/\&$/,'');
		const xhr = new XMLHttpRequest(),
			  method = 'GET',
			  url = this.href,
			  promise = new Promise ((res,rej) => {
			  	xhr.open(method,url,true);
				xhr.onreadystatechange = () => {
					if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
						return res(xhr.responseText)
					} else if (xhr.status === 404) {
						return rej('404 Error')
					}
				};
				xhr.send();
			});
		if (callback) {
			return promise.then(data => callback(data), e => { throw e; })
		} else {
			return promise;
		}
	}
	post(callback) {
		const xhr = new XMLHttpRequest(),
			  method = 'GET',
			  url = this.href,
			  promise = new Promise ((res,rej) => {
			  	xhr.open(method,url,true);
				xhr.onreadystatechange = () => {
					if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
						return res(xhr.responseText)
					} else if (xhr.status === 404) {
						return rej('404 Error')
					}
				};
				xhr.send();
			});
		if (callback) {
			return promise.then(data => callback(data), e => { throw e; })
		} else {
			return promise;
		}
	}
}