import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import { GrResume } from "react-icons/gr";

const SocialLinks=()=>{
    const links=[
        {
            id:1,
            child:(
                <>
                    LinkedIn<FaLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/shreya-joshi-134a3a238/',
            style:'rounded-tr-md',
        },
        {
            id:2,
            child:(
                <>
                    Github<FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/Shreya-Joshi23',
        },
        {
            id:3,
            child:(
                <>
                    Resume<GrResume size={30}/>
                </>
            ),
            href:'./resume.pdf',
            style:'rounded-br-md',
            download:true,
        },
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
            <ul>

                {links.map(({id,child,href,style,download})=>(
                    <li key={id}
                    className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'+" "+style}>
                    <a href={href} 
                    className='flex justify-between items-center w-full text-white'
                    download={download}
                    target='_blank'
                    rel='noreferrer'
                    >
                        {child}
                    </a>
                </li>
                ))}

                
            </ul>
        </div>
    )
}

export default SocialLinks;