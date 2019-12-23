import React, { Suspense } from 'react'
import Page from '../../layout/Page'
import AltGraph from '../../components/AltGraph'
import Table from '../../components/Table'
import Card from '@material-ui/core/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBirthdayCake,
	faHeart,
	faSuitcaseRolling,
	faHome,
	faCaretUp
} from '@fortawesome/free-solid-svg-icons'
const Home = ({ route }) => {
	return (
		<Page>
			<Suspense fallback={<p>Loading</p>}>
				<div class="flex -mx-2 text-center">
					<div class="w-1/3 px-2  mb-4">
						<Card>
							<div class="bg-gray-400">
								<p class="text-2xl">Budgets</p>
								<div class="flex  h-10">
									<div class="w-1/2">
										<p class="text-xl">£20,029</p>
									</div>
									<div class="w-1/2">
										<p class="text-base">
											<FontAwesomeIcon
												icon={faCaretUp}
												size="lg"
												color="green"
											/>{' '}
											2% from last 7 days
										</p>
									</div>
								</div>
							</div>
						</Card>
					</div>
					<div class="w-1/3 px-2  mb-4">
						<Card>
							<div class="bg-gray-500 text-center">
								<p class="text-2xl">Categories</p>
								<div class="flex">
									<div class="w-1/4">
										<FontAwesomeIcon
											icon={faBirthdayCake}
										/>
										<br />
										£1,203
									</div>
									<div class="w-1/4">
										<FontAwesomeIcon icon={faHeart} />
										<br />
										£6,201
									</div>
									<div class="w-1/4">
										<FontAwesomeIcon
											icon={faSuitcaseRolling}
										/>
										<br />
										£4,201
									</div>
									<div class="w-1/4">
										<FontAwesomeIcon icon={faHome} />
										<br />
										£450
									</div>
								</div>
							</div>
						</Card>
					</div>
					<div class="w-1/3 px-2  mb-4">
						<Card>
							<div class="bg-gray-400 h-12">test</div>
						</Card>
					</div>
				</div>
				<div class="flex flex-wrap -mx-2  mb-4">
					<div class="w-1/2 px-2">
						<Card>
							<AltGraph />
						</Card>
					</div>
					<div class="w-1/2 px-2  mb-4">
						<Table />
					</div>
				</div>
			</Suspense>
		</Page>
	)
}

export default Home
