// Constants
import { COLORS } from '@/constants';

// Types
import { IIcon } from './icon.type';

interface SearchIconProps extends IIcon {}

const SearchIcon = ({ color = COLORS.GRAY_500 }: SearchIconProps) => {
  return (
    <svg
      width="28"
      height="21"
      viewBox="0 0 28 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1292 15.0958L17.3726 12.3393C18.0363 11.4558 18.3945 10.3804 18.3933 9.27542C18.3933 6.45297 16.097 4.15668 13.2746 4.15668C10.4521 4.15668 8.15582 6.45297 8.15582 9.27542C8.15582 12.0979 10.4521 14.3942 13.2746 14.3942C14.3796 14.3954 15.4549 14.0371 16.3384 13.3735L19.095 16.13C19.2345 16.2547 19.4165 16.3213 19.6036 16.3161C19.7907 16.3109 19.9687 16.2342 20.101 16.1019C20.2333 15.9695 20.31 15.7915 20.3152 15.6044C20.3205 15.4174 20.2539 15.2354 20.1292 15.0958ZM9.61832 9.27542C9.61832 8.55229 9.83276 7.84539 10.2345 7.24412C10.6363 6.64286 11.2073 6.17422 11.8754 5.89749C12.5435 5.62076 13.2786 5.54835 13.9879 5.68943C14.6971 5.83051 15.3486 6.17873 15.8599 6.69007C16.3713 7.2014 16.7195 7.85288 16.8606 8.56213C17.0016 9.27137 16.9292 10.0065 16.6525 10.6746C16.3758 11.3427 15.9071 11.9137 15.3059 12.3155C14.7046 12.7172 13.9977 12.9317 13.2746 12.9317C12.3052 12.9305 11.3759 12.5449 10.6905 11.8595C10.0051 11.1741 9.61949 10.2448 9.61832 9.27542Z"
        fill={color}
      />
    </svg>
  );
};

export default SearchIcon;