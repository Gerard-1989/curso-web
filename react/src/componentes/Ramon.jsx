let Ramon = (props) => {
  return (
    <>
      <p>
        La temperatura de {props.ciudad} es {props.temperatura}
      </p>
    </>
  );
};
export default Ramon;

/*
En App.jsx dintre del return posariem:  
        <Ramon ciudad="Barcelona" temperatura={20} />
        <Ramon ciudad="Madrid" temperatura={30} />
*/
