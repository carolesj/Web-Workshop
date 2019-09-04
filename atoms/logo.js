const Logo = (props) => {
  const { className } = props
  const santizedClass = className ? className : ""
  return <img className={santizedClass + " h-full"} src='/static/logo.png' alt='kinase logo'/>
}

export default Logo;
