import Image from "next/image";
import Link from "next/link";

interface FeaturedItemProps {
  thumbnail: string;
  title: string;
  category: string;
}
const FeaturedItem = (props: FeaturedItemProps) => {
  const { thumbnail, title, category } = props;
  return (
    <div className="featured-game-card position-relative">
      <Link href={"/detail/1"}>
        <div className="blur-sharp">
          <img
            src={`/img/${thumbnail}.png`}
            width="205"
            height="270"
            alt=""
            className="thumbnail"
          />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              <Image src="/icon/game1.svg" width={54} height={36} alt="" />
            </div>
            <div>
              <p className="fw-semibold text-white text-xl m-0">{title}</p>
              <p className="fw-light text-white m-0">{category}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedItem;
