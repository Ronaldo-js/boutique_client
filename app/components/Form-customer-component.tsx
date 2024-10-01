import  { FontAwesomeIcon } from "@/node_modules/@fortawesome/react-fontawesome/index";
import { faPen } from "@/node_modules/@fortawesome/free-solid-svg-icons/index";


const FormCustomer = () =>{


    return (
        <>
            <form action="" className="form w-full">
                 <div className="w-[800] flex-row justify-center md:flex gap-7">     {/*container formulaire */}
                    <div className="max-w-[500px] w-600px">  {/*container formulaire left*/}
                        <div className="flex flex-col gap-y-1 border-gray-200 shadow-sm bg-white rounded-lg mb-4">  {/*container formulaire top*/}
                            <h1 className="p-3 font-medium">Customer overview</h1>
                            <p></p>
                            <div className="flex gap-4 p-3">
                                <div className="data w-2/4 ">
                                    <label className="block" htmlFor="Firstname">First name</label>
                                    <input type="text" className="w-full border rounded-md py-1 pl-4 pr-15"/>
                                </div>
                                <div className="data w-2/4 ">
                                    <label className="block" htmlFor="Lastname">Last name</label>
                                    <input type="text" className="w-full border rounded-md py-1 pl-4 pr-15"/>
                                </div>
                            </div>
                            <div className="p-3">
                                <label className="block" htmlFor="Language">Language</label>
                                <select className="w-full border rounded-md py-1 pl-4 pr-15">
                                    <option value="1">- - -</option>
                                    <option value="1">English</option>
                                </select>
                            </div>
                            <div className="p-3">
                                <label className="block" htmlFor="Email">Email</label>
                                <input type="text" className="w-full border rounded-md py-1 pl-4 pr-15"/>
                            </div>
                            <div className="flex flex-col p-3">
                                <label className="block" htmlFor="Phone">Phone number</label>
                                <div className="flex  gap-3 justify-between">
                                    <div className="data">
                                        <input type="text" className="w-20 border rounded-md py-1 pl-4 pr-15"/>
                                    </div>
                                    <div className="data w-full flex-grow">
                                        <input type="text"  className="w-full border rounded-md py-1 pl-4 pr-15"/>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3">
                                <input type="checkbox" />
                                <label htmlFor="Customer"> Customer agreed to receive marketing emails.</label>
                            </div>

                            <div className="p-3">
                                <input type="checkbox" />
                                <label htmlFor="Customer"> Customer agreed to receive SMS marketing text messages.</label>
                            </div>

                            <div className="text bg-[#F7F7F7] border-t  rounded-bl-md rounded-br-md">
                                <p className="p-3">
                                    You should ask your customers for permission before you subscribe them to your marketing emails or SMS.
                                </p>
                            </div>
                        </div>

                        <div className="border-gray-200 shadow-sm bg-white rounded-md mb-4">  {/*container formulaire bottom*/}
                            <div className="p-3">
                                <h1 className=" font-medium">Default address</h1>
                                <p className="text-sm">
                                    The primary address of this customer
                                </p>
                            </div>

                            <div className="">
                                <div className="p-3">
                                    <label htmlFor="Country" className="block">
                                        Country
                                    </label>
                                    <select className="border rounded-md w-full py-1 pl-4 pr-15">
                                        <option value="A">Madagascar</option>
                                        <option value="B">France</option>
                                        <option value="C">Etats-Unis</option>
                                    </select>
                                </div>
                                <div className="flex gap-4 p-4">
                                    <div className="w-2/4">
                                        <label htmlFor="" className="block">
                                            First name
                                        </label>
                                        <input type="text" className="w-full border rounded-md py-1 pl-4 pr-15" />
                                    </div>
                                    <div className="w-2/4">
                                     <label htmlFor="" className="block">
                                            Last name
                                        </label>
                                        <input type="text" className="w-full border rounded-md py-1 pl-4 pr-15" />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="company">
                                        <label htmlFor="" className="block">Company</label>
                                        <input type="text" className="w-full border rounded-md py-1 pl-4 pr-15"/>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="Address">
                                        <label htmlFor="" className="block">Address</label>
                                        <input type="text" className="w-full border rounded-md py-1 pl-4 pr-15" />
                                    </div>
                                </div>

                                <div className="apart p-4">
                                    <label htmlFor="" className="block">Apartement, suite, etc</label>
                                    <input type="text" className="w-full border rounded-md py-1 pl-4 pr-15" />
                                </div>

                                <div className="postal-code p-4">
                                    <div className="flex gap-4">
                                        <div className="w-2/4">
                                            <label htmlFor="" className="block">Postal code</label>
                                            <input type="text" className="w-full border rounded-md py-1 pl-4 pr-15" />
                                        </div>
                                        <div className="w-2/4">
                                            <label htmlFor="" className="block">city</label>
                                            <input type="text" className="w-full border rounded-md py-1 pl-4 pr-15" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col p-4">
                                    <label className="block" htmlFor="Phone">Phone </label>
                                    <div className="flex  gap-3 justify-between">
                                        <div className="data">
                                            <input type="text" className="w-20 border rounded py-1 pl-4 pr-15"/>
                                        </div>
                                        <div className="data w-full flex-grow">
                                            <input type="text"  className="w-full border rounded-md py-1 pl-4 pr-15"/>
                                        </div>
                                    </div>
                                
                                </div>
                                
                            </div>

                            <div className="p-4">
                                <div className="">
                                    <label htmlFor="">Tax setting</label>
                                    <select name="" id="" className="w-full border rounded-md py-1 pl-4 pr-15">

                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                        
                                    </select>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="max-w-[260px] w-[280px]">  {/*container formulaire Right*/}
                       
                        <div className="notes">
                            <div className="title bg-white mb-4 p-4 rounded-lg">
                                <div className="flex justify-between">
                                    <h1 className="font-medium">Notes </h1> 
                                    <p> <FontAwesomeIcon icon={faPen} className="text-gray-500" /></p>
                                </div>
                                <p>
                                    Notes are private and won't be shared with the customer.
                                </p>
                            </div>
                            <div className="tags rounded-lg bg-white p-1">
                                <div className="flex justify-between bg-white px-4">
                                    <div className="mb-1">
                                        <label className="title block font-medium">
                                            Tags
                                        </label>
                                    </div>
                                    <p><FontAwesomeIcon icon={faPen} className="text-gray-500" /></p>
                                </div>
                                <div className="">
                                    <input type="text" className="w-full py-1 pl-4 pr-15 border rounded-md"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )

}

export default FormCustomer;