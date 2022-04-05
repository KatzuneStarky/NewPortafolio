import React from 'react'
import { Link } from 'react-router-dom'


function SocialIcons({ content, icon, background, path }) {
    return (
        <a href={path} target="_blank" className='link'>
            <article className='icon'>
                <span className="background" style={{ background: `${background}` }}></span>
                <i className='icon-icon'>
                    {icon}
                </i>
                <span className="content">
                    {content}
                </span>
            </article>
        </a>
    )
}

export default SocialIcons