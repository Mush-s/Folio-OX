import ReactDOM from 'react-dom';

const Test = () => {
  return ReactDOM.createPortal(
    <h1>Hello Portals</h1>,
    document.getElementById('portal')
  );
};


export default Test;
