import React from 'react'
import './App.css'

export const App = () => {
	const step = 200 // num msbetween each async op

	const asyncOp1 = makeAsyncOp(1 * step)
	const asyncOp2 = makeAsyncOp(2 * step)
	const asyncOp3 = makeAsyncOp(3 * step)
	const asyncOp4 = makeAsyncOp(4 * step)
	const asyncOp5 = makeAsyncOp(5 * step)
	const asyncOp6 = makeAsyncOp(6 * step)
	const asyncOp7 = makeAsyncOp(7 * step)
	const asyncOp8 = makeAsyncOp(8 * step)
	const asyncOp9 = makeAsyncOp(9 * step)

	/**
	 * This function demonstrates invoking a bunch of Promises using Promise.all + Array.map
	 */
	const asyncTest1 = async (proms: (() => Promise<any>)[]) => {
		console.groupCollapsed('first async run')

		const start = Date.now()

		await Promise.all(proms.map((prom) => prom()))

		const end = Date.now()

		console.groupEnd()

		console.log(`%c ${end - start} ms`, 'color: green')
	}

	/**
	 * This function demonstrates invoking a bunch of Promises using await on each one
	 */
	const asyncTest2 = async () => {
		console.groupCollapsed('second async run')

		const start = Date.now()

		await asyncOp1()
		await asyncOp2()
		await asyncOp3()
		await asyncOp4()
		await asyncOp5()
		await asyncOp6()
		await asyncOp7()
		await asyncOp8()
		await asyncOp9()

		const end = Date.now()

		console.groupEnd()

		console.log(`%c ${end - start} ms`, 'color: red')
	}

	/**
	 * This function demonstrates invoking a bunch of Promises using "for const of"
	 */
	const asyncTest3 = async (proms: (() => Promise<any>)[]) => {
		console.groupCollapsed('third async run')

		const start = Date.now()

		for (const prom of proms) {
			await prom()
		}

		const end = Date.now()

		console.groupEnd()

		console.log(`%c ${end - start} ms`, 'color: red')
	}

	const fireAsyncOps = async () => {
		const proms = [
			asyncOp1,
			asyncOp2,
			asyncOp3,
			asyncOp4,
			asyncOp5,
			asyncOp6,
			asyncOp7,
			asyncOp8,
			asyncOp9,
		]

		await asyncTest1(proms)
		await asyncTest2()
		await asyncTest3(proms)
	}

	console.log('[App] initialized')
	fireAsyncOps()

	return (
		<article>
			<section>
				<p>Hello! Open the Developer Tools, and visit the console tab</p>
			</section>
		</article>
	)
}

const makeAsyncOp = (numMillis: number) => {
	// console.info(`creating ${numMillis} ms async op`)

	return () => {
		console.log(`${numMillis} ms async op start`)

		return new Promise<void>((resolve) => {
			setTimeout(() => {
				console.log(`${numMillis} ms async op end`)
				resolve()
			}, numMillis)
		})
	}
}
