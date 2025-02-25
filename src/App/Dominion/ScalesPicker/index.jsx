import React from 'react';
import styles from './ScalesPicker.module.scss';

import orderIcon from '../../../../public/order.png';
import turmoilIcon from '../../../../public/turmoil.png';
import productivityIcon from '../../../../public/productivity.png';
import slothIcon from '../../../../public/sloth.png';
import heatIcon from '../../../../public/heat.png';
import coldIcon from '../../../../public/cold.png';
import growthIcon from '../../../../public/growth.png';
import deathIcon from '../../../../public/death.png';
import luckIcon from '../../../../public/luck.png';
import misfortuneIcon from '../../../../public/misfortune.png';
import magicIcon from '../../../../public/magic.png';
import drainIcon from '../../../../public/drain.png';
import dominionCandleIcon from '../../../../public/dominioncandle.png';

function ScalesPicker(props) {
    const {
        changeDominion,
        changeOrder,
        changeProductivity,
        changeHeat,
        changeGrowth,
        changeFortune,
        changeMagic,
        dominion,
        scalelimits,
        scales,
    } = props;

    const {
        order,
        productivity,
        heat,
        growth,
        fortune,
        magic
    } = scales;

    const handleDominion = (event) => {
        const level = parseInt(event.target.value, 10);
        if (level >= 1 && level <= 10) {
            changeDominion(level);
        }
    };

    const updateValue = (scale, value) => {
        if (value < -3 || value > 3) return;
        
        switch (scale) {
            case "order": changeOrder(value); break;
            case "productivity": changeProductivity(value); break;
            case "heat": changeHeat(value); break;
            case "growth": changeGrowth(value); break;
            case "fortune": changeFortune(value); break;
            case "magic": changeMagic(value); break;
            default: break;
        }
    };

    const handleClick = (event, scale, currentValue) => {
        event.preventDefault();
        updateValue(scale, currentValue + 1);
    };

    const handleContextMenu = (event, scale, currentValue) => {
        event.preventDefault();
        updateValue(scale, currentValue - 1);
    };

    const renderScalePicker = (scale, value, positiveIcon, negativeIcon, alt) => (
        <div className={styles.picker}>
            <button 
                className={styles.iconButton}
                onClick={(e) => handleClick(e, scale, value)}
                onContextMenu={(e) => handleContextMenu(e, scale, value)}
            >
                <img 
                    src={value >= 0 ? positiveIcon : negativeIcon} 
                    alt={alt} 
                    className={styles.scaleIcon} 
                />
            </button>
            <div className={styles.inputWrapper}>
                <button 
                    className={styles.arrowButton}
                    onClick={() => updateValue(scale, value + 1)}
                >▲</button>
                <input 
                    type="number"
                    value={value}
                    onChange={(e) => updateValue(scale, parseInt(e.target.value, 10))}
                    className={styles.input}
                    min="-3"
                    max="3"
                />
                <button 
                    className={styles.arrowButton}
                    onClick={() => updateValue(scale, value - 1)}
                >▼</button>
            </div>
        </div>
    );

    return (
        <div className={styles.container}>
            <div className={styles.dominion}>
                <button 
                    className={styles.dominionButton}
                    onClick={() => handleDominion({ target: { value: dominion + 1 }})}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        handleDominion({ target: { value: dominion - 1 }});
                    }}
                >
                    <img 
                        src={dominionCandleIcon} 
                        alt="Dominion" 
                        className={styles.dominionIcon} 
                    />
                </button>
                <div className={styles.inputWrapper}>
                    <button 
                        className={styles.arrowButton}
                        onClick={() => handleDominion({ target: { value: dominion + 1 }})}
                    >▲</button>
                    <input 
                        type="number" 
                        value={dominion}
                        onChange={handleDominion}
                        className={styles.dominionInput}
                        min="1"
                        max="10"
                    />
                    <button 
                        className={styles.arrowButton}
                        onClick={() => handleDominion({ target: { value: dominion - 1 }})}
                    >▼</button>
                </div>
            </div>
            <div className={styles.scales}>
                {renderScalePicker("order", order, orderIcon, turmoilIcon, "Order")}
                {renderScalePicker("productivity", productivity, productivityIcon, slothIcon, "Productivity")}
                {renderScalePicker("heat", heat, heatIcon, coldIcon, "Heat")}
                {renderScalePicker("growth", growth, growthIcon, deathIcon, "Growth")}
                {renderScalePicker("fortune", fortune, luckIcon, misfortuneIcon, "Luck")}
                {renderScalePicker("magic", magic, magicIcon, drainIcon, "Magic")}
            </div>
        </div>
    );
}

export default ScalesPicker;