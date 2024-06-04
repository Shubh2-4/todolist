import React, { useState } from 'react'
import { tabs } from './Store/tabs'

function Tabbing() {
    let [tab, setTab] = useState(tabs[0])
    // let [khali, setKhali] = useState("");

    // let tabbing = (element) => {
    //     setTab(element);
    // }

    return (
        <div>
            <div className='container'>
                <ul className='d-flex justify-content-center gap-4 list-unstyled'>
                    {tabs.map((ele, index) => {
                        return (
                            <li className=''>
                                <button key={index} onClick={() => setTab(index)} className={(tab === index) ? 'activetab' : ''}>{ele.title}</button>
                            </li>
                        )
                    })}
                </ul>
                {tabs.map((ele, i) => {

                    return (
                        <p className={`menu ${(tab === i) ? "setMenu" : ""} `}>{ele.description}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Tabbing