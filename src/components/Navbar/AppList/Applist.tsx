import { useState } from 'react';
import './Applist.scss';
import Typing from '../../Apps/Typing/Typing';
import { IoMdClose } from 'react-icons/io';

const Applist = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [appIsActive, setAppIsActive] = useState<number | null>(null);
    const menuItems = [['Test pisania', <Typing/>]];
  
    const activateApp = (index:number):void => {
      setIsOpen(false);
      setAppIsActive(index);
    }

    const closeApp = ():void => {
      setAppIsActive(null);
    }

    return (
        <>
        <button onClick={() => setIsOpen(!isOpen)} className='btn_slide'>Aplikacje</button>
        <div className="container">
          <menu className={`${isOpen ? "expanded" : ''}`}>
            {menuItems.map((item, i) => (
              <button
                key={i}
                onClick={() => activateApp(i)}
                className="item"
                style={{ animationDelay: `${i * 100}ms` }}>
                {item[0]}
              </button>
            ))}
          </menu>
        </div>
        {appIsActive !== null &&
        <div className='app_background'>
          <div className='app_box'>
            <div className='app_btn_box'>
              <button onClick={closeApp}>
                <IoMdClose />
              </button>
            </div>
            {menuItems[appIsActive][1]}
          </div>
        </div>
        }
      </>
    );
  };

export default Applist;
