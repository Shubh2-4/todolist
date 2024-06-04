import React, { useState } from 'react'
import { ques } from './Question'
import FaqItems from './FaqItems';

export default function FAQ() {
    let [currentId, setCurrentId] = useState(ques[0].id);
    let items = ques.map((itemsdata, i) => {

        let itemDetails = { itemsdata, currentId, setCurrentId }
        return (
            <FaqItems itemDetails={itemDetails} key={i} />
        )
    })
    return (
        <div>
            <h1>Frequently Asked Questions(FAQs)</h1>
            <div className='faqOuter'>
                {items}
            </div>
        </div>
    )
}
