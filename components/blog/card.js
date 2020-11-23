import React from 'react'
import Link from 'next/link'
import Author from './author'

const Card = (props) => {
    return (
        <Link href='/post'>
            <a className='blog-link'>
                <div className='blog-card'>
                    <img src={props.img} />
                    <span>{props.category}</span>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <div className='author'>
                       <Author img={require('../../images/blog/author/1.png')}/>
                       <Author img={require('../../images/blog/author/3.png')}/>
                       <Author img={require('../../images/blog/author/2.png')}/>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Card