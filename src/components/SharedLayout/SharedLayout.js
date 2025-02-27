import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HeaderNavigation } from "../Header/HeaderNavigation";

export const SharedLayout = () => {

        return  <>
                        <ToastContainer theme="light"/>
                        
                        <HeaderNavigation/>
                        
                        <main>
                                <div className='container'>
                                        
                                        <Suspense fallback={null}>
                                                <Outlet/>
                                        </Suspense>

                                </div>
                        </main>

                       
                </>
               
}