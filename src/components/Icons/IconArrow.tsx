type Props = {
  fill?: "#6C6C79"
}

const IconArrow = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
      <path
        id="Path_1237"
        data-name="Path 1237"
        d="M18,0H5.786V2.451l7.9.117L0,16.25,1.75,18,15.433,4.318l.117,7.9H18Z"
        transform="translate(18) rotate(90)"
        fill={props.fill}
      />
    </svg>
  )
}

export default IconArrow
