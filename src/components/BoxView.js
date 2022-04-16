import React, {useState, useEffect} from 'react';

function Box(props) {
    const [boxData, setBoxData] = useState(null);

  useEffect(() => {

  }, []);

function getBox(){
  const url = `https://rocky-peak-12032.herokuapp.com/boxes`;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
    setBoxData(res);
    })
    .catch(console.error);
}

    return (
        <div>
            
        </div>
    );
}

export default Box;