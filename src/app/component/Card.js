import Image from "next/image";
import style from "./style/card.module.sass";
import Button from "./Button";
import ConditionalRender from "./conditonal-render";
import getCategoryColor from "../helper/getCategory-color";

const Card = ( props ) => {
  return (
    <div className={style.card_wrap}>
      <div className={style.card}>
        <div className={style.image_wraper}>
          <div className={style.image_card}>
            <Image src="/camera.jpg" alt="ls" width={600} height={400} />
          </div>
        </div>
        <div className={style.content}>
          <ConditionalRender condition={props.label}>
            <div className={`${style.card_label}  c-${getCategoryColor(props.label)} h6`}>
              {props.label}
            </div>
          </ConditionalRender>
          <ConditionalRender condition={props.title}>
            <div className={`${style.card_title} h3`}>{props.title}</div>
          </ConditionalRender>

          <ConditionalRender condition={props.description}>
            <div className={style.card_summary}>
              <p>
                {props.description}
                {/* {" "}

              A beautiful sunset over the ocean and view is faboulas and every

              surface is sparkling the light Hey helo why thi kolevari d{" "} */}
              </p>
            </div>
          </ConditionalRender>
          <ConditionalRender condition={props.href}>
            <Button href="dk">{props.href}</Button>
          </ConditionalRender>
        </div>
      </div>
    </div>
  );
};

export default Card;
