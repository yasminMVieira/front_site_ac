
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';


const Menu: React.FC = () => {
  const items: MenuItem[] = [
    {
        label: 'Home',
        icon: 'pi pi-home',
        url: '/'
    },
    {
        label: 'Cadastro',
        icon: 'pi pi-star',
        url: '/register'
    },
    {
        label: 'Aniversariantes',
        icon: 'pi pi-face-smile',
        url: '/birthdays'
        
    },
];

  const start = <img alt="logo" src={`${process.env.PUBLIC_URL}/logo_acolito.png`} height="40" className="mr-2"></img>;
  
  return (
    <div>
      <Menubar model={items} start={start} />
    </div>   
  );
};

export default Menu;