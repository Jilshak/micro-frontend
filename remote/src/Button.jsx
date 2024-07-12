import useStore from "./store";

function Button() {
    const { count, decrement } = useStore();
    return (
        <div>
            <button style={{ background: "red" }} onClick={() => decrement(1)}>
                Remote Button: {count}
            </button>
        </div>
    )
}

export default Button
