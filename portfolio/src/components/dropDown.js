import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Squash as Hamburger, Squeeze } from 'hamburger-react'
import content from '../content';
import { Link as ScrollLink } from 'react-scroll'

import Resume from '../assets/Kamyar_Mivehchi_Resume.pdf'
const DropDown = (props) => {
    // const menuToggle = () => {

    //     document.getElementById("myDropdown").classList.remove("hidden");

    // }




    const [isOpen, setOpen] = useState(false)



    return (
        <div className="relative inline-block text-left ">
            <div className="">

                <Hamburger toggled={isOpen} easing="ease-in" toggle={setOpen} hideOutline={true} onToggle={(toggled, e) => {
                    if (toggled) {
                        document.getElementById("myDropdown").classList.remove("hidden");
                    } else {
                        document.getElementById("myDropdown").classList.add("hidden");
                    }

                }} />

                <div id="myDropdown" className="origin-top-right  absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-menu-wave ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div className="py-1 text-xl" role="none">



                        <ScrollLink to={content.nav.links[0].to} smooth={true}>
                            <a href="#" className="  block px-4 py-2 text-base" role="menuitem" tabindex="-1" id="menu-item-0">{content.nav.links[0].text}</a>
                        </ScrollLink>

                        <ScrollLink to={content.nav.links[1].to} smooth={true}>
                            <a href="#" className="  block px-4 py-2 text-base" role="menuitem" tabindex="-1" id="menu-item-0">{content.nav.links[1].text}</a>
                        </ScrollLink>
                        <ScrollLink to={content.nav.links[2].to} smooth={true}>
                            <a href="#" className="  block px-4 py-2 text-base" role="menuitem" tabindex="-1" id="menu-item-0">{content.nav.links[2].text}</a>
                        </ScrollLink>

                        <a href={Resume} target='_blank' rel="noopener noreferrer" className="  block px-4 py-2 text-base" role="menuitem" tabindex="-1" id="menu-item-1">{content.nav.links[3].text}</a>

                        <ScrollLink to={'footer'}>
                            <a href="#" className="  block px-4 py-2 text-base" role="menuitem" tabindex="-1" id="menu-item-2">{content.nav.links[4].text}</a>
                        </ScrollLink>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown