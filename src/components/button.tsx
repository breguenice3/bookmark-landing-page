
interface Props {
    name: string
}

export default function Button({ name }: Props) {
    return (
        <div>
            <button>{name}</button>
        </div>
    )
}