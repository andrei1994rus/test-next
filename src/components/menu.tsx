import IUrl from "@/interfaces/IUrl";
import Link from "next/link";
import {Component} from "react";
import styles from '@/styles/Menu.module.css';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

type navdata=IUrl[]; /*Array<IUrl>*/

const navData:navdata=
[
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Get list",
    path: "/getAll"
  },
  {
    name: "Get name",
    path: "/getOne"
  }
];

const mapItems=(item:IUrl)=>
{
    const {name,path}=item;
    
    return (
        <strong>
            <Link href={path}>{name}</Link>
        </strong>
    );
}

export default class Menu extends Component
{
    constructor(props: {} | Readonly<{}>)
    {
        super(props);
    }

    render()
    {
        return (
        <Box sx={{flexGrow:1}}>
            <AppBar position="static">
              <Toolbar>
              <ul className={styles.menu__ul}>
                {navData.map((item:IUrl,index:number)=>
                    (
                        <li className={styles.menu__li} key={index}>{mapItems(item)}</li>
                    ))}
                </ul>
              </Toolbar>
            </AppBar>
        </Box>
        );
    }
};