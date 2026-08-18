import React from 'react'
import AskedQuestions from '../components/AskedQuestions'
import MessageQuestion from '../components/MessageQuestion'
import PagePath from '../components/PagePath'

export default function FAQ() {
    return (
        <main>
            <PagePath path={'FAQ'} />
            <AskedQuestions />
            <MessageQuestion />
        </main>
    )
}
