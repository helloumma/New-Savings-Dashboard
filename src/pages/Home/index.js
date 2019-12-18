import React, { Suspense } from 'react'
import Page from '../../layout/Page'
import AltGraph from '../../components/AltGraph'
import Table from '../../components/Table'

const Home = ({ route }) => {
	return (
		<Page>
			<Suspense fallback={<p>Loading</p>}>
				<div class="flex -mx-2">
					<div class="w-1/3 px-2  mb-4">
						<div class="bg-gray-400 h-12">Budgets</div>
					</div>
					<div class="w-1/3 px-2  mb-4">
						<div class="bg-gray-500 h-12">Categories</div>
					</div>
					<div class="w-1/3 px-2  mb-4">
						<div class="bg-gray-400 h-12">test</div>
					</div>
				</div>
				<div class="flex flex-wrap -mx-2  mb-4">
					<div class="w-1/2 px-2">
						<div class=" h-12">
							<AltGraph />
						</div>
					</div>
					<div class="w-1/2 px-2  mb-4">
						<div class=" h-12">
							<Table />
						</div>
					</div>
				</div>
			</Suspense>
		</Page>
	)
}

export default Home
/*
<div class="flex flex-wrap">
				<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 bg-gray-500">
					Budgets
				</div>
				<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 bg-gray-500">
					Categories
				</div>
			</div>
			<div class="flex flex-wrap">
				<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 bg-gray-500">
					<Graph />
				</div>
				<div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 bg-gray-500">
					<Table />
				</div>
			</div>
 */
