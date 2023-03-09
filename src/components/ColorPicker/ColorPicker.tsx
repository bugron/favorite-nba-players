import { FC, useRef } from "react";
import styles from "./ColorPicker.module.css";
import colorPicker from "../../assets/images/color-picker.svg";
import classNames from "classnames";

export interface NBAPlayerListProps {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

export const ColorPicker: FC<NBAPlayerListProps> = ({ color, setColor }) => {
  const pickerRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <img
        src={colorPicker}
        alt="Color picker"
        className={classNames(styles.pickerIcon)}
        onClick={() => {
          pickerRef?.current?.click();
        }}
      />
      <input
        ref={pickerRef}
        type="color"
        className={classNames(styles.colorPicker)}
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
    </>
  );
};
