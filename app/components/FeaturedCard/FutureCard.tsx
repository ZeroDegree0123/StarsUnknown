import Link from 'next/link'
import React from 'react'

interface Card {
    image: string
    name: string
    url: string
}

const FeaturedCard = ({ image, name, url }: Card) => {
    return (
        <Link className='' href={url}>
            <img className='' src={image} alt="" />
            <h2 className=''>{name}</h2>
        </Link>

    )
}

export default FeaturedCard;