import React, { useState } from 'react'
import MoreQuestions from './MoreQuestions'

export default function AskedQuestions() {
    const [queCategory, setQueCategory] = useState([
        {
            category: 'Beginner’s Guide',
            active: true,
            questions: [
                {
                    question: 'What is cryptocurrency? A guide for beginners',
                    answer:
                        'Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus. Sed sodales dapibus vestibulum.',
                },
                {
                    question: 'How does blockchain work?',
                    answer:
                        'Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus.',
                },
                {
                    question: 'What Is An ICO Token And How Does It work?',
                    answer:
                        'Vestibulum nec condimentum dolor. Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus.',
                },
                {
                    question: 'What Is Ripple. Everything You Need To Know',
                    answer:
                        'Cras viverra arcu nec scelerisque ornare. Quisque ut nulla ac eros egestas sollicitudin. Duis ut urna iaculis, tincidunt dui vitae, scelerisque metus. Quisque malesuada non dui id faucibus.',
                },
            ],
        },
        {
            category: 'Mining & Staking',
            active: false,
            questions: [
                {
                    question: 'What is crypto mining and how does it generate coins?',
                    answer:
                        'Crypto mining is the process of validating transactions on a blockchain network using computational power. Miners solve complex mathematical problems to secure the network and are rewarded with newly minted coins.',
                },
                {
                    question: 'What is the difference between Proof of Work and Proof of Stake?',
                    answer:
                        'Proof of Work relies on computational energy to validate blocks, while Proof of Stake allows network participants to validate transactions based on the number of coins they lock up or stake.',
                },
                {
                    question: 'Can I mine cryptocurrency on a personal laptop?',
                    answer:
                        'While technically possible for certain lightweight cryptocurrencies, mining major coins like Bitcoin on a personal computer is no longer profitable due to high hardware requirements and electricity costs.',
                },
                {
                    question: 'How do crypto staking rewards work?',
                    answer:
                        'Staking rewards are distributed to users who lock their tokens to help maintain the security and operations of a Proof of Stake network, similar to earning interest on savings.',
                },
            ],
        },
        {
            category: 'Trading & Investing',
            active: false,
            questions: [
                {
                    question: 'What is the difference between spot trading and futures trading?',
                    answer:
                        'Spot trading involves buying or selling cryptocurrencies for immediate settlement, whereas futures trading involves contracts to buy or sell an asset at a predetermined price at a specified date in the future.',
                },
                {
                    question: 'What are centralized and decentralized exchanges (CEX vs DEX)?',
                    answer:
                        'Centralized exchanges are operated by companies that manage order books and user funds, while decentralized exchanges use smart contracts to allow peer-to-peer trading directly from users wallets.',
                },
                {
                    question: 'What is market capitalization in crypto?',
                    answer:
                        'Market capitalization is calculated by multiplying the total circulating supply of a cryptocurrency by its current price per coin, indicating the total relative size of the asset.',
                },
                {
                    question: 'What is Dollar-Cost Averaging (DCA)?',
                    answer:
                        'Dollar-Cost Averaging is an investment strategy where you invest a fixed amount of money at regular intervals regardless of the price, reducing the impact of market volatility over time.',
                },
            ],
        },
        {
            category: 'Wallets & Security',
            active: false,
            questions: [
                {
                    question: 'What is the difference between a hot wallet and a cold wallet?',
                    answer:
                        'A hot wallet is connected to the internet, making it convenient for frequent transactions, while a cold wallet stays offline on dedicated hardware, providing higher protection against online hacks.',
                },
                {
                    question: 'What is a seed phrase and why is it important?',
                    answer:
                        'A seed phrase is a sequence of 12 to 24 words that stores all the information needed to recover your cryptocurrency wallet. Anyone with access to your seed phrase controls your funds.',
                },
                {
                    question: 'What is two-factor authentication (2FA) for crypto exchanges?',
                    answer:
                        '2FA adds a layer of defense by requiring two separate forms of identification before granting access to your account, usually a password combined with an authenticator app code.',
                },
                {
                    question: 'How can I avoid phishing scams in crypto?',
                    answer:
                        'Never share your private key or seed phrase, double-check website URLs before logging in, avoid clicking suspicious links in emails, and use hardware keys or authenticator apps for login safety.',
                },
            ],
        },
        {
            category: 'NFTs & DeFi',
            active: false,
            questions: [
                {
                    question: 'What is Decentralized Finance (DeFi)?',
                    answer:
                        'DeFi refers to financial applications built on blockchain technology that enable peer-to-peer banking, lending, borrowing, and trading without traditional intermediaries like banks.',
                },
                {
                    question: 'What is a Non-Fungible Token (NFT)?',
                    answer:
                        'An NFT is a unique digital asset representing ownership of a specific item, artwork, or piece of media on the blockchain that cannot be replaced with an identical token.',
                },
                {
                    question: 'What are smart contracts and how do they work?',
                    answer:
                        'Smart contracts are self-executing programs stored on a blockchain that automatically run when predetermined terms and conditions are met, eliminating the need for a trusted third party.',
                },
                {
                    question: 'What is gas fee on the Ethereum network?',
                    answer:
                        'Gas fees are payments made by users to compensate for the computational energy required to process and validate transactions on the Ethereum blockchain.',
                },
            ],
        },
    ])

    // Get the currently active category object
    const activeCategory = queCategory.find((cat) => cat.active) || queCategory[0]

    // Switch active tab state
    const handleCategoryClick = (categoryName) => {
        setQueCategory((prev) =>
            prev.map((cat) => ({
                ...cat,
                active: cat.category === categoryName,
            }))
        )
    }

    return (
        <section className="container mx-auto p-2 py-40 flex flex-col justify-between gap-8 items-center relative">
            <div>
                <h1 className="font-bold text-[34px] text-black text-center">
                    Frequently Asked Questions
                </h1>
                <p className="font-['lato'] text-[#727272] text-center w-[80%] mx-auto">
                    Nullam vestibulum, justo vitae varius interdum, nibh turpis eleifend
                    tellus, sit amet porttitor orci erat vitae odio. Duis sapien metus,
                    egestas rhoncus metus id, dignissim malesuada eros
                </p>
            </div>

            <div className="flex justify-center w-[80%] text-nowrap flex-wrap gap-4 font-bold text-[#727272]">
                {queCategory.map((que) => (
                    <button
                        key={que.category}
                        onClick={() => handleCategoryClick(que.category)}
                        className={`pb-1 ${que.active ? 'text-[#1920E0] border-b-2 border-[#1920E0]' : ''
                            }`}
                    >
                        {que.category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
                {activeCategory?.questions.map((qu, index) => (
                    <div key={index} className='py-4'>
                        <h2 className="font-bold text-black pb-4">{qu.question}</h2>
                        <p className="text-[#727272]">{qu.answer}</p>
                    </div>
                ))}
            </div>
            <MoreQuestions />
        </section>
    )
}