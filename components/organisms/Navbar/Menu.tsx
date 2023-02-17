import cx from "classnames";

interface MenuProps {
  title: string;
  active?: boolean;
}

const Menu = (props: MenuProps) => {
  const { title, active } = props;
  const classTitle = cx({
    "nav-link": true,
    active,
  });
  return (
    <li className="nav-item my-auto">
      <a className={classTitle} aria-current="page">
        {title}
      </a>
    </li>
  );
};

export default Menu;
