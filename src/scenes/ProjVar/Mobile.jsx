import React from 'react';

const Mobile = ({ images }) => {
  console.log(images);
  return (
    <div className="gallery-proj">
      <div className="row-proj">
        <div className="item-proj">
          <div className="index-proj"><p>1</p></div>
          <div className="img-proj"><img src={images[0]} alt="1" /></div>
        </div>
        <div className="item-proj">
          <div className="index-proj"><p>2</p></div>
          <div className="img-proj"><img src={images[1]} alt="2" /></div>
        </div>
        <div className="item-proj">
          <div className="index-proj"><p>3</p></div>
          <div className="img-proj"><img src={images[2]} alt="3" /></div>
        </div>
      </div>
      <div className="row-proj">
        <div className="item-proj">
          <div className="index-proj"><p>4</p></div>
          <div className="img-proj"><img src={images[3]} alt="4" /></div>
        </div>
        <div className="item-proj">
          <div className="index-proj"><p>5</p></div>
          <div className="img-proj"><img src={images[4]} alt="5" /></div>
        </div>
        <div className="item-proj">
          <div className="index-proj"><p>6</p></div>
          <div className="img-proj"><img src={images[5]} alt="6" /></div>
        </div>
      </div>
      <div className="row-proj">
        <div className="item-proj">
          <div className="index-proj"><p>7</p></div>
          <div className="img-proj"><img src={images[6]} alt="7" /></div>
        </div>
        <div className="item-proj">
          <div className="index-proj"><p>8</p></div>
          <div className="img-proj"><img src={images[7]} alt="8" /></div>
        </div>
        <div className="item-proj">
          <div className="index-proj"><p>9</p></div>
          <div className="img-proj"><img src={images[8]} alt="9" /></div>
        </div>
      </div>
      <div className="row-proj">
        <div className="item-proj">
          <div className="index-proj"><p>10</p></div>
          <div className="img-proj"><img src={images[9]} alt="10" /></div>
        </div>
        <div className="item-proj">
          <div className="index-proj"><p>11</p></div>
          <div className="img-proj"><img src={images[10]} alt="11" /></div>
        </div>
        <div className="item-proj">
          <div className="index-proj"><p>12</p></div>
          <div className="img-proj"><img src={images[11]} alt="12" /></div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
