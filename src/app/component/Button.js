import Link from "next/link"
import style from './style/button.module.sass'


const Button  = (props) => {
    if(props.href){
        return <Link className={style.button} href={props.href}>{props.children}</Link>
    }

    return <button type="button"  className={style.button}> {props.children}</button>
}

export default Button