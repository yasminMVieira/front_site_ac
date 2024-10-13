
import React, { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import { Link } from 'react-router-dom';

export default function Sidebarr() {
    const [visible, setVisible] = useState<boolean>(false);
    const btnRef1 = useRef<any>(null);

    return (
      <div  className="card flex justify-content-left">
      {/* Botão para abrir a Sidebar */}
      <Button icon="pi pi-bars" onClick={() => setVisible(true)} className="p-mr-2" />
      
        <div className="card flex justify-content-center">
            <Sidebar
                visible={visible}
                onHide={() => setVisible(false)}
                content={({ closeIconRef, hide }) => (
                    <div className="min-h-screen flex relative lg:static surface-ground">
                        <div id="app-sidebar-2" className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}>
                            <div className="flex flex-column h-full">
                                <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                                    <img alt="logo" src={`${process.env.PUBLIC_URL}/logo_acolito.png`} height="100" className="mr-2"></img>
                                    <span>
                                        <Button type="button" onClick={(e) => hide(e)} icon="pi pi-times" rounded outlined className="h-2rem w-2rem"></Button>
                                    </span>
                                </div>
                                <div className="overflow-y-auto">
                                    <ul className="list-none p-3 m-0">
                                        <li>
                                            <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                    <span className="font-medium">FAVORITES</span>
                                                    <i className="pi pi-chevron-down"></i>
                                                    <Ripple />
                                                </div>
                                            </StyleClass>
                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <li>
                                                    <Link className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full" to='/' style={{ textDecoration: 'none' }}>
                                                        <i className="pi pi-home mr-2"></i>
                                                        <span className="font-medium">Home</span>
                                                    
                                                        <Ripple />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full" to='/register' style={{ textDecoration: 'none' }}>
                                                        <i className="pi pi-bookmark mr-2"></i>
                                                        <span className="font-medium">Cadastro</span>
                                                        <Ripple />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full" to='/birthdays' style={{ textDecoration: 'none' }}>
                                                        <i className="pi pi-users mr-2"></i>
                                                        <span className="font-medium">Aniversariantes</span>
                                                        <Ripple />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                {/* <div className="mt-auto">
                                    <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                                    <a v-ripple className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                                        <span className="font-bold">Amy Elsner</span>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                )}
            ></Sidebar>
        </div>
      </div>
    )
}
        