import React from 'react'

export default function FaqItems({ itemDetails }) {
    let { itemsdata, currentId, setCurrentId } = itemDetails;
    return (
        <div>
            <div className='faqItems'>
                <h2 onClick={() => setCurrentId(itemsdata.id)}>{itemsdata.question}</h2>
                <p className={(currentId == itemsdata.id) ? 'activeAns' : ''}>{itemDetails.itemsdata.answer}</p>
            </div>
        </div>
    )
}
