interface FetchErrorConstructor extends ErrorOptions {
	status: number
	statusText: string
}

export class FetchError extends Error {
	status: number

	constructor({ status, statusText, cause }: FetchErrorConstructor) {
		super(`Status: ${status} (${statusText})`, { cause })
		this.status = status
		this.name = this.constructor.name
	}
}
