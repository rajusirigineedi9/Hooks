import React from 'react'
import SampleCSS2 from './SampleCSS2'

import styles from './SampleCSS.module.css'
function SampleCSS() {
    return (
        <div>
            <div ClassName={styles.applyS}>
            <h1>Hello</h1>
            </div>
            <SampleCSS2/>
            
          
        </div>
    )
}

export default SampleCSS
