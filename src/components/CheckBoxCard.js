import React from "react";
import "../assets/styles/inputCard.css";

const CheckBoxCard = ({ index, activeIndex, setActiveIndex }) => {

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
            <div className="checkbox-container">
                <div className="checkbox">
                    <input type="checkbox" id="checkbox1" />
                    <label htmlFor="checkbox1">選択肢A</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="checkbox2" />
                    <label htmlFor="checkbox2">選択肢B</label>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="checkbox3" />
                    <label htmlFor="checkbox3">その他</label>
                </div>
            </div>

        </div>
    )
}

export default CheckBoxCard;