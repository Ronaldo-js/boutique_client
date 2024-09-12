import Image from '@/node_modules/next/image';
import Logo from '../img/Corten.png';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@/node_modules/@fortawesome/react-fontawesome/index";
import { faBarChart, faUser } from "@/node_modules/@fortawesome/free-regular-svg-icons/index"
import { faBullseye, faCartShopping, faChartPie, faGift, faHome, faPercentage, faReceipt, faRotate, faTag, faUsers } from '@/node_modules/@fortawesome/free-solid-svg-icons/index';
import Link from '@/node_modules/next/link';



export function SideBar(){
    return(
        <div className="sideBar">
            <ul>
                <Link href={"/"}>
                    <li  className='logo-header'>
                        <picture>
                            <Image
                                src={Logo}
                                alt="Corten +"
                                width={168}
                                height={56}
                                placeholder = 'blur'
                                priority
                            />
                        </picture>        
                    </li>
                </Link>
                <Link href={"/"}><li className='sideBar-items active'><FontAwesomeIcon icon={faHome} className="fa-fw column-gap" />Accueil</li></Link>
                <Link href={"/pages/command"}><li className='sideBar-items'><FontAwesomeIcon icon={faCartShopping} className="fa-fw column-gap" />Commandes</li></Link>
                <Link href={"/pages/product"}><li className='sideBar-items'><FontAwesomeIcon icon={faTag} className="fa-fw column-gap" />Produits</li></Link>

                <Link href={"/pages/customer"}><li className='sideBar-items'><FontAwesomeIcon icon={faUser} className="fa-fw column-gap" />Customers</li></Link>
                <Link href={"/pages/content"}> <li className='sideBar-items'><FontAwesomeIcon icon={faReceipt} className="fa-fw column-gap" />Content</li></Link>
                <Link href={"/pages/analytic"}><li className='sideBar-items'><FontAwesomeIcon icon={faBarChart} className="fa-fw column-gap" />Analytics</li></Link>
                <Link href={"/pages/transfer"}><li className='sideBar-items'><FontAwesomeIcon icon={faRotate} className="fa-fw column-gap" />Transferts</li></Link>
                <Link href={"/pages/gift"}><li className='sideBar-items'><FontAwesomeIcon icon={faGift} className="fa-fw column-gap" />Cartes-cadeaux</li></Link>
                <Link href={"/pages/clients"}><li className='sideBar-items'><FontAwesomeIcon icon={faUsers} className="fa-fw column-gap" />Clients</li></Link>
                <Link href={"/pages/analysis"}><li className='sideBar-items'><FontAwesomeIcon icon={faChartPie} className="fa-fw column-gap" />Analyses de données</li></Link>
                <Link href={"/pages/marketing"}><li className='sideBar-items'><FontAwesomeIcon icon={faBullseye} className="fa-fw column-gap" />Marketing</li></Link>
                <Link href={"/pages/redurection"}><li className='sideBar-items'><FontAwesomeIcon icon={faPercentage} className="fa-fw column-gap" />Réductions</li></Link>
            </ul>
        </div>
    )
}