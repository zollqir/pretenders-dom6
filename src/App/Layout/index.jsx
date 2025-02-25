import React from 'react';
import Box from './Box';
import styles from './Layout.module.scss';

function Layout(props) {
    const {
        nation, magic, dominion, imprisonment, chassis,
        blessEffects, pretenders, footer, debugBar
    } = props;

    return (
        <div className={styles.container}>
            <main>
                <div className={styles.columnsContainer}>
                    <div className={styles.leftColumn}>
                        <Box title="Nation" body={nation} />
                        <Box title="Magic" body={magic} />
                        <Box title="Dominion" body={dominion} />
                        
                        <div className={styles.doubleRow}>
                            <Box title="Imprisonment" body={imprisonment} />
                            <Box title="Chassis" body={chassis} />
                        </div>
                        
                        <Box title="Bless Effects" body={blessEffects} />
                    </div>

                    <div className={styles.rightColumn}>
                        <Box title="Pretenders" body={pretenders} />
                    </div>
                </div>
            </main>
            {footer}
            {debugBar}
        </div>
    );
}

export default Layout;