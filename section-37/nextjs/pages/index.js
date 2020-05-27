import React, { Component } from 'react'

export default function Index({ props }) {

        return (
            <div>
                <h1>index jawn</h1>
                <p>{props.props}</p>
            </div>
        )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await res.json()
    return { props: {json} }
}