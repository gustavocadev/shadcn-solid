import { ToggleButton } from "../ui/toggle"

const ToggleDisabled = () => {
	return (
		<ToggleButton disabled aria-label="Toggle underline">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-4 h-4"
				viewBox="0 0 24 24"
			>
				<path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M7 5v5a5 5 0 0 0 10 0V5M5 19h14"
				/>
			</svg>
		</ToggleButton>
	)
}

export default ToggleDisabled
