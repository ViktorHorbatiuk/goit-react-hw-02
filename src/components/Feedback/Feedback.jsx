const Feedback = ({ good, neutral, bad, total, positive }) => {
    return (
        <div className="">
            <ul className="">
                <li className="">Good:{good}</li>
                <li className="">Neutral:{neutral}</li>
                <li className="">Bad:{bad}</li>
                <li className="">Total:{total}</li>
                <li className="">Positive:{positive}%</li>
            </ul>
        </div>
    )
}

export default Feedback