import React from 'react'
import useDarkMode from 'use-dark-mode'

const AccForm = () => {
	const { value } = useDarkMode(false)
	return (
		<div
			class={
				value
					? 'border-gray-400 bg-white rounded-b  p-4 flex flex-col justify-between'
					: 'border-gray-400 bg-gray-700 rounded-b  p-4 flex flex-col justify-between '
			}
		>
			<div class="w-full">
				<label class="block">
					<span class={value ? 'text-gray-700' : 'text-white'}>
						Account Name Name
					</span>
					<input
						class="form-input mt-1 block w-full"
						placeholder="Name of Account"
					/>
				</label>

				<div class="block mt-4">
					<span class={value ? 'text-gray-700' : 'text-white'}>
						Account Type
					</span>
					<div class="block mt-2">
						<label class="inline-flex items-center">
							<input
								type="radio"
								class="form-radio text-red-400"
								name="accountType"
								value="savings"
							/>
							<span class="block ml-2">Savings</span>
						</label>
						<label class="inline-flex items-center ml-6">
							<input
								type="radio"
								class="form-radio text-red-400"
								name="accountType"
								value="currentAccount"
							/>
							<span class="ml-2">Current Account</span>
						</label>
						<label class="inline-flex items-center ml-6">
							<input
								type="radio"
								class="form-radio text-red-400"
								name="accountType"
								value="isa"
							/>
							<span class="ml-2">ISA</span>
						</label>
					</div>
				</div>

				<label class="block mt-4">
					<span class={value ? 'text-gray-700' : 'text-white'}>
						Category
					</span>
					<select class="form-select mt-1 block w-full">
						<option>Birthday</option>
						<option>Wedding</option>
						<option>Holiday</option>
						<option>Home</option>
					</select>
				</label>

				<div class="block mt-4">
					<span class={value ? 'text-gray-700' : 'text-white'}>
						Budgets
					</span>
					<div class="mt-2">
						<label class="inline-flex items-center">
							<input
								type="checkbox"
								class="form-checkbox text-red-400 outline-none"
							/>
							<span class="ml-2">Music</span>
						</label>
						<label class="inline-flex items-center">
							<input
								type="checkbox"
								class="form-checkbox text-red-400"
							/>
							<span class="ml-2">Phone</span>
						</label>
						<label class="inline-flex items-center">
							<input
								type="checkbox"
								class="form-checkbox text-red-400"
							/>
							<span class="ml-2">Health</span>
						</label>

						<label class="inline-flex items-center">
							<input
								type="checkbox"
								class="form-checkbox text-red-400"
							/>
							<span class="ml-2">Shopping</span>
						</label>
						<label class="inline-flex items-center">
							<input
								type="checkbox"
								class="form-checkbox text-red-400"
							/>
							<span class="ml-2">Security</span>
						</label>
						<label class="inline-flex items-center">
							<input
								type="checkbox"
								class="form-checkbox text-red-400"
							/>
							<span class="ml-2">Gaming</span>
						</label>

						<label class="inline-flex items-center">
							<input
								type="checkbox"
								class="form-checkbox text-red-400"
							/>
							<span class="ml-2">Internet</span>
						</label>
						<label class="inline-flex items-center">
							<input
								type="checkbox"
								class="form-checkbox text-red-400"
							/>
							<span class="ml-2">Home</span>
						</label>
						<label class="inline-flex items-center">
							<input
								type="checkbox"
								class="form-checkbox text-red-400"
							/>
							<span class="ml-2">Misc.</span>
						</label>
					</div>
				</div>
				<div>
					<label class="block mt-4">
						<span class={value ? 'text-gray-700' : 'text-white'}>
							Savings Per Month
						</span>
						<input
							class="form-input mt-1 block w-full"
							placeholder="Enter amount here"
						/>
					</label>
				</div>
				<div>
					<button
						class={
							value
								? 'block mt-4 bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded'
								: 'block mt-4 bg-gray-800 hover:bg-gray-900 text-gray-600 font-bold py-2 px-4 rounded'
						}
					>
						Save
					</button>
				</div>
			</div>
		</div>
	)
}

export default AccForm
