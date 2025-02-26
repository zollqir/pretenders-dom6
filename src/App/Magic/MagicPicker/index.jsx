import React from 'react';

import fireIcon from '../../../../public/Path_F.png';
import airIcon from '../../../../public/Path_A.png';
import waterIcon from '../../../../public/Path_W.png';
import earthIcon from '../../../../public/Path_E.png';
import astralIcon from '../../../../public/Path_S.png';
import deathIcon from '../../../../public/Path_D.png';
import natureIcon from '../../../../public/Path_N.png';
import glamourIcon from '../../../../public/Path_G.png';
import bloodIcon from '../../../../public/Path_B.png';

import styles from './MagicPicker.module.scss';

function MagicPicker(props) {
    const {
        f, changeFire,
        a, changeAir,
        w, changeWater,
        e, changeEarth,
        s, changeAstral,
        d, changeDeath,
        n, changeNature,	
        g, changeGlamour,
        b, changeBlood,
    } = props;

    const handleChange = (event) => {
        const level = parseInt(event.target.value, 10);
        const path = event.target.name;
        updateValue(path, level);
    }

    const updateValue = (path, level) => {
        if (level < 0 || level > 10) return;
        
        switch (path) {
        case "f": changeFire(level);   break;
        case "a": changeAir(level);    break;
        case "w": changeWater(level);  break;
        case "e": changeEarth(level);  break;
        case "s": changeAstral(level); break;
        case "d": changeDeath(level);  break;
        case "n": changeNature(level); break;
        case "g": changeGlamour(level);break;
        case "b": changeBlood(level);  break;
        default: break;    
        }
    }

    const handleClick = (event, path, currentValue) => {
        event.preventDefault();
        updateValue(path, currentValue + 1);
    }

    const handleContextMenu = (event, path, currentValue) => {
        // Right click
        event.preventDefault();
        updateValue(path, currentValue - 1);
    }

    const renderPicker = (path, value, icon, alt) => (
        <div className={styles.picker}>
            <button 
                className={styles.iconButton}
                onClick={(e) => handleClick(e, path, value)}
                onContextMenu={(e) => handleContextMenu(e, path, value)}
            >
                <img src={icon} alt={alt} className={styles.pathIcon} />
            </button>
            <div className={styles.inputWrapper}>
                <button 
                    className={styles.arrowButton}
                    onClick={() => updateValue(path, value + 1)}
                >▲</button>
                <input 
                    type="number" 
                    name={path} 
                    onChange={handleChange} 
                    min="0" 
                    max="10"
                    value={value}
                    className={styles.input}
                />
                <button 
                    className={styles.arrowButton}
                    onClick={() => updateValue(path, value - 1)}
                >▼</button>
            </div>
        </div>
    );

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                {renderPicker("f", f, fireIcon, "Fire")}
                {renderPicker("a", a, airIcon, "Air")}
                {renderPicker("w", w, waterIcon, "Water")}
                {renderPicker("e", e, earthIcon, "Earth")}
            </div>
            <div className={styles.section}>
                {renderPicker("s", s, astralIcon, "Astral")}
                {renderPicker("d", d, deathIcon, "Death")}
                {renderPicker("n", n, natureIcon, "Nature")}
                {renderPicker("g", g, glamourIcon, "Glamour")}
                {renderPicker("b", b, bloodIcon, "Blood")}
            </div>
        </div>
    );
}

export default MagicPicker;