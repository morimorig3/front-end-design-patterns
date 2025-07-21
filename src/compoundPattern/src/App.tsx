import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type FC,
  type ReactNode,
  type SetStateAction,
} from "react";
import "./App.css";

const PopUpContext = createContext<{
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
}>({
  isShow: false,
  setIsShow: () => {},
});

const PopUpComponent: FC<{ children: ReactNode }> = ({ children }) => {
  const [isShow, setIsShow] = useState(false);
  return <PopUpContext value={{ isShow, setIsShow }}>{children}</PopUpContext>;
};

const Button = () => {
  const { isShow, setIsShow } = useContext(PopUpContext);
  return (
    <button onClick={() => setIsShow((prev) => !prev)}>
      {isShow ? "閉じる" : "開く"}
    </button>
  );
};
const Menu = () => {
  const { isShow } = useContext(PopUpContext);
  return (
    isShow && (
      <ul>
        <li>アイテム</li>
      </ul>
    )
  );
};
const PopUp = Object.assign(PopUpComponent, { Button, Menu });

function App() {
  return (
    <PopUp>
      <PopUp.Button />
      <PopUp.Menu />
    </PopUp>
  );
}

export default App;
