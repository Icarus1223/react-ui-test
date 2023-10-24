import React, { useState } from "react";
import "../assets/styles/inputCard.css";

const InputCard = ({ index, activeIndex, setActiveIndex }) => {
    const [count, setCount] = useState(0);

    const activeCard = () => {
        setActiveIndex(index);
    }

    return (
        <div className={`input-card${index === activeIndex ? '-active' : ''}`} onClick={activeCard}>
            <label className="card-header">
                質問タイトル質問タイトル
            </label>
            <span className="card-description">
                このタイトルはダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
            </span>
            <div className="text-area">
                {count > 2000 ? <label className="word-count-error" style={{ position: 'absolute', background: 'white', padding: 2, left: 10, top: -10 }}>回答を入力してください</label> : null}
                <textarea
                    className={`text-content${count > 2000 ? '-error' : ''}`}
                    placeholder="回答を入力してください"
                    maxLength={2001}
                    onChange={(event) => { setCount(event.target.value.length) }}
                ></textarea>
                {count > 2000 ? <label className="word-count-error">2000文字以下にしてください</label> : null}
                <label className="word-count">{count}/2000文字</label>
            </div>

        </div>
    )
}

export default InputCard;