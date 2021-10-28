import React from 'react';
import sadDog from '../sad-dog.png';
import badMan from '../bad-man.png';

function Story () {
  return(
    <div className="storyContent">
      <p className="large">GREAT!</p>
      <p className="medium">We Are So Happy you Are going to save Chippy!</p>
      <div className="storyImgs">
        <div className="chip">
          <p>Chippy was walking home from Super Hero School yesterday.</p>
          <img src={sadDog} alt="sad super hero husky" />
        </div>
        <div className="badMan">
          <p>The Bad Man Saw Chippy and Stole Him! Now we need you to get 10 swords so you can go FIGHT THE BAD GUY!</p>
          <img src={badMan} alt= "evil character, white man jumping" />
        </div>
      </div>
    </div>
  );
}
export default Story;