type Props = {
    children: React.ReactNode
}

export default function Button({ children }: Props) {
    return (
        <button className="bg-lime-400 text-black px-6 py-3 rounded-lg font-medium hover:opacity-90">
            {children}
        </button>
    )
}