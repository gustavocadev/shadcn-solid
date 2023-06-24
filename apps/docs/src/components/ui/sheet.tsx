import { Dialog as DialogPrimitive } from "@kobalte/core"
import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import { mergeProps, splitProps, type ParentComponent } from "solid-js"
import { CloseIcon } from "../close"

export const Sheet = DialogPrimitive.Root
export const SheetTrigger = DialogPrimitive.Trigger
export const SheetPortal = DialogPrimitive.Portal

export const SheetOverlay: ParentComponent<
	DialogPrimitive.DialogOverlayProps
> = (props) => {
	const [local, rest] = splitProps(props, ["class"])
	return (
		<DialogPrimitive.Overlay
			class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-fade-out data-[expanded]:animate-fade-in"
			classList={{
				[local.class!]: local.class !== undefined,
			}}
			{...rest}
		/>
	)
}

const sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg", {
	variants: {
		side: {
			top: "inset-x-0 top-0 border-b animate-slide-out-up data-[expanded]:animate-slide-in-up",
			bottom: "inset-x-0 bottom-0 border-t animate-slide-out-down data-[expanded]:animate-slide-out-down",
			left: "inset-y-0 left-0 h-full w-3/4 border-r animate-slide-out-left data-[expanded]:animate-slide-in-left sm:max-w-sm",
			right: "inset-y-0 right-0 h-full w-3/4  border-l animate-slide-out-right data-[expanded]:animate-slide-in-right sm:max-w-sm",
		},
	},
	defaultVariants: {
		side: "right",
	},
})

export const SheetContent: ParentComponent<
	DialogPrimitive.DialogContentProps & VariantProps<typeof sheetVariants>
> = (props) => {
	const merge = mergeProps(
		{ side: "right" } as VariantProps<typeof sheetVariants>,
		props
	)
	const [local, rest] = splitProps(merge, ["class", "children", "side"])

	return (
		<SheetPortal>
			<SheetOverlay />
			<DialogPrimitive.Content
				class={sheetVariants({ side: local.side })}
				{...rest}
				classList={{
					[local.class!]: local.class !== undefined,
				}}
			>
				{local.children}
				<DialogPrimitive.CloseButton class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
					<CloseIcon />
					<span class="sr-only">Close</span>
				</DialogPrimitive.CloseButton>
			</DialogPrimitive.Content>
		</SheetPortal>
	)
}
