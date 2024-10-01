import { faAdd } from "@/node_modules/@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@/node_modules/@fortawesome/react-fontawesome/index";
import Link from "@/node_modules/next/link";

const TableCell = (
{
    headsTh1,
    headsTh2,
    headsTh3,
    headsTh4,
    headsTh5,
    headerTitle1,
    headerTitle2,
    headerTitle3,
    headerTitle4,
    headerTitle5,
    headerTitle6,
    headerTitle7,
    headerTitle8,
    headerTitle9,
    headerTitle10,
    headerTitle11, 

} 
    
) => {

    return (
    <>
        <div className=" border bg-white  text-gray-950 py-1 rounded-lg">
            <div className="px-3">
                <div className="flex gap-5 py-1">
                    <div className="px-3  cursor-pointer bg-gray-100 rounded-md content-center">{headsTh1}All</div>
                    <div className="p-1 cursor-pointer bg-gray-100 rounded-md">{headsTh2}Active</div>
                    <div className="p-1 cursor-pointer bg-gray-100 rounded-md">{headsTh3}Draft</div>
                    <div className="p-1 cursor-pointer bg-gray-100 rounded-md">{headsTh4}Archived</div>
                    <div className="px-3 cursor-pointer bg-gray-100 rounded-md">{headsTh5}...</div>
                    <div className="p-1 cursor-pointer  rounded-md"> <FontAwesomeIcon className='font-bold' icon={faAdd}/> </div>
                </div>
            </div>
            <div className="overflow-auto w-full">
                <table className="min-w-full ">
                        <thead className="bg-gray-50 ">
                            <tr className="border-t border-b  border-gray-300">
                                <th className="p-2">
                                    <input type="checkbox" />
                                </th>
                                <th className="text-start p-2 w-24 text-nowrap">{headerTitle1}Src </th>
                                <th className="text-start p-2 w-64 text-nowrap">{headerTitle2}Produit </th>
                                <th className="text-start p-2 w-24 text-nowrap">{headerTitle3}status </th>
                                <th className="text-start p-2 w-40 text-nowrap">{headerTitle4}Iventory </th>
                                <th className="text-start p-2 w-36 text-nowrap">{headerTitle5}sales channels </th>
                                <th className="text-start p-2 w-24 text-nowrap">{headerTitle6}Markets </th>
                                <th className="text-start p-2 w-96 text-nowrap">{headerTitle7}Category </th>
                                <th className="text-start p-2 text-nowrap">{headerTitle8}Type </th>
                                <th className="text-start p-2 text-nowrap">{headerTitle9}Vendor </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" border-t  border-gray-300 bg-white h-3">
                                    <td className="leading-loose p-2 text-nowrap content-center">
                                        <input className='input-checkbox' type="checkbox" />
                                    </td>
                                    <td className="leading-loose p-2 text-nowrap">
                                        <div className="h-10 inline-block content-center">
                                            <span className="">
                                                Capelaon
                                            </span>
                                        </div>
                                    </td>

                                <td className="leading-loose p-2 text-nowrap">
                                    <span>0 in stock</span>
                                </td>
                                <td className="leading-loose p-2 text-nowrap">
                                    <span>Active</span>
                                </td>
                                <td className="leading-loose p-2 text-nowrap">2</td>
                                <td className="leading-loose p-2 text-nowrap">2</td>
                                <td className="leading-loose p-2 text-nowrap">—</td>
                                <td className="leading-loose p-2 text-nowrap">Uncategorized Lorem ipsum dolor, sit </td>
                                <td className="leading-loose p-2 text-nowrap">My Store</td>
                                <td className="leading-loose p-2 text-nowrap">My SET</td>
                            </tr>
                            <tr className=" border-t  border-gray-300 bg-white h-3">
                                <td className="leading-loose p-2 text-nowrap">
                                    <input className='input-checkbox' type="checkbox" />
                                </td>
                                <td className="leading-loose p-2 text-nowrap">
                                    <div className="h-10 inline-block content-center">
                                        <span className="">
                                            Capelaon
                                        </span>
                                    </div>
                                </td>
                                <td className="leading-loose p-2 text-nowrap">
                                    <span>0 in stock</span>
                                </td>
                                <td className="leading-loose p-2 text-nowrap">
                                    <span>Active</span>
                                </td>
                                <td className="leading-loose p-2 text-nowrap">2</td>
                                <td className="leading-loose p-2 text-nowrap">2</td>
                                <td className="leading-loose p-2 text-nowrap">—</td>
                                <td className="leading-loose p-2 text-nowrap">Uncategorized Lorem ipsum dolor, sit </td>
                                <td className="leading-loose p-2 text-nowrap">My Store</td>
                                <td className="leading-loose p-2 text-nowrap">My SET</td>
                            </tr>
                        </tbody>
                </table>
            </div>
        </div>
        <div className="mt-3 text-center">
            <p>Learn more about <Link href="#" className="text-sky-700">products</Link> </p>
        </div>
    </>
      );
}
export default TableCell;