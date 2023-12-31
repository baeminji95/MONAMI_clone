import { useState } from "react"
import { Link } from "react-router-dom"

const langs = [
    { name: 'KOR', img: 'img/lang_kor.gif', alt: "한국 국기" },
    { name: 'ENG', img: 'img/lang_eng.gif', alt: "미국 국기" }
]
export default function Header() {
const [selectedLang, setSelectedLang] = useState("KOR")

function select() {
    
}

    return (
        <>
            <header id="header" className="w-[100%] h-16 flex justify-between z-20 items-center 
        px-7 py-4 fixed top-0 border-b-[1px] bg-white
        sm:px-3">

                <div className="flex justify-center items-center gap-3">
                    <ul id="langBox" className="relative w-20 h-6 flex flex-col gap-2 border border-gray-300 rounded-md pt-[0.3rem] bg-white overflow-hidden duration-[0.5s] ease-in-out">
                        <li onClick={select}>
                            {langs.map((lang) => (
                                <div key={lang.name}
                                    className="flex px-2 hover:cursor-default">
                                    <img className="object-none" src={lang.img} />
                                    <span className="text-[11px] ml-2">
                                        {lang.name}
                                    </span>
                                </div>
                            ))}
                        </li>

                        <svg id="langBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-2 self-center pl-3 fill-gray-500 cursor-pointer
                        absolute top-[8px] right-3 scale-y-[-1]"
                        >
                            <path
                                d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                        </svg>
                    </ul>
                    <div id="sns" className="flex items-center gap-2">
                <Link to="https://www.facebook.com/monami1960/?locale=ko_KR">
                    <img src="img\sns_facebook.gif" alt="페이스북"
                        className="hover:cursor-pointer"/>
                </Link>
                <Link to="https://www.instagram.com/monami_official/?hl=ko">
                    <img src="img\sns_insta.gif" alt="인스타그램"
                        className="hover:cursor-pointer"/>
                </Link>
            </div>
                </div>
                <div>
            <ul className="flex items-center gap-2 text-gray-400 mx-4 text-[0.7rem]">
                <li>
                    <Link to="#">
                        HOME</Link>
                </li>
                <li><img src="img\tm_bar.gif" alt="tm_bar"/></li>
                <li>
                    <Link to="#sitemap">
                        SITE MAP</Link>
                </li>
                <li><img src="img\tm_bar.gif" alt="tm_bar"/></li>
                <li>
                    <Link to="#contactus">
                        CONTACT US</Link>
                </li>
            </ul>
        </div>
            </header>
        </>
    )
}
