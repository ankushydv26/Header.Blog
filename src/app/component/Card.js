import Image from "next/image";
import style from "./style/card.module.sass";
import Button from "./Button";

const Card = () => {
  return (
    <div className={style.card_wrap}>
      <div className={style.card}>
        <div className={style.image_wraper}>
          <div className={style.image_card}>
            <Image src="/camera.jpg" alt="ls" width={600} height={400} />
          </div>
        </div>
        <div className={style.content}>
          <div className={`${style.card_label}  c-orange h6`}>Product View</div>
          <div className={`${style.card_title} h3`}>
            A beautiful sunset over the ocean{" "}
          </div>
          <div className={style.card_summary}>
            <p>
              {" "}
              A beautiful sunset over the ocean and view is faboulas and every
              surface is sparkling the light Hey helo why thi kolevari d{" "}
            </p>
          </div>
          <Button href="dk">Read more</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
